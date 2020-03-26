<template>
  <div id="container">
    <div id="displayEl">
      <searchbar @onSearch="searchEvent"></searchbar>
      <div> 
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from './components/Searchbar.vue'

export default {
  name: 'app',
  components: {
    Searchbar
  },
  data (){ return {news: String } },
  methods: {
    searchEvent(search) {
      this.news = search;
      this.$router.push({ name: "Search", params:{ id: search } })
    }
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
