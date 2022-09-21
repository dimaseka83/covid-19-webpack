class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        
    `;
  }
}

customElements.define('nav-bar', Navbar);
