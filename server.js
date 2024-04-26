const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const portfolioRoute = require('./routes/portfolioRoute')
dotenv.config()
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname,'./client/dist')))

app.use('/api/v1/portfolio', portfolioRoute);

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
});

const port = process.env.PORT || 8080 

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
});
