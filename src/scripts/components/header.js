import '@/styles/logoCovid.css';
import '@/scripts/components/logoCovid';

class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render(){
        this.innerHTML = `
            <logo-covid></logo-covid>
            <h1 class="h2 text-center font-weight-medium">Informasi tentang COVID-19</h1>
            <h2 class="h1 text-center ">Stay Home, Stay Safe</h2>
        `;
    }
}

customElements.define("header-component", Header);