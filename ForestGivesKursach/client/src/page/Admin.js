import React from 'react';
import { observer } from "mobx-react-lite"
import {Button,Card, Container } from 'react-bootstrap';
import {Profile_Route } from '../utilits/constants';
import {CreateRegion} from '../components/model/CreateRegion';
import {CreateType} from '../components/model/CreateType'
import { useState } from "react";

export const Admin = observer(() => {
    const [RegionVisible,RegionSetVisible]= useState(false);
    const [TypeVisible,TypeSetVisible]= useState(false);
    return (
        <Container className="d-flex flex-column">
            <Card>
                <Card.Header>
                Админ панель
                </Card.Header>
                <Card.Body>
                    <Container className="d-flex flex-column">
                        <Button variant="warning" className="" onClick={()=>TypeSetVisible(true)}>Добавить тип продуктов</Button>
                        <CreateType show={TypeVisible} onHide={()=>TypeSetVisible(false)}/>
                        <Button variant="secondary" className="mt-4" onClick={()=>RegionSetVisible(true)}>Добавить регион действия</Button>
                        <CreateRegion show={RegionVisible} onHide={()=>RegionSetVisible(false)}/>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <a href={ Profile_Route }>
                         <Button variant='outline-danger' >Назад</Button>      
                    </a>
               
                </Card.Footer>
            </Card>
            
        </Container>
    );
}
)


