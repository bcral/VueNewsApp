var qs = require('query-string');

const root_url = 'https://newsapi.org/v2/everything?q=';
const api_key = '&apiKey=6388b8718eaa4dd68f5d1e2fc5542ba3';
var results_url = '&pageSize=' + '6';
var sort_url = '&sortBy=popularity';
var date_url = '&from=2020-03-21';

export default {
    buildUrl: () => {
        return qs.stringify(
            root_url + results_url + sort_url + date_url + api_key
        )
    }
}