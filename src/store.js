import articlesSource from '@/assets/articles.json';
import marked from 'marked';

class ArticleStore {
    constructor() {
        this.articles = articlesSource;
    }

    get all() {
        return this.articles;
    }

    find(slug) {
        return this.articles.find(a => a.slug === slug);
    }

    load() {
        for (const article of this.articles) {
            article.html = marked(article.content);
            article.text = this.html_to_text(article.html);
        }
    }

    html_to_text(content) {
        let html = marked(content);
        let dom = new DOMParser().parseFromString(html, 'text/html');
        return dom.body.textContent || '';
    }
}

const store = new ArticleStore();
store.load();

export default store;
