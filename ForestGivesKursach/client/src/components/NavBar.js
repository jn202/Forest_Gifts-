import { observer } from "mobx-react-lite"
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Context } from "../index";
import {useNavigate} from 'react-router-dom'
import { Shop_Route,Profile_Route,Login_Route,CreateProduct_Route  } from '../utilits/constants';

const NavBar =observer(() => {

    const {user} =useContext(Context)
    const navigate=useNavigate()
    const LogOut=()=>{
      user.setUser({})
      user.setIsAuth(false)
    }
    return ( 
        <Navbar bg="light" expand="lg">
        <Container /*fluid*/>
          <Navbar.Brand href={Shop_Route}>Дары лесов</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {user.IsAuth ?
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href={Shop_Route}>Предложения</Nav.Link>
              <Nav.Link href="#action2">Регионы</Nav.Link>
              <NavDropdown title="Мои заявки" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Заявки на покупку</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Заявки на продажу
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={Profile_Route}>
                  Профиль 
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
              <Form className="d-flex">
                
                
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className="me-2">Поиск</Button>
                    <Button variant="outline-success" className="me-2" onClick={()=>navigate(CreateProduct_Route)}>Предложить</Button>
                    
                    
                      <Button variant="outline-success" onClick={()=>LogOut()}>{user.User.name}  Выйти</Button>
                    </Form>
              </Navbar.Collapse>
              :
              <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href={Shop_Route}>Предложения</Nav.Link>
              <Nav.Link href="#action2">Регионы</Nav.Link>
            </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="me-2">Поиск</Button>
                <Button variant="outline-success" onClick={()=>navigate( Login_Route )}>Войти</Button>
                
              </Form>
              </Navbar.Collapse>
          
          }   
        </Container>
      </Navbar>
    );
}
)

export default NavBar;
/*<Button variant="outline-success" className="me-2" onClick={()=>productSetVisible(true)}>Предложить</Button>
<CreateProduct show={productVisible} onHide={()=>productSetVisible(false)}/>*/