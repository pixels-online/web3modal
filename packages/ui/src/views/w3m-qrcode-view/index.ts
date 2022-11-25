import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { COPY_ICON } from '../../utils/Svgs'
import { global } from '../../utils/Theme'
import { handleUriCopy } from '../../utils/UiHelpers'

@customElement('w3m-qrcode-view')
export class W3mQrcodeView extends LitElement {
  public static styles = [global]

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`
      <w3m-modal-header
        title="Scan the code"
        .onAction=${handleUriCopy}
        .actionIcon=${COPY_ICON}
      ></w3m-modal-header>

      <w3m-modal-content>
        <w3m-walletconnect-qr></w3m-walletconnect-qr>
      </w3m-modal-content>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-qrcode-view': W3mQrcodeView
  }
}