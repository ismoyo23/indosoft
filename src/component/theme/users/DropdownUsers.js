import React, { useState } from 'react';
import style from '../../../styles/Users/Navbar.module.css'
import img from '../../../image/slide1.jpg'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";

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
    CardTitle, CardSubtitle,
    
    Modal, ModalHeader, ModalBody, ModalFooter,

    Form, FormGroup, Label, FormText
  } from 'reactstrap';

function UserBeforeLogin(props){
  let history = useHistory()

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const [modalLogin, setModalLogin] = useState(false);
    
      const login = () => setModalLogin(!modalLogin);
      const register = () => setModal(!modal);

      let [username, setUsername] = useState('')
      let [password, setPassword] = useState('')
      let [email, setEmail] = useState('')
      let [address, setAddress] = useState('')
      let [role, setRole] = useState('0')
      
      let HandleLogin = (event) => {
        event.preventDefault()
          axios({
            method: 'POST',
            url: 'http://localhost:3000/books/login',
            data:{
                name_user: username,
                password: password
            }
        })
        .then((response) => {
            if(response.data.data[0].role === 1){
              localStorage.setItem('token', response.data.data[0].AccessToken)
             history.push("/admin");
            }
            
        })
        .catch((error) =>{
            console.log(error)
        })
      }

      
    return (
     <>


        <Modal className={style.ModalLogin} isOpen={modalLogin} toggle={login}>
            <ModalBody className={style.ModalBackGrond}>
            <div className={style.IconModalColor}>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
                <p className={style.TextHeader}>Login</p>
            <form onSubmit={HandleLogin}>
              <FormGroup>
                  <Input onChange={(e) => setUsername(e.target.value)} value={username} className={style.InputMedia} type="text" name="email" id="exampleEmail" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                  <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className={style.InputMedia} name="email" id="exampleEmail" placeholder="Password" />
              </FormGroup>

              <Button style={{width: '100%'}} color="primary">Login</Button>
            </form>
            </ModalBody>
        </Modal>


      {/* modal register */}
        <Modal className={style.ModalLogin} isOpen={modal} toggle={register}>
        <ModalBody className={style.ModalBackGrond}>
            <div className={style.IconModalColor}>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
                <p className={style.TextHeader}>Register</p>
            <FormGroup>
                <Input className={style.InputMedia} type="text" id="exampleEmail" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Input className={style.InputMedia} type="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Input type="password" className={style.InputMedia} name="email" id="exampleEmail" placeholder="Password" />
            </FormGroup>
            <FormGroup>
                <Input className={style.InputMedia} type="text" id="exampleEmail" placeholder="Address" />
            </FormGroup>

            <Button style={{width: '100%'}} color="primary">Register</Button>
            </ModalBody>
        </Modal>


            <NavItem>
              <NavLink><i style={{color: 'white'}} class="fa fa-user-circle-o" aria-hidden="true"></i>
                    <span className={style.NavLink}><strong onClick={login}>Login</strong> Or <strong onClick={register}>Register</strong></span></NavLink>
            </NavItem>
        
    </>
    )
  }

  function UserAfterLogin(){
    return (
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
                
                </DropdownMenu>
              </UncontrolledDropdown>
    )
  }

export default UserBeforeLogin
