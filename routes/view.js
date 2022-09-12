const express=require('express')
const router=express.Router()
const viewController=require('../controller/view')



router.get('/',viewController.getViewController)


module.exports=router