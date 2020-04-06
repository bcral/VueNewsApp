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

export default {
    name: "NewsTab",
    components: {
        NewsArticle
    },
    data (){ return {news: [] } },
    methods: {
        newSearch() {
            var url;
            var dateFrom = this.$db.db.queryDateFrom;
            var dateTo = this.$db.db.queryDateTo;
            url = 'https://newsapi.org/v2/everything?q=' +
            this.$route.params.id + 
            '&from=' + dateFrom +
            '&to=' + dateTo +
            '&sortBy=' + this.$db.db.querySort +
            '&pageSize=' + this.$db.db.queryNumOfArts +
            '&apiKey=6388b8718eaa4dd68f5d1e2fc5542ba3';

            url = url.toString();

            axios.get(url).then(response => {
                this.news = response.data.articles;
            }).catch(error => console.log(error));
        }
    },
    async created () {
        await this.$db.populate();
        this.newSearch();
    },
      watch: {
    '$route.params.id': 'newSearch'
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

#newsPage {
    padding: 0.75em 1em;
}
</style>