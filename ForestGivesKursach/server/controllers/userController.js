const apiError=require('../error/apiError')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const {User, Basket,Product}=require('../models/models')

const GenerateJwt=(id,Email,Password,name, phone,role)=>{
    return jwt.sign(
        {id,Email,Password,name,phone,role},
        process.env.SECRET_KEY,
        {expiresIn:'24 h'}
    )
}

class UserController{
    async registration(req,res,next){
        const {Email,Password,name,phone,role}=req.body
        if((!Email && !phone) || !Password){
            return next(apiError.badRequest('Некорректный Email (или телефон) или Пароль'))
        }
        if(!name){
            return next(apiError.badRequest('Введите имя!'))
        }
       
        const candidate=await User.findOne({where:{Email}})
        if (candidate){
            return next(apiError.badRequest('Пользователь с таким Email уже существует.'))
        }
        const user=await User.create({Email,Password,name,phone,role})
        const basket=await Basket.create({userId:user.id})
        const token=GenerateJwt(user.id,user.Email,user.Password,user.name,user.phone,user.role)
            return res.json({token}) 
        
    }

    async login(req,res,next){
        const {Email,Password,name,phone,role,prod}=req.body
        const user1=await User.findOne({where:{Email}})
        if(!user1){
            return next(apiError.internal('Пользователь не найден.'))
        }
        //let comperePassword=bcrypt.compareSync(password,user1.Password)
        if(Password!=user1.Password)
        {
            return next(apiError.internal('Неверный пароль'))
        }
        const token=GenerateJwt(user1.id,user1.Email,user1.Password,user1.name,user1.phone,user1.role)
        return res.json({token}) 
    }

    async check(req,res, next){
        
        const token=GenerateJwt(req.user1.id, req.user1.Email, req.user1.Password, req.user1.name, req.user1.phone, req.user1.role)
        return res.json({token}) 

    }
}

module.exports=new UserController()