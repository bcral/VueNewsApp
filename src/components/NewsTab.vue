<template>
    <div id="newsPage">
        <ul id="newsList">
            <news-article v-for="i of news" :newsItem="i" :key="i.url">
            </news-article>
        </ul>
    </div>
</template>

<script>
import NewsArticle from './NewsArticle.vue'

export default {
    name: "NewsTab",
    props: { news: Array },
    components: {
        NewsArticle
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#newsList {
    list-style-type: none;
    padding-left: 0px;
    margin: 0px;
}
</style>