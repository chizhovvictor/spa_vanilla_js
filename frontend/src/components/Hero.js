import Menu from "./Menu.js";

export default class {
    constructor() {
        document.title = 'Main';
        this.menu = new Menu();
    }

    async getHtml() {
        const menuHtml = await this.menu.getHtml();

        return `
            <div class="hero">
                <div class="container vh-100">
                    <div class="row">
                        <div class="col-md-4 vh-100 right_pannel">
                            <div class="row-4 pt-5">
                                <span class="logo">
                                    <p class="logo_text">PING</p>
                                    <p class="logo_text">PONG</p>
                                </span>
                            </div>
                            <div class="row-8">
                                ${menuHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}