export default class {
    constructor(text) {
        this.text = text || "Button Text";
    }

    async getHtml() {
        return `
        <button class="button_menu">
            <span class="button_text">${this.text}</span>
        </button>
        `;
    }

}