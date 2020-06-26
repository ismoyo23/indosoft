import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Nav, NavItem ,Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Col } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import style from '../../../styles/Admin/Sidebar.module.css'
import img from '../../../image/image.jpg'
import $ from 'jquery'
class Header extends Component{

    HandleClick = () => {
        $('#sidebar').addClass(style.check)
    } 


    render(){
        
        return(
            <>
                 {/* side bar */}  
            {/* <Col md='2' xs="1"> */}
                <Nav vertical id='sidebar' className={style.sidebar}>
                    <header>
                        Library App
                    </header>
                    <div className={style.imgBar}>
                        <img className={style.ImgHeader} src={img}/>
                        <p className={style.username}><strong>Admin</strong></p>
                        <p className={style.position}><strong>Librarian App</strong></p>
                    </div> 
                    
                    <NavItem>
                        <NavLink className={style.NavLink} href="#"><i className="fa fa-home"></i><span className={style.title}>Dashboard</span></NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={style.NavLink} href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className={style.title}>Settings</span>
                    </NavLink>
                    
                    </NavItem>

                    <NavItem>
                        <NavLink className={style.NavLink} href="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className={style.title}>History</span>
                    </NavLink>
                    </NavItem>
                </Nav>
        {/* </Col> */}
        </>
        )
    }
}

export default Header