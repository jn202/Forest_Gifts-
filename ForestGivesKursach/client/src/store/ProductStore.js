import {makeAutoObservable} from "mobx";
/*export  class productItem{

}*/
export default class ProductStore{
    constructor(){
        this._types=[
          /*  {id:1,name:'Ягоды'},
            {id:2,name:'Грибы'}*/
        ]
        
        this._products=[
           /* {id:1,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,img:null, userId:1,  typeOfProductId:1},
            {id:2,name:'Стакан земляники',price:100,description:"0,5 литра",available:true,img:null,userId:1,  typeOfProductId:1},
            {id:3,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:4,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:5,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:6,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:7,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:8,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:9,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},
            {id:10,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:null,img:null, typeOfProductId:1},*/
        ]
    
        this._selectedType={

        }
        makeAutoObservable(this);
    }
    
    
   setTypes(types){
    this._types=types
   }
   get Types(){
    return this._types
   }
   setSelectedType(type){
    this._selectedType=type
   }
   get SelectedType(){
    return this._selectedType
   }
   setProducts(product){
    this._products=product
   }
   get getProducts(){
    return this._products
   }
 
}