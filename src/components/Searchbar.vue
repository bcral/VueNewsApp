<template>
  <div id="mainBar">
    <input type="text" id="searchBox" placeholder="search news topics">
    <button @click="onSearch" id="searchBtn">&#9906;</button>
    <button id="optionsBtn">></button>
  </div>
</template>

<script>

export default {
  name: 'Searchbar',
  methods: {
    onSearch() {
      var search = document.getElementById('searchBox').value;
      this.$emit('onSearch', search);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainBar {
  height: 35px;
  padding-bottom: 5px;
  border-bottom: solid 2px #eee;
  display: flex;
}

#searchBox {
  background-color: rgb(252, 253, 234);
  margin: auto;
  top: 0px;
  left: 0px;
  height: 28px;
  width: 60vw;
  border: 2px solid #ccc;
  font-size: 14px;
  display: flex;
  float: left;
}

#searchBox::placeholder {
  color: #aaa;
}

#searchBtn {
  width: 35px;
  height: 35px;
  background-color: rgb(214, 218, 162);
  margin-right: 2px;
}

#optionsBtn {
  width: 35px;
  height: 35px;
  background-color: rgb(214, 218, 162);
}

button:focus,
button:active,
input:focus,
input:active {
  border: none;
  outline: 2px solid #eee;
  background-color: rgb(252, 253, 234);
}
</style>
