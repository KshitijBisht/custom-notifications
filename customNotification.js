const template = document.createElement('template')
template.innerHTML = `

    <style>

    </style>

    <div class="notification-container">
        test
    </div>



`

class CustomNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('custom-notification',CustomNotification)