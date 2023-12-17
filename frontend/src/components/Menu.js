import Button from "./Button.js";

export default class {
    constructor() {
      this.links = [
        { path: "/", text: "Hero" },
        { path: "/posts", text: "Posts" },
        { path: "/settings", text: "Settings" },
      ];
      this.button = new Button("New Game");
    }
  
    async getHtml() {
        const buttonHtml = await this.button.getHtml();
      return `
            <div class="row">
                <div class="d-flex justify-content-end">
                    ${buttonHtml}
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    ${buttonHtml}
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    ${buttonHtml}
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    ${buttonHtml}
                </div>
            </div>
      `;
    }
  }
  