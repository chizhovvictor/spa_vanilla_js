/* class type

export default class MenuButton {
    constructor(text, onClick) {
        this.text = text || "Button";
        this.onClick = onClick || (() => {});
    }

    getHtml() {
        
        return `
        <button class="button_menu">
            <span class="button_text">${this.text}</span>
        </button>
        `;
    }
}

*/

// function type
function createMenuButton(text, onClick) {
    text = text || "Button";
    onClick = onClick || (() => {});

    function getHtml() {
        return `
        <button class="button_menu">
            <span class="button_text">${text}</span>
        </button>
        `;
    }

    return {
        getHtml,
        onClick
    };
}