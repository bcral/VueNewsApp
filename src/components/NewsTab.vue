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
import axios from 'axios'

var totalResults = 5;

export default {
    name: "NewsTab",
    components: {
        NewsArticle
    },
    data (){ return {news: [] } },
    methods: {
        newSearch(searchInfo) {
            var url;
            url = 'https://newsapi.org/v2/everything?q=' +
            searchInfo + 
            '&from=2020-03-21' +
            '&sortBy=popularity' +
            '&pageSize=' + totalResults +
            '&apiKey=6388b8718eaa4dd68f5d1e2fc5542ba3';

            axios.get(url).then(response => {
                this.news = response.data.articles;
            });
        }
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