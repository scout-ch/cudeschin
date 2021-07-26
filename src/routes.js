import HomePage from '@/pages/home.vue';
import ArticlePage from '@/pages/article';

export default [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/article/:id',
        component: ArticlePage
    }
];
