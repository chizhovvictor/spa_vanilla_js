import Menu from "./Menu.js";

export default class {
    constructor() {
        document.title = 'Main';
        this.menu = new Menu();
    }

    async getHtml() {
        const menuHtml = await this.menu.getHtml();

        return `
        <div class="row-1 nav_bar">
            <div class="p-2">
                <span class="logo_text ps-5">PING PONG</span>
            </div>      
        </div>
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                        <div class="row logo justify-content-end me-5">
                            <span>
                                <img class="img_logo m-2" src="/src/static/logo2.png" alt=""></img>
                            </span>
                            <span>    
                                <img class="img_logo m-2" src="/src/static/text_logo.png" alt=""></img>
                            </span>
                        </div>
                        <div class="me-5 mt-5">
                            ${menuHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}