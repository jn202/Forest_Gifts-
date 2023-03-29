const {Region}= require('../models/models')

class regionController{
    async create(req,res){
        const {name}=req.body
        const region = await Region.create({name})
        return res.json(region)
    }
    async getAll(req,res){
        const regions=await Region.findAll()
        return res.json(regions)
    }
    async getOne(req,res){

    }
}
module.exports=new regionController()