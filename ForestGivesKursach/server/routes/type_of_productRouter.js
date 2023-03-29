const Router=require('express')
const router=new Router()
TypeController=require('../controllers/type_of_productController')
const CheckRole=require('../middleware/checkRoleMiddleware')

router.post('/',CheckRole("ADMIN"),TypeController.create)
router.get('/all',TypeController.getAll)
router.get('/:id',TypeController.getOne)


module.exports=router