import {/*Container,*/Dropdown, Form, /*Row*/} from 'react-bootstrap';
import { Context } from '../index';
import { Container,Card,Button/*,Image */} from 'react-bootstrap';
import {Shop_Route } from '../utilits/constants';
import React, { useContext, useState, useEffect  } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {useNavigate} from 'react-router-dom'
import { getAllType } from '../http/ProductApi';
import { observer } from 'mobx-react-lite';
import { createProduct } from '../http/ProductApi';

export const CreateProduct = observer(() => {
    const {user} =useContext(Context)
    const {product}=useContext(Context)
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    //const [typeId,setTypeId]=useState(null)
    const [description,setDescription]=useState('')
    //const userId=useState(null)

    useEffect(()=>{
        getAllType().then(data=>product.setTypes(data)) 
    })

    const Click= async ()=>{   
        
            
           const formData=new FormData()
            formData.append('name',name)
            formData.append('price',`${price}`)
            formData.append('description',description)
            formData.append('typeOfProductId',product.SelectedType.id)
            formData.append('userId',user.User.id)
            //console.log(formData)
           
            createProduct({name:name,price:price,description:description,typeOfProductId:product.SelectedType.id,userId:user.User.id})
            navigate( Shop_Route )
        
        
    }

    return (
       <div>
            <Container>
                <Card>
                    <Card.Header>
                        Добавление товара
                    </Card.Header>
                   <Card.Body>
                        <Form>
                                <div>
                                    Введите название
                                    <Form.Control 
                                        className="mt-2"
                                        value={name}
                                        onChange={e=>setName(e.target.value)}
                                        placeholder='Введите название'
                                    />
                                    <Dropdown  className="mt-2">
                                        <DropdownToggle>{product.SelectedType.name || "Выберите категорию товара"}</DropdownToggle>
                                        <Dropdown.Menu>
                                            {product._types.map(type=>
                                                <DropdownItem key={type.id} 
                                                //value={typeId}
                                                onClick={()=>product.setSelectedType(type)/*,e=>setTypeId(e.target.value)*/}
                                               // onChange={e=>setTypeId(e.target.value)}
                                                > {type.name} </DropdownItem>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    Установите цену
                                    <Form.Control
                                        className="mt-2"
                                        value={price}
                                        onChange={e=>setPrice(Number(e.target.value))}
                                        placeholder="Введите цену"
                                        type='number'
                                    />
                                    Загрузите картинку 
                                    <Form.Control
                                        className="mt-2"
                                        type='file'
                                    />
                                </div>    
                                    
                            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            >
                                    <Form.Label>Опишите товар</Form.Label>
                                    <Form.Control as="textarea" value={description} onChange={e=>setDescription(e.target.value)} rows={4} />
                            </Form.Group>
                        </Form>
                   </Card.Body>
                   <Card.Footer>
                   <div className="d-flex justify-content-between mt-2">
                    <Button variant='outline-danger' onClick={()=>navigate( Shop_Route )}>Назад</Button>
                    <Button variant='outline-success' onClick={Click}>Добавить</Button>   
                   </div>                           
                   </Card.Footer>
                </Card>
            </Container>
       </div>


    );
}
)

