<template>
  <div id="mainBar">
    <input type="text" id="searchBox" placeholder="search news topics">
    <button @click="onSearch" id="searchBtn">&#9906;</button>
    <button @click="pref" id="optionsBtn">
      &#8942;
    </button>
  </div>
</template>

<script>

export default {
  name: 'Searchbar',
  methods: {
    onSearch() {
      var search = document.getElementById('searchBox').value;
      if (search && search != this.$route.params.id) {
        this.$router.push({ name: "Search", params:{ id: search } })
      } else if (!search && this.$route.name != 'Home') {
        this.$router.push({ name: "Home"});
      }
    },
    pref() {
      if (this.$route.name != 'Preferences') {
        this.$router.push({ name: "Preferences" })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainBar {
  height: 35px;
  padding: 0.75em 1em;
  border-bottom: solid 2px #eee;
  display: flex;
  z-index: 2;
  background-color: rgb(63, 103, 156);
  box-shadow: 0px 6px 9px -6px #444;
}

#searchBox {
  background-color: rgb(255, 255, 255);
  margin: auto;
  top: 0px;
  left: 0px;
  height: 28px;
  width: 60vw;
  border: 2px solid #ccc;
  font-size: 14px;
}

#searchBox::placeholder {
  color: #aaa;
}

#searchBtn {
  min-width: 35px;
  height: 35px;
  background-color: rgb(63, 103, 156);
  color: rgb(255, 255, 255);
  margin-right: 2px;
  font-size: 18px;
}

#optionsBtn {
  min-width: 35px;
  height: 35px;
  background-color: rgb(63, 103, 156);
  color:rgb(255, 255, 255);
  font-size: 25px;
  padding: 0 7px;
}

button:focus,
button:active,
input:focus,
input:active {
  border: none;
  outline: 2px solid #eee;
  background-color: rgb(255, 255, 255);
}
</style>
