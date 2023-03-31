import { LitElement, html, TemplateResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@internetarchive/icon-audio';

@customElement('iamusic-noimage')
export class IaMusicImagePlaceholder extends LitElement {
  @property({ type: String, reflect: true }) iaIdentifier = '';

  @property({ type: String, reflect: true }) gradType = '';

  private hashStrToInt(str: string): number {
    return str
      .split('')
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
  }

  get hashedIdentifier(): string {
    if (!this.iaIdentifier) {
      this.gradType = 'grad0';
      return 'grad0';
    }
    const gradient = this.hashStrToInt(this.iaIdentifier) % 6; // returns 0-5
    this.gradType = `grad${gradient}`;
    return `grad${gradient}`;
  }

  override render(): TemplateResult {
    return html`
      <div class=${`no-image ${this.hashedIdentifier}`}>
        <ia-icon-audio></ia-icon-audio>
      </div>
    `;
  }

  static styles = css`
    ia-icon-audio {
      margin: auto;
      display: block;
      height: var(--imageHeight, 100%);
      width: var(--imageWidth, 100%);
    }
    :host {
      height: 100%;
      width: 100%;
    }

    :host([gradtype='grad0']) {
      background: linear-gradient(
        hsl(340, 80%, 55%),
        hsl(0, 80%, 33%) 35%,
        hsl(0, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    :host([gradtype='grad1']) {
      background: linear-gradient(
        hsl(300, 80%, 55%),
        hsl(330, 80%, 33%) 35%,
        hsl(330, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    :host([gradtype='grad2']) {
      background: linear-gradient(
        hsl(200, 80%, 55%),
        hsl(230, 80%, 33%) 35%,
        hsl(230, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    :host([gradtype='grad3']) {
      background: linear-gradient(
        hsl(160, 80%, 55%),
        hsl(190, 80%, 33%) 35%,
        hsl(190, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    :host([gradtype='grad4']) {
      background: linear-gradient(
        hsl(250, 80%, 55%),
        hsl(280, 80%, 33%) 35%,
        hsl(280, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    :host([gradtype='grad5']) {
      background: linear-gradient(
        hsl(280, 80%, 55%),
        hsl(310, 80%, 33%) 35%,
        hsl(310, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }
  `;
}
