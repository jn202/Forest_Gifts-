import { Form } from 'react-bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const CreateRegion = ({show,onHide}) => {
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
            Добавление Региона
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                <div>
                    Введите название региона
                    <Form.Control 
                        className="mt-2"
                        placeholder='Введите название'
                    />
                    
                </div>    
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Назад</Button>
            <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};

