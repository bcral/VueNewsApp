export default {
    db: {
        queryNumOfArts: Number,
        querySort: String,
        queryDateFrom: String,
        queryDateTo: String
    },

    populate: {
        checkDate: function() {
            if (!this.db.queryDateTo) {
                var dateObj = new Date();
                var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
                var date = ('0' + dateObj.getDate()).slice(-2);
                var year = dateObj.getFullYear();
                this.db.queryDateTo = year + '-' + month + '-' + date;
            }
        },
        checkSort: function() {
            if (!this.db.querySort) {
                this.db.querySort = 'relevancy';
            }
        },
        checkNumOfArts: function() {
            if (!this.db.queryNumOfArts) {
                this.db.queryNumOfArts = 5;
            }
        }
    }
}
