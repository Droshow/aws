const express = require('express')
const app = express()
app.get('/', (req,res) => {
    res.send('Ahoj ja som tvoja Node.js Appka')
})
app.listen(3000, () => {
    console.log('Ahoj bezim na 3000')
})
