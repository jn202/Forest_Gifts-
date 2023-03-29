const {TypeOFProduct}= require('../models/models')
//const apiError=require('../error/apiError')


class TypeController{
    async create(req,res){
        const {name}=req.body
        const type = await TypeOFProduct.create({name})
        return res.json(type)
    }
    async getAll(req,res){
        const types=await TypeOFProduct.findAll()
        return res.json(types)
    }
    async getOne(req,res){
        const type =await TypeOFProduct.findOne({
            where:{id}
        })
        return res.json(type)
    }
}

module.exports=new TypeController()