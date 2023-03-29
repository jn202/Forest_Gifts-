import { $authHost,$host } from "./index";

 export const createType=async (type)=>{
    const {data}=await $authHost.post('api/type',type )
    return data
 }
 export const getAllType=async ()=>{
    const {data}=await $host.get('api/type/all')
    return data
 }
 export const createProduct=async (product)=>{
    const {data}=await $authHost.post('api/product',product )
    return data
 }
 export const GetAllProducts = async ()=>{
    const {data}=await $host.get('api/product' )
    return data
 }
 export const GetOneProduct=async (id)=>{
    const {data}=await $host.get('api/product/' + id)
    return data
 }