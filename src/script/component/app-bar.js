import '../../styles/style.scss';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar sticky-top">
            <a class="navbar-brand" href="#">Pantau Covid-19</a>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);