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
        bottom: 800%;
        z-index: 9;
        width: 500px;
        background: white;
        box-shadow: 5px 5px 10px rgba(0,0,0,.1);
        font-size: .8em;
        color: white;
        border-radius: .5em;
        padding: 1em;
        transform: scale(0);
        transform-origin: bottom ;
        transition: transform .5s cubic-bezier(0.860,0.000,0.070,1.000)
    }

    </style>

    <div class="tooltip-container">
        <button id="success" class="success">Success</button>
        <button id="error" class="error">Error</button>
        <button id="info" class="info">Info</button>

        <div class="notify-container">
            <slot name="message"/>
        </div>    
    </div>



`

class CustomNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    notification(expandState){
        const notification = this.shadowRoot.querySelector('.notify-container')
        const success = this.shadowRoot.querySelector('.success')
        const error = this.shadowRoot.querySelector('.error')
        const info = this.shadowRoot.querySelector('.info')

        if(expandState === true){
            notification.style.transform = 'scale(1)';
            expandState = false
        }
        else {
            notification.style.transform = 'scale(0)';

        }



    }
    // do something once dom is loaded
    connectedCallback(){
        this.shadowRoot.querySelector('.success').addEventListener('click', ()=> {
            this.notification(true)
        })
        this.shadowRoot.querySelector('.error').addEventListener('click', ()=> {
            this.notification(false)
        })

        if(this.getAttribute('notification_background')){
            this.shadowRoot.querySelector('.notify-container').style.background = this.getAttribute('notification_background');
        }
    }
}

window.customElements.define('custom-notification',CustomNotification)