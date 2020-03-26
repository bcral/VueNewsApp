<template>
  <div id="container">
    <div id="displayEl">
      <searchbar @onSearch="newSearch"></searchbar>
      <div> 
        <news-tab :news="news"></news-tab>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from './components/Searchbar.vue'
import NewsTab from './components/NewsTab.vue'
import axios from 'axios'

var totalResults = 5;
var url;

export default {
  name: 'app',
  components: {
    Searchbar,
    NewsTab
  },
  data (){ return {news: [] } },
  methods: {
    newSearch(searchInfo) {
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
  },
  created() {
    this.url = null;
  }
}
</script>

<style>
#container {
  resize: both;
  background-color: rgb(214, 218, 162);
  border: solid 2px rgb(114, 112, 22);
  height: 380px;
  width: 288px;
  min-height: 380px;
  min-width: 288px;
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: auto;
  padding: 0.75em 1em;
  overflow: scroll;
  position: relative;
}

#defaultText {
  text-align: center;
  margin: 3em;
  line-height: 25px;
}
</style>
