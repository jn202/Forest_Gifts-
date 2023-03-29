const sequelize=require('../db')
const {DataTypes}=require('sequelize')

const User=sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    Email:{type:DataTypes.STRING,unique:true},
    Password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Basket=sequelize.define('basket',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},//id с автозаполнением
   // user_id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}
})
const Basket_Product=sequelize.define('bask_prod',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},//id с автозаполнением
   // user_id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}
})
const Product=sequelize.define('product',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},//id с автозаполнением
    name:{type:DataTypes.STRING,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:true},
    description:{type:DataTypes.STRING,allowNull:true},
    available:{type:DataTypes.BOOLEAN}
   // timer:{type:DataTypes.DATE,allowNull:true}
})
const TypeOFProduct=sequelize.define('type_of_product',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},//id с автозаполнением
    name:{type:DataTypes.STRING,unique:true,allowNull:false}
})
const Region=sequelize.define('region',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},//id с автозаполнением
    name:{type:DataTypes.STRING,unique:true,allowNull:false}
    //user_id:{type:DataTypes.INTEGER,  autoIncrement:true,foreignKey:true},
    //product_id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}
})
const User_Region=sequelize.define('user_region',
    {id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}} 
)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Basket_Product ,{as:'bought'})
Basket_Product.belongsTo(Basket)

User.hasMany(Product ,{as:'prod'})
Product.belongsTo(User)

TypeOFProduct.hasMany(Product)
Product.belongsTo(TypeOFProduct)

Basket_Product.hasMany(Product)
Product.belongsTo(Basket_Product)

Region.belongsToMany(User,{through:User_Region})
User.belongsToMany(Region,{through:User_Region})


module.exports = {
    User,
    Basket,
    Basket_Product,
    Product,
    TypeOFProduct,
    Region,
    User_Region
}
