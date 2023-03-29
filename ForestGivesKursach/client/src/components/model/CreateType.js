import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../http/ProductApi';


export const CreateType = ({show,onHide}) => {
    const [value,setValue]=useState('')
    const addType=(()=>{
        createType({name:value}).then(data=>setValue(''))
        onHide()
    })

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавление типа продуктов
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                <div>
                    Введите название типа
                    <Form.Control 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        className="mt-2"
                        placeholder='Введите название'
                    />
                </div>    
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Назад</Button>
            <Button variant='outline-success' onClick={addType}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};

