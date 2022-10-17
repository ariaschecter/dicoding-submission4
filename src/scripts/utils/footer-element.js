class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <h3 class="copyright">Made With &hearts; &copy; 2022 Acielana, All Right Reserved</h3>
      </footer>
        `;
  }
}

customElements.define('footer-element', FooterElement);
