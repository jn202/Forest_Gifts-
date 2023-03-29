import {Login_Route,Registration_Route,Shop_Route,Basket_Route,Product_Route,Profile_Route,Admin_Route, CreateProduct_Route} from './utilits/constants'
import {Shop} from "./page/Shop"
import {Auth} from './page/Auth'
import {Basket} from './page/Basket'
import {ProductPage} from './page/ProductPage'
import {Profile} from './page/Profile'
import { Admin } from './page/Admin'
import { CreateProduct} from './page/CreateProduct'
//import {CreateProduct} from './components/model/CreateProduct'
//import { Component } from 'react'
export const AuthRoutes=[
    {
        path:Admin_Route,
        Component:Admin
    } ,
    {
        path:Profile_Route,
        Component:Profile
    },
    {
        path:CreateProduct_Route,
        Component:CreateProduct
    },
]

export const PublicRoutes=[
    {
        path:Login_Route,
        Component:Auth
    },
    {
        path:Shop_Route,
        Component:Shop
    },
    
    {
        path:Registration_Route,
        Component:Auth
    },
    {
        path:Product_Route+'/:id',
        Component:ProductPage
    }, 
    {
        path:Basket_Route+'/:id',
        Component:Basket
    }
   
]