<template>
    <f7-list class="article-list searchbar-found">
        <f7-list-item
            v-for="article in articles"
            :key="article.id"
            :title="article.title"
            :link="'/article/' + article.id"
            :data-text="article.content"
        >
            <div slot="content" class="source-text">
                {{ article.text }}
            </div>
        </f7-list-item>
    </f7-list>
</template>

<script>
export default {
    props: ['articles']
};
</script>

<style scoped>
.source-text {
    display: none;
}
</style>
