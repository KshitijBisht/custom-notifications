const template = document.createElement('template')
template.innerHTML = `

    <style>
    .tooltip-container {
        display: inline-block;
        position: relative;
        z-index: 2;
    }
    .notify-container {
        position: absolute;
        bottom: 500%;
        z-index: 9;
        width: 500px;
        background: white;
        box-shadow: 5px 5px 10px rgba(0,0,0,.1);
    }

    </style>

    <div class="tooltip-container">
        <button id="success" class="success">Success</button>
        <button id="error" class="error">Error</button>
        <button id="info" class="info">Info</button>

        <div class="notify-container">
            My custom Notifications
        </div>    
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