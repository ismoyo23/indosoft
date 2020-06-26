import  React, { Component, useState } from "react";
import {Button,Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../../image/booksIcon.jpg'
import style from '../../../styles/Admin/Navbar.module.css'
import $ from 'jquery'
function NavbarMenu(props){
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return(
            <>
               {/* navbar */}
               <Navbar className={style.NavBar} light expand="md">
            
                <Collapse navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                        <NavLink onClick={props.event} className={style.NavLink} href="#"><lable for="checkidku" className={style.sideBarBtn}><i  class="fa fa-bars"  aria-hidden="true"></i>
                    </lable></NavLink>
                    </NavItem>
                </Nav>
                

                <NavbarText>

                <Nav>
                    <UncontrolledDropdown className={style.dropdown} nav inNavbar>
                    <DropdownToggle className={style.NavLink} nav caret>
                            <img src={logo} className={style.logo}/>
                             <span className={style.username}>Admin</span>
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
            </Navbar>

            <div className={style.users}>
                    <header>data</header>
                </div>
            </>
        )
    }


export default NavbarMenu