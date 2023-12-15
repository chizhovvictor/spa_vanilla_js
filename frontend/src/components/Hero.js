import Menu from "./Menu.js";

export default class {
    constructor() {
        document.title = 'Main';
        this.menu = new Menu();
    }

    async getHtml() {
        const menuHtml = await this.menu.getHtml();

        return `
            <div class="hero vh-100">
                <div class="container">
                    <div class="row">
                        <div class="row justify-content-center">
                            <img class="w-30" src="/src/static/logo.png" alt="">
                        </div>
                        <div class="row justify-content-center">
                            ${menuHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}