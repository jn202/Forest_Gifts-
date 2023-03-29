import React, { useEffect, useState }/*,{ useContext }*/ from 'react';
import { Container/*,Image */} from 'react-bootstrap';
//import ProductItem from '../components/ProductItem';
import { Card,Button/*, Col, Image*/ } from 'react-bootstrap';
import { GetOneProduct } from '../http/ProductApi';
import {useParams} from 'react-router-dom'
export const ProductPage = () => {
  //const {product}=useContext(Context)
    //const product={id:1,name:'Стакан земляники',price:120,description:"0,5 литра",available:true,userId:1, img:null, typeOfProductId:1}
      //{id:2,name:'Стакан земляники',price:100,description:"0,5 литра",available:true,userId:1, img:null, typeOfProductId:1}
    const [product, setProducts]=useState({})
    
    const {id}=useParams()
    console.log(id)
      GetOneProduct(id).then(data=>setProducts(data))
    useEffect(()=>{

    },[])

    return (
      <div>
        <Container>
         <Card>
          <Card.Header>
              <Card.Title>{product.name}</Card.Title>
          </Card.Header>
          <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Описание</Card.Subtitle>
                    <Card.Text >
                      <p>{product.description}</p>
                      <p>Цена: {product.price} Руб</p>
                    </Card.Text >
                  
                    <div className="mt-1 d-flex justify-content-between align-items-center ">
                    <Card.Link href="#">{/*product.userId.*/}Продавец</Card.Link>
                    <Button variant="primary">В корзину</Button>
                </div>

          </Card.Body>



         </Card>
          
        </Container>
      </div>
        
    );
};

