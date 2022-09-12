const express=require('express')
const app=express()
const mongoose=require('mongoose')

const homeRoutes=require('./routes/home') 
const controllerRoutes=require('./routes/controller')
require('dotenv').config({path:'./config/.env'})



//middleware
app.set('view engine','ejs')
app.use(express.static('/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.use('/',homeRoutes)
app.use('/controller',controllerRoutes)










app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT} `)
})