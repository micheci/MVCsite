const express=require('express')
const router=express.Router()
const controllerController=require('../controller/controller')


router.get('/',controllerController.getController)


module.exports=router