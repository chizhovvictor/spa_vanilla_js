import MenuButton from "./MenuButton.js";

export default class MainMenu {
    constructor() {
        this.buttons = [
            // new MenuButton("New Game", this.handleNewGameClick.bind(this)),
            // new MenuButton("About Us", this.handleAboutUsClick.bind(this)),
            // new MenuButton("Settings", this.handleSettingsClick.bind(this)),
            new MenuButton("New Game"),
            new MenuButton("About Us"),
            new MenuButton("Settings"),
        ];
    }

    async getHtml() {

        /* 
            Promise.all - метод, который принимает массив промисов и возвращает промис, который 
            выполняется тогда, когда выполняются все промисы из массива
            создаем массив buttonsHtml, который содержит HTML-коды всех кнопок
        */

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

    // handleNewGameClick() {
    //     console.log("Clicked New Game");
    // }

    // handleAboutUsClick() {
    //     console.log("Clicked About Us");
    // }

    // handleSettingsClick() {
    //     console.log("Clicked Settings");

    // }
    
}
