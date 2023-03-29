
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
//import { ProductPage } from '../page/ProductPage';
import ProductItem from './ProductItem';

const ProductList = observer(() => {    
    const {product}=useContext(Context)

    return (
        <Row className='d-flex'>
            {
                product.getProducts.map(products=>
                  <ProductItem key={products.id} product={products}/>
                )  
            }
            
             
        </Row>
        
    );
})

export default ProductList;