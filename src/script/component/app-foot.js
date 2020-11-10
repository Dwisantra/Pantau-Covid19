import '../../styles/style.scss';

class AppFoot extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            *{
                margin: 0;
            }
            :host{
                color: #ffffff;
                text-align: center;
            }
            :host p{
                background-color: #f05454 !important;
                padding: 25px;
            }
            :host a{
                color: #ffffff;
                text-decoration: none;
                background-color: transparent;
            }
            :host a:hover{
                text-decoration: underline;
            }
            .love {
                display: inline-block;
                position: relative;
                top: .1.0em;
                font-size: 0.9em;
                color: #e74c3c;
                -webkit-transform: scale(.9);
                -moz-transform: scale(.9);
                transform: scale(.9);
                -webkit-animation: love .5s infinite linear alternate-reverse;
                -moz-animation: love .5s infinite linear alternate-reverse;
                animation: love .5s infinite linear alternate-reverse;
                }
                @-webkit-keyframes love {
                to {-webkit-transform: scale(1.4);}
                }
                @-moz-keyframes love {
                to {-moz-transform: scale(1.4);}
                }
                @keyframes love {
                to {transform: scale(1.2);}
            }
        </style>
        <p>&copy; 2020 dibuat dengan <span class="love">❤</span></i> <a href="https://github.com/Dwisantra">Okvi Dwi Santra</a></p>`;
    }
}

customElements.define("app-foot", AppFoot);