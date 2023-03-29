const Router=require('express')
const router=new Router()

const product_router=require('./productRouter')
const user_router=require('./userRouter')
const type_of_product_router=require('./type_of_productRouter')
const region_router=require('./regionRouter')
//const basket_router=require('./basketRouter')

router.use('/user',user_router),
router.use('/type',type_of_product_router),
router.use('/product',product_router),
router.use('/region',region_router),
//router.use('/basket'),


module.exports=router