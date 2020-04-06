<template>
    <li class="newsArticle">
        <div class="column left">
            <p class="newsSourceIcon left">{{ newsItem.source.name }}</p>
            <img :src="newsItem.urlToImage" class="newsImg">
        </div>
        <div class="column right">
            <div class="newsContent">
                <h3 @click="articleClick" class="newsHeader">{{ newsItem.title }}</h3>
                <p class="newsParagraph">{{ newsItem.description }}</p>
            </div>
        </div>
    </li>
</template>

<script>

export default {
    name: 'NewsArticle',
    props: { newsItem: Object },
    methods: {
        articleClick() {
            var win = window.open(this.newsItem.url, '_blank');
            win.focus();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.column {
    float: left;
    min-height: 7em;
    position: relative;
}
.left {
    width: 35%;
}
.right {
    width: 65%;
}
.newsArticle {
    overflow: hidden;
    display: flex;
	flex-direction: row;
    background-color: rgb(63, 103, 156);
    max-height: 10%;
    margin-bottom: 1em;
    box-shadow: 0px 6px 9px -6px #444;
}
.newsImg {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    margin: 1em 0.2em;
    border: solid 1px #fff;
    align-self: center;
    box-shadow: 0px 6px 9px -6px #444;
}
.newsSourceIcon {
    font-size: 12px;
    margin: 1em 1em 0 0;
    padding-left: 0.7em;
    width: 100%;
    font-weight: 700;
    display: inline-block;
    align-self: flex-start;
    overflow: wrap;
    word-wrap: break-word;
    background-color: #fff;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
    color: #000;
    box-shadow: 0px 6px 9px -6px #444;
}
.newsContent{
    font-size: 14px;
    padding: 0.2em 0.6em 0.2em 1em;
}
.newsHeader {
    margin: 0.2em 0px;
    font-weight: 500;
    text-decoration: underline;
}
.newsHeader:hover {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
}
.newsParagraph {
    margin: 0px;
    padding: 0.2em 0em;
    font-weight: 400;
}
</style>