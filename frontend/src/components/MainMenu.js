import MenuButton from "./MenuButton.js";

export default class MainMenu {
    constructor() {
        this.buttons = [
            new MenuButton("New Game", () => {
                console.log("Clicked New Game");
            }),
            new MenuButton("About Us", () => {
                console.log("Clicked About Us");
            }),
            new MenuButton("Settings", () => {
                console.log("Clicked Settings");
            }),
        ];
    }

    async getHtml() {
        const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));

        const menuHtml = buttonsHtml.map(html => `
            <div class="row">
                <div class="d-flex justify-content-end">
                    ${html}
                </div>
            </div>
        `).join('');

        return menuHtml;
    }
}
