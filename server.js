const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.use(function (req, res) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://www.brentcralley.com/');
})

const port = process.env.PORT || 8081
app.listen(port)
console.log(`app is listening on port: ${port}`)