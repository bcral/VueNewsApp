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
                <label for="startDate">From Date:</label>

                <input v-model="dateFrom" type="date" id="startDate" name="date-start"
                    min="2018-01-01" max="current">
            </div>
            <div class="flexRow">
                <label for="endtDate">Up To Date:</label>

                <input v-model="dateTo" type="date" id="endDate" name="date-end"
                    min="2018-01-01" max="current">
            </div>
        </div>
        <button id="saveBtn" @click="saveClick">SAVE</button>
    </div>
</template>

<script>

export default {
    name: 'Preferences',
    async mounted() {
        await this.populate();
    },
    data: function() { 
        return {
            numOfArts: this.$db.db.queryNumOfArts,
            sortValue: this.$db.db.querySort,
            dateTo: this.$db.db.queryDateTo,
            dateFrom: this.$db.db.queryDateFrom
            }
        },
    methods: {
        saveClick() {
            this.$db.db.queryNumOfArts = this.numOfArts;
            this.$db.db.querySort = this.sortValue;
            this.$db.db.queryDateFrom = document.getElementById('startDate').value;
            this.$db.db.queryDateTo = document.getElementById('endDate').value;
        },
        populate() {
            this.$db.populate();
            this.numOfArts = this.$db.db.queryNumOfArts;
            this.sortValue = this.$db.db.querySort;
            this.dateFrom = this.$db.db.queryDateFrom;
            this.dateTo = this.$db.db.queryDateTo;
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
select {
    border-radius: 0;
}
</style>