const uuid=require('uuid')
const path=require('path')
const {Product}=require('../models/models')
const apiError=require('../error/apiError')
require('mv')
require('express-fileupload')


class ProductController{
    async create(req,res,next){

        try{
            const {name,price,description/*,timer*/,typeOfProductId,userId}=req.body
            const BOOLEAN=true;
            //let {img}=req.files
            //let fileName=uuid.v4 +".jpg"
            //mv(,path.resolve(__dirname,'..','/server/static',fileName)){}
           
           // img.mv(path.resolve(__dirname,'..','/server/static',fileName))
            const product=await Product.create({name,price,description,typeOfProductId,available:BOOLEAN,userId,/*img:fileName*/})

            return res.json(product)
        }
        catch(e){
            return next(apiError.badRequest(e.message))
        }
        
    }
    async getAll(req,res){
        let {userId,typeOfProductId,page,limit}=req.query
         page = page||1
         limit=limit||9
        let offset=page * limit - limit
        let products;

        if(!userId && !typeOfProductId){
            products=await Product.findAndCountAll({where:{available:true},limit,offset})
        }
        if(!userId && typeOfProductId){
            products=await Product.findAndCountAll({where:{available:true,typeOfProductId},limit,offset})
        }
        if(userId && !typeOfProductId){
            products=await Product.findAndCountAll({where:{available:true,userId},limit,offset})
        }
        if(userId && typeOfProductId){
            products=await Product.findAndCountAll({where:{available:true,userId,typeOfProductId},limit,offset})
        }
        
        return res.json(products)
    }
    async getOne(req,res){
        const {id}=req.params
        const product=await Product.findOne(
            {
                where:{id,available:true},
                //where:{available:true}
                //include:[{module}]
            }
        
        )
        return res.json(product)
    }


    
}

module.exports=new ProductController()