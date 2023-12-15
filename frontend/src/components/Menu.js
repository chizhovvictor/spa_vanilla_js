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
            <div class="row">
                ${buttonHtml}
            </div>
            <div class="row">
                ${buttonHtml}
            </div>
            <div class="row">
                ${buttonHtml}
            </div>
            <div class="row">
                ${buttonHtml}
            </div>
      `;
    }
  }
  