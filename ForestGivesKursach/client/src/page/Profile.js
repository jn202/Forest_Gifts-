import React,{ useContext } from 'react';
import { Context } from "../index";
import { Container,Button,Card,/*Image */} from 'react-bootstrap';
import {Shop_Route,Admin_Route } from '../utilits/constants';
import {useNavigate} from 'react-router-dom'
export const Profile = () => {
    const {user} =useContext(Context)
    const navigate=useNavigate()
    return (
        <Container>
            <Card>
                <Card.Header>
                    <Card.Title>Мой профиль</Card.Title>
                </Card.Header>
                <Card.Body>
                    
                    <p>
                        {user.User.name}  
                    </p>
                    <p>
                        Email: {user.User.Email}
                    </p>
                    <p>
                        Телефон: {user.User.phone}
                    </p>
                    <p>
                        Роль: {user.User.role}
                    </p>
                    
                    
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between mt-2">
                        <Button variant='outline-danger' onClick={()=>navigate( Shop_Route )}>Назад</Button>

                            <Button variant='outline-success' onClick={()=>navigate( Admin_Route )}>Админ-панель</Button>   
                        
                    </div>
                </Card.Footer>
            </Card>
          
        </Container>
    );
};

//export default Profile;