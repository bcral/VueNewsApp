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
    border-right: solid 2px #eee;
    border-bottom: solid 2px #eee;
    border-left: solid 2px #eee;
    overflow: hidden;
    display: flex;
	flex-direction: row;
    background-color: rgb(63, 103, 156);
    max-height: 10%;
}
.newsImg {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    margin: 1em 0.2em;
    border: solid 1px #fff;
    align-self: center;
}
.newsSourceIcon {
    font-size: 12px;
    margin-left: 0.7em;
    width: 100%;
    display: inline-block;
    align-self: flex-start;
    overflow: wrap;
    word-wrap: break-word;
    text-decoration: underline;
}
.newsContent{
    font-size: 14px;
    padding: 0.2em 0.6em 0.2em 1em;

}
.newsHeader {
    margin: 0.2em 0px;
}
.newsHeader:hover {
    text-decoration: underline;
    cursor: pointer;
}
.newsParagraph {
    margin: 0px;
    padding: 0.2em 0em;
}
</style>