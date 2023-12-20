export default class MenuButton {
    constructor(text) {
        this.text = text || "Button";
    }

    getHtml() {
        
        return `
        <button class="button_menu">
            <span class="button_text">${this.text}</span>
        </button>
        `;
    }
}
