const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8081
app.listen(port)
console.log(`app is listening on port: ${port}`)