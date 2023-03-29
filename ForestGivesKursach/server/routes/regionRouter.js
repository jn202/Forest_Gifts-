const Router=require('express')
const router=new Router()
 const Region=require('../controllers/regionController')

router.post('/',Region.create)
router.get('/',Region.getAll)
router.get('/',Region.getOne)


module.exports=router