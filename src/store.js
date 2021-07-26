import articlesSource from '@/assets/articles.json';
import marked from 'marked';

const translations = ['de', 'fr', 'it'];

class ArticleStore {
    constructor() {
        const language = localStorage.getItem('lang');
        if (language !== null) {
            this.activate(language);
        } else {
            const browser_language = navigator.language.substring(0, 2);
            this.activate(browser_language);
        }
    }

    activate(language, persist = false) {
        this.lang = translations.includes(language) ? language : 'de';
        this.articles = articlesSource[this.lang];
        this.load();
        if (persist) {
            localStorage.setItem('lang', language);
        }
    }

    get all() {
        return this.articles;
    }

    find(id) {
        return this.articles.find(a => a.id === id);
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

export default store;
