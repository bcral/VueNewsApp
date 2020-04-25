<template>
  <div id="container">
    <div id="displayEl">
      <searchbar></searchbar>
      <router-view />
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
  methods: {
  }
}
</script>

<style>
#container {
  resize: both;
  background-color: rgb(63, 103, 156, 0.8);
  border: solid 2px rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  height: 380px;
  width: 288px;
  min-height: 380px;
  min-width: 288px;
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: auto;
  overflow: scroll;
  position: relative;
  margin: auto;
}

#displayEl {
  height: 100%;
  width: 100%;
}

h3 {
  color: #fff;
}
</style>
