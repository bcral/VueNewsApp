<template>
    <div id="prefCont">
        <h1 id="header">
            Preferences
        </h1>
        <div id="formCont">
            <div class="flexRow">
                <label for="numArticles">Number of Articles:</label>

                <select v-model="numOfArts" id="numArticles">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="flexRow">
                <label for="sort">Sort By:</label>

                <select v-model="sortValue" id="sort">
                    <option value="popularity">Popularity</option>
                    <option value="relevancy">Relevancy</option>
                    <option value="publishedAt">Newest First</option>
                </select>
            </div>
            <div class="flexRow">
                <label for="startDate">Date From:</label>

                <input type="date" id="startDate" name="date-start"
                    min="2018-01-01" max="current">
            </div>
            <div class="flexRow">
                <label for="endtDate">Date To:</label>

                <input type="date" id="endDate" name="date-end"
                    min="2018-01-01" max="current">
            </div>
        </div>
        <button id="saveBtn" @click="saveClick">SAVE</button>
    </div>
</template>

<script>

export default {
    name: 'Preferences',
    data: function() { 
        return {
            numOfArts: this.$db.queryNumOfArts,
            sortValue: this.$db.querySort
            }
        },
    methods: {
        setDate() {
            var dateObj = new Date();
            var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
            var date = ('0' + dateObj.getDate()).slice(-2);
            var year = dateObj.getFullYear();
            var shortDate = year + '-' + month + '-' + date;

            document.getElementById('startDate').value = shortDate;
            return shortDate;
        },
        saveClick() {
            this.$db.queryNumOfArts = this.numOfArts;
            this.$db.querySort = this.sortValue;
            this.$db.db.queryDateTo = document.getElementById('startDate').value;
            this.$db.db.queryDateFrom = document.getElementById('endDate').value;
            console.log(this.$db)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#prefCont {
    text-align: center;
}
.flexRow {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1.5em;
}
#saveBtn {
    height: 3em;
    width: 7em;
    border-radius: 0.5em;
    margin: 1.5em 0;
}
input {
    text-align: center;
}
</style>