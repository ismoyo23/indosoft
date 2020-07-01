import React, { useState } from 'react';
import style from '../../../styles/Users/Navbar.module.css'
import 'font-awesome/css/font-awesome.min.css';
import 'swiper/css/swiper.css';
import UserBeforeLogin from './DropdownUsers'
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Card, Button, Row, Col, Input,
   CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';



function NavbarPage(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return(
        <>
    <Navbar light className={style.NavBar} expand="md">
<Container>
        <NavbarBrand className={style.NavBrand}>loyal book be your friend</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          </Nav>
          <NavbarText>
          <Nav className="mr-auto"  navbar>
            <UserBeforeLogin/>

            <NavItem >
            <Input type="email" name="text" id="exampleEmail" placeholder="Search..." />
            </NavItem>

          </Nav>
          </NavbarText>
        </Collapse>
    </Container>
      </Navbar>

      <Navbar className={style.CardHeader} color="light" light expand="md">
          <Container>
        <NavbarBrand href="/"><span className={style.FontTitle}><i class="fa fa-book" aria-hidden="true"></i>
            Setya</span> <span className={style.TitleLib}>Library</span></NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          </Nav>
          <NavbarText>
            
          <Nav className="mr-auto" navbar>
          <NavItem>
              <Link to="/"><NavLink className={style.NavItem}>Home</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className={style.NavItem}>Category</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className={style.NavItem}>All Time</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
              
            </UncontrolledDropdown>

            <NavItem>
              <Link to="/borowerbooks"><NavLink className={style.NavItem}>Books Borrowed</NavLink></Link>
            </NavItem>
            </Nav>

          </NavbarText>
        </Collapse>
        </Container>
      </Navbar>

  

    
        </>
    )
}

export default NavbarPage