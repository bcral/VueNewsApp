export default {
    db: {
        queryNumOfArts: '',
        querySort: '',
        queryDateFrom: '',
        queryDateTo: '',
        queryminDate: '',
        querymaxDate: ''
    },

    checkDate: function() {

        var dateObj = new Date();
        var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        var date = ('0' + dateObj.getDate()).slice(-2);
        var year = dateObj.getFullYear();

        var minDate = year + '-' + (month - 1) + '-' + date;
        var maxDate = year + '-' + month + '-' + date;

        this.db.minDate = minDate;
        this.db.maxDate = maxDate;

        if (!this.db.queryDateTo) {
            this.db.queryDateTo = maxDate;
        }
        if (!this.db.queryDateFrom) {
            this.db.queryDateFrom = minDate;
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
    },
    populate: function() {
        this.checkDate();
        this.checkSort();
        this.checkNumOfArts();
    }
}
