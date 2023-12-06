import TemplateView from './templateView.js';

export default class extends TemplateView {
    constructor() {
        super();
        this.setTitle('Posts');
    }

    async getHtml() {
        return `
            <h1 class="content">Posts</h1>
            <p>You are viewing the Posts!</p>
        `;
    }

}