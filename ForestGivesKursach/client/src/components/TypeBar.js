import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext } from 'react';
import { Context } from '../index';
import 'mobx-react-lite'
import { observer } from 'mobx-react-lite';

const TypeBar = observer(() => {
   const {product}=useContext(Context)
    return (
        <div>
            <ListGroup    style={{cursor:'pointer'}}>
                {
                    product._types.map(type=>
                    <ListGroup.Item 
                   
                        active={type.id === product.SelectedType.id}
                        onClick={()=>product.setSelectedType(type)}
                        key={type.id}>
                            {type.name}
                    </ListGroup.Item>)
                    }
                <ListGroup.Item>Цена</ListGroup.Item>
                <ListGroup.Item>Дата выставки</ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        </div>
    );
}
)

export default TypeBar;