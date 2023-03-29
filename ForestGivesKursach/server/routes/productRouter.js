const Router=require('express')
const router=new Router()
const Product=require('../controllers/productController')

router.post('/',Product.create)
router.get('/',Product.getAll)
router.get('/:id',Product.getOne)
//router.delete('/',)
//router.patch()


module.exports=router