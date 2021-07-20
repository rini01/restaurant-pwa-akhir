class EmptyFavoriteComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
            <div class="empty-favorite-tag">
                <p>Favorite restaurant still empty</p>
            </div>
        `;
  }
}

customElements.define('empty-favorite', EmptyFavoriteComponent);
