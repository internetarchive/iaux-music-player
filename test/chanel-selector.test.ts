import { html, fixture, expect } from '@open-wc/testing';

import type { ChannelSelector } from '../src/channel-selector/channel-selector';
import '../src/channel-selector/channel-selector';

describe('ChannelSelector', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector></channel-selector>`
    );

    expect(el.title).to.equal('Hey there');
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector></channel-selector>`
    );
    el.shadowRoot!.querySelector('button')!.click();
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector title="attribute title"></channel-selector>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<ChannelSelector>(
      html`<channel-selector></channel-selector>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
