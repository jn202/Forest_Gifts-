import React, { useState  , useContext } from 'react';
import {Container,Form, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { NavLink ,useLocation} from 'react-router-dom';
import { Login_Route, Registration_Route,Shop_Route } from '../utilits/constants';
import { Context } from '../index';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { registration,login } from '../http/UserApi';
import { observer } from 'mobx-react-lite';
//class registeredUser{}


export const Auth = observer(() => {
    const {user}=useContext(Context)
    const location=useLocation()
    const isLogin=location.pathname===Login_Route
   // console.log(location)
    const navigate=useNavigate()

    const[Email,setEmail]=useState('')
    const[Password,setPassword]=useState('')
    const[name,setName]=useState('')
    const[phone,setPhone]=useState('')

    const Click= async ()=>{   
        try{
            let data;
            if(isLogin){
                data=await login(Email,Password,name,phone);
                
            }else{
            data =await registration(Email,Password,name,phone);
                
            }
            user.setUser(data)
            user.setIsAuth(true) 
            navigate(Shop_Route )
        }catch(e){
            alert(e.response.data.message)
        }
        
    }
    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight-54}}
        >
            <Card style={{width:600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация':'Регистрация'} </h2>
                <Form className="d-flex flex-column">
                    Имя:
                     <Form.Control
                    className="mt-2"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    />
                    Email:
                    <Form.Control
                    className="mt-2"
                    placeholder="Введите ваш Email"
                    value={Email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    Пароль:
                     <Form.Control
                    className="mt-2"
                    placeholder="Введите ваш пароль"
                    value={Password}
                    onChange={e=>setPassword(e.target.value)}
                    type="password"
                    />
                    Телефон:
                     <Form.Control
                    className="mt-2"
                    placeholder="Введите ваш телефон"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    />
                    <div className="d-flex justify-content-between mt-2">
                        <Row className="d-flex justify-content-between mt-3 p-1" >
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={Registration_Route}>Зарегистрируйся</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={Login_Route}>Войти</NavLink>
                                </div>
                            }

                        
                    </Row>
                    
                    <Button variant={"outline-success "} class="align-self-end" onClick={Click}>
                        {
                            isLogin ?"Войти":"Зарегистрироваться"
                        }
                             
                        </Button>
                    
                    </div>
                     
                </Form>  
            </Card>
            
        </Container>
       
    );
})

