import TemplateView from './templateView.js';

export default class extends TemplateView {
    constructor() {
        super();
        this.setTitle('Settings');
    }

    async getHtml() {
        return `
            <h1 class="content">Settings</h1>
            <p>You are viewing the Settings!</p>
        `;
    }

}