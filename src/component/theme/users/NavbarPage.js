import React, { useState } from 'react';
import style from '../../../styles/Users/Navbar.module.css'
import 'font-awesome/css/font-awesome.min.css';
import img from '../../../image/slide1.jpg'
import img2 from '../../../image/slide2.jpg'
import img3 from '../../../image/slide3.png'
import img4 from '../../../image/slide4.png'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
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
  Card, Button, CardTitle, CardText, Row, Col, Input
} from 'reactstrap';

function NavbarPage(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    let params = {
        effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      }


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
            <NavItem>
              <NavLink className={style.NavLink} >GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                    <img src={img} className={style.LogoImg}/> <span className={style.NavLink}><b>User</b></span>
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
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
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
          </Nav>
          </NavbarText>
        </Collapse>
        </Container>
      </Navbar>

      <Swiper {...params}>
      <div class="swiper-slide">
          <img src={img}/>
      </div>
      <div class="swiper-slide">
          <img src={img2}/>
      </div>
      <div class="swiper-slide">
          <img src={img3}/>
      </div>
      <div class="swiper-slide">
          <img src={img4}/>
      </div>

      <div class="swiper-pagination"></div>
      
    </Swiper>
        </>
    )
}

export default NavbarPage