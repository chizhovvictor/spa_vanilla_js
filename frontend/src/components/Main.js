import TemplateView from './templateView.js';

export default class extends TemplateView {
    constructor() {
        super();
        this.setTitle('Main');
    }

    async getHtml() {
        return `
            <h1 class="content">Main</h1>
            <p>You are viewing the Main!</p>
        `;
    }

}