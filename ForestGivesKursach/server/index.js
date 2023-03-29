require('dotenv').config()
const express=require('express')
const sequelize=require('./db')
const models = require('./models/models')
const cors=require('cors')
const fileupload=require('express-fileupload')
const router=require('./routes/indexRouter')
const errorHandler=require('./middleware/ErrorMiddleware')

const PORT=process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
//app.use(fileupload({}))
app.use('/api',router)


//обработка ошибок идет последней
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.status(200).json({message:'work!'})
})

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}
start()


   
