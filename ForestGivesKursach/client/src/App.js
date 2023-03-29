//import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Context } from './index'
import { check } from './http/UserApi'
import { Spinner } from 'react-bootstrap'

const App = observer(() =>{
  const {user}=useContext(Context)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
      setTimeout(()=>{
        check().then(data=>{
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(()=>setLoading(false))
      },500)
      
  })

if(loading){
  return <Spinner animation={"grow"}/>
}

  return (
       <BrowserRouter>
       <NavBar/>
       <AppRouter />
       </BrowserRouter>
  );
})
export default App;
