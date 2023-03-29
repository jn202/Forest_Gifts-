import React, { useEffect } from 'react';
import { Card, Col, Image,Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { Product_Route } from '../utilits/constants';



const ProductItem = ({product}) => {
    
    const history = useNavigate(product)
    useEffect(()=>{console.log(history)})
    
    
        return (
        
        <Col md= {3} className={'mt-3 '} onClick={()=> history(Product_Route +'/'+ product.id)}>
            <Card style={{ width: '14rem' ,cursor:'pointer'}} border={"primary"} >
                 <Card.Header>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Header>
                <Image  width={222} height={150} /*src={product.img}*//>
                <Card.Body>
                <Card.ImgOverlay>
                   
                </Card.ImgOverlay>
                
                <div style={{height:150}} >
                    <Card.Subtitle className="mb-2 text-muted">Описание</Card.Subtitle>
                    <Card.Text style={{height:80}} className="overflow-hidden">
                    {product.description}
                    </Card.Text >
                    <Card.Text>
                        Цена: {product.price} Рублей
                    </Card.Text>
                </div>
                
                <div className="mt-1 d-flex justify-content-between align-items-center ">
                    <Card.Link href="#">{/*product.userId.*/}Продавец</Card.Link>
                    <Button variant="primary">В корзину</Button>
                </div>
                
            </Card.Body>
            <Card.Footer>
            
                <small className="text-muted" > {product.createdAt}</small>
            </Card.Footer>
            </Card>
        </Col>
            
        
    );
    
};

export default  ProductItem;