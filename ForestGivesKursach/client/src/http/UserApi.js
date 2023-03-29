import { $authHost,$host } from "./index";
import jwt_decode from 'jwt-decode'
 export const registration=async (Email,Password,name, phone)=>{
    const {data}=await $host.post('api/user/registration',{Email,Password,name, phone,role:'USER' })
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
 }
 export const login=async (Email,Password,name, phone)=>{
    const {data}=await $host.post('api/user/login',{Email,Password,name, phone })
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
 }
 export const check=async ()=>{
    const {data}=await $authHost.get('api/user/auth',)
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
 }