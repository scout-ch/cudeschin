<template>
    <div>
        <f7-card
            v-for="(article, index) in articles"
            :key="article.id"
            :class="['content-card', 'card-' + index]"
            @click.native="openCard"
        >
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link :href="'/article/' + article.slug">
                    {{ article.title }}
                </f7-link>
            </f7-card-header>
        </f7-card>
    </div>
</template>

<script>
export default {
    props: ['articles'],
    methods: {
        openCard: function(event) {
            if (event.target.tagName == 'A') return;
            let link = event.target.querySelector('a.link');
            this.$f7router.navigate(link.pathname);
        }
    }
};
</script>
