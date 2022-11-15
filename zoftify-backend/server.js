const express = require('express')
const host = 'localhost'
const PORT = 7000
const app = express()

// middleware
app.use( express.json() )
app.use( function (req, res, next)  {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')
	next()
})

const modules = require('./src/modules/orders')

app.use( modules )

app.listen(PORT, () => console.log('Server is running on http://' + host + ':' + PORT))