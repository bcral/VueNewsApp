<template>
    <div id="homeCont">
      <div id="defaultText">
        <p>Enter a news topic to <u>search</u>,
            or click on the 'options' tab to set up your preferences!
        </p>
      </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeCont {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-content: center;
}

#defaultText {
    text-align: center;
    line-height: 25px;
    margin: 3em;
    color: rgb(255, 255, 255);
}
</style>