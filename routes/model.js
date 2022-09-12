const express=require('express')
const router=express.Router()
const modelController=require('../controller/model')



router.get('/',modelController.getHomeController)


module.exports=router