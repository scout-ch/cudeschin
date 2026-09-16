module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // Page components are routed by file name (home.vue, article.vue)
        'vue/multi-word-component-names': 'off'
    },
    parserOptions: {
        parser: '@babel/eslint-parser'
    }
};
