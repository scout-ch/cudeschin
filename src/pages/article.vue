<template>
    <f7-page>
        <f7-navbar back-link="Zurück">
            <f7-nav-title>{{ article.title }}</f7-nav-title>
            <f7-nav-right>
                <f7-button
                    icon-material="share"
                    style="color:white"
                    @click="share"
                />
            </f7-nav-right>
        </f7-navbar>
        <f7-block class="article">
            <article v-html="article.html" />
        </f7-block>
    </f7-page>
</template>

<script>
import articles from '@/store';

export default {
    props: ['slug'],
    mounted: function() {
        this.$$('article a').each((index, link) => {
            console.log(link.href);
            if (!link.href.includes('/article/')) {
                this.$$(link)
                    .addClass('external')
                    .prop('target', '_blank');
            }
        });
    },
    computed: {
        article: function() {
            return articles.find(this.slug);
        }
    },
    methods: {
        share: async function(event) {
            try {
                await navigator.share({
                    title: 'cudeschin: ' + this.article.title,
                    url: window.location.href
                });
            } catch (e) {
                this.$f7.dialog.alert(
                    'Leider bietet dein Browser keine Unterstüzung für dieses Feature. ' +
                        'Du kannst aber auch einfach die URL kopieren und den Artikel so teilen.',
                    'Ooops, ein Fehler!'
                );
            }
        }
    }
};
</script>

<style scope>
.article h2 {
    display: none;
}
</style>
