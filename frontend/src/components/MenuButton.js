export default class MenuButton {
    constructor(text, onClick) {
        this.text = text || "Button";
        this.onClick = onClick || (() => {});
    }

    async getHtml() {
        return `
        <button class="button_menu" onclick="${this.onClick.toString()}">
            <span class="button_text">${this.text}</span>
        </button>
        `;
    }

}