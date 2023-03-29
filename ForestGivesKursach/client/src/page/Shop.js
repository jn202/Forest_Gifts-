import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Container,Col, Row} from 'react-bootstrap';
import { Context } from '../index';
import ProductList from '../components/ProductList';
import TypeBar from '../components/TypeBar';
import { getAllType,GetAllProducts } from '../http/ProductApi';



export const Shop = observer(() => {
    const{product}=useContext(Context)
    useEffect(()=>{
        getAllType().then(data=>product.setTypes(data))
        GetAllProducts().then(data=>product.setProducts(data.rows))
    })

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
})

//export default Shop;