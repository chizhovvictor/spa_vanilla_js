import Button from "./Button.js";

export default class {
    constructor() {
      this.links = [
        { path: "/", text: "Hero" },
        { path: "/posts", text: "Posts" },
        { path: "/settings", text: "Settings" },
      ];
      this.button = new Button("Button 1");
    }
  
    async getHtml() {
        const buttonHtml = await this.button.getHtml();
      return `
            <div class="row mt-5">
                <div class="d-flex justify-content-start">
                    ${buttonHtml}
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-start">
                    ${buttonHtml}
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-start">
                    ${buttonHtml}
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-start">
                    ${buttonHtml}
                </div>
            </div>
      `;
    }
  }
  