import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/channel-selector';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <channel-selector spotify youtube continuousPlay> </channel-selector>
    `;
  }

  static styles = css`
    :host {
      display: block;
      background-color: black;
      border: 1px solid red;
      position: relative;
    }
  `;
}
