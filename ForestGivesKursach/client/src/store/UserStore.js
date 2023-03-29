import {makeAutoObservable} from "mobx";
export default class UserStore{
    constructor(){
        this._isAuth=false
        this._user={}
        this._region=[
            {id:12,name:"Калужская область"},
            {id:13,name:"Московская область"},
            {id:14,name:"Город Москва"},
            {id:15,name:"Смоленская область"},
            {id:16,name:"Брянская область"},
            {id:17,name:"Тульская область"},
            {id:18,name:"Орловская область"},
            {id:19,name:"Рязанская область"},
            {id:20,name:"Владимирская область"},
            {id:21,name:"Тверская область"},
            {id:22,name:"Ярославская область"}
        ]
        makeAutoObservable(this);
    }
    setIsAuth(bool){
        this._isAuth=bool
    }

   setUser(user){
    this._user=user
   }
   get User(){
    return this._user
   }
   get IsAuth(){
    return this._isAuth
   }
}