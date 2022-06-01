const template = document.createElement('template')
template.innerHTML = `

    <style>
    .container {
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
    }

    </style>

    <div class="container">
        <div class="notify-container">
            <h3 class="notify-title"></h3>
            <p class="notify-content"> </p>
        </div>    
    </div>



`

class CustomNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    // do something once dom is loaded
    connectedCallback(){
        const notificationType = this.getAttribute('id');
        const notifyTitle = this.shadowRoot.querySelector('.notify-title');
        const notifyContent = this.shadowRoot.querySelector('.notify-content');
        const notifyContainer = this.shadowRoot.querySelector('.notify-container')

        if(notificationType && notificationType === 'error'){
            notifyTitle.innerHTML = 'Error'
            notifyContent.innerHTML = 'Error in Operation'
            notifyContainer.style.background = "#bd0909"
        }
        else if(notificationType && notificationType  === 'success'){
            notifyTitle.innerHTML = 'Success'
            notifyContent.innerHTML = 'Success in Operation'
            notifyContainer.style.background = "green"
        }
        else if(notificationType && notificationType  === 'info'){
            notifyTitle.innerHTML = 'Info'
            notifyContent.innerHTML = 'This was the information'
            notifyContainer.style.background = "orange"
        }
        
    }
}

window.customElements.define('custom-notification',CustomNotification)