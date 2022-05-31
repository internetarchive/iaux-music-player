import { html, fixture, expect } from '@open-wc/testing';

import type { ChannelSelector } from '../src/channel-selector/channel-selector';
import '../src/channel-selector/channel-selector';
import { channelTypes, channelIcons } from '../src/channel-selector/channels';

describe('`<channel-selector>`', () => {
  describe('Defaults', () => {
    it('Selects IA  by default', async () => {
      const el = await fixture<ChannelSelector>(
        html`<channel-selector></channel-selector>`
      );

      const iaChannelSelected = el.shadowRoot!.querySelector('li.selected .ia');

      await expect(iaChannelSelected).to.exist;
      await expect(el.selected).to.equal('ia');
    });
    it('displays IA by default', async () => {
      const el = await fixture<ChannelSelector>(
        html`<channel-selector></channel-selector>`
      );

      const iaChannel = el.shadowRoot!.querySelector('.selected .ia');

      await expect(iaChannel).to.exist;
      await expect(iaChannel?.innerHTML).to.contain('Internet Archive');
      await expect(iaChannel?.innerHTML).to.contain('Player');
    });
    it('displays WEBAMP by default', async () => {
      const el = await fixture<ChannelSelector>(
        html`<channel-selector></channel-selector>`
      );

      const webampChannel = el.shadowRoot!.querySelector('.wa');

      await expect(webampChannel).to.exist;
      await expect(webampChannel?.innerHTML).to.contain('Webamp');
      await expect(el.getAttribute('webamp')).to.exist;
    });
    it('displays RADIO style by default', async () => {
      const el = await fixture<ChannelSelector>(
        html`<channel-selector></channel-selector>`
      );

      await expect(el.getAttribute('displayStyle')).to.equal('radio');
    });
    describe('Dropdown view', () => {
      it('shows selected icon at toggle button', async () => {
        const el = await fixture<ChannelSelector>(
          html`<channel-selector
            displaystyle="dropdown"
            selected=${channelTypes.beta}
          ></channel-selector>`
        );

        await expect(el.currentlySelectedIcon).to.equal(channelIcons.beta);

        const dropdown = el.shadowRoot?.querySelector('ia-dropdown');
        await expect(dropdown).to.exist;
        await expect(dropdown?.querySelector('img.ia-beta')).to.exist;

        el.selected = channelTypes.ia;
        await el.updateComplete;
        await expect(dropdown?.querySelector('img.ia')).to.exist;

        el.selected = channelTypes.spotify;
        await el.updateComplete;
        await expect(dropdown?.querySelector('img.spotify')).to.exist;

        el.selected = channelTypes.youtube;
        await el.updateComplete;
        await expect(dropdown?.querySelector('img.youtube')).to.exist;

        el.selected = channelTypes.webamp;
        await el.updateComplete;
        await expect(dropdown?.querySelector('img.webamp')).to.exist;
      });
    });
    describe('Events', () => {
      it('emits `postInit` on firstUpdate', async () => {
        let postInitEventReceived = false;
        await fixture<ChannelSelector>(
          html`<channel-selector
            @postInit=${() => {
              postInitEventReceived = true;
            }}
          ></channel-selector>`
        );

        await expect(postInitEventReceived).to.be.true;
      });
      it('emits `channelChanged` when new channel is clicked', async () => {
        let channelChangeEventReceived = false;
        let channelChangedTo = '';
        const el = await fixture<ChannelSelector>(
          html`<channel-selector
            spotify
            @channelChange=${(e: CustomEvent) => {
              channelChangeEventReceived = true;
              channelChangedTo = e.detail.channel;
            }}
          ></channel-selector>`
        );
        const spotifyButton = el.shadowRoot!.querySelector(
          '.sp'
        ) as HTMLButtonElement;

        await expect(spotifyButton.classList.contains('selected')).to.be.false;

        spotifyButton!.click();
        await el.updateComplete;
        await expect(channelChangeEventReceived).to.equal(true);
        await expect(channelChangedTo).to.equal('spotify');
      });
    });
  });

  it('can select any channel at creation', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector
        beta
        .selected=${channelTypes.beta}
      ></channel-selector>`
    );

    const streamingSelectedAtStart = el.shadowRoot!.querySelector(
      'li.selected .ia-beta'
    );

    await expect(streamingSelectedAtStart).to.exist;
    await expect(streamingSelectedAtStart?.innerHTML).to.contain('Beta');
  });

  it('updates IA label when playing samples', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector samples></channel-selector>`
    );

    const iaChannel = el.shadowRoot!.querySelector('li.selected .ia');

    await expect(iaChannel?.innerHTML).to.contain('Internet Archive');
    await expect(iaChannel?.innerHTML).to.contain('Samples');
  });

  it('displays Beta with `beta` attribute', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector beta></channel-selector>`
    );

    const streamingChannel = el.shadowRoot!.querySelector('.ia-beta');

    await expect(streamingChannel).to.exist;
    await expect(streamingChannel?.innerHTML).to.contain('Beta');
    await expect(el.getAttribute('beta')).to.exist;
  });

  it('displays SPOTIFY with `spotify` attribute', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector spotify></channel-selector>`
    );

    const spotifyChannel = el.shadowRoot!.querySelector('.sp');

    await expect(spotifyChannel).to.exist;
    await expect(spotifyChannel?.innerHTML).to.contain('Spotify');
    await expect(el.getAttribute('spotify')).to.exist;
  });

  it('displays YOUTUBE with `youtube` attribute', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector youtube></channel-selector>`
    );

    const youtubeChannel = el.shadowRoot!.querySelector('.yt');

    await expect(youtubeChannel).to.exist;
    await expect(youtubeChannel?.innerHTML).to.contain('YouTube');
    await expect(el.getAttribute('youtube')).to.exist;
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector></channel-selector>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
