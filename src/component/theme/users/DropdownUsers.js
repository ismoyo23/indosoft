import React, { useState, useEffect } from 'react';
import style from '../../../styles/Users/Navbar.module.css'
import img from '../../../image/slide1.jpg'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
// import {login} from '../r'
import {
    NavItem,
    NavLink,
    Card, Button, Row, Col, Input,
    
    Modal, ModalHeader, ModalBody, ModalFooter,

    Form, FormGroup, Label, FormText
  } from 'reactstrap';
import auth from '../../../redux/reducers/auth';

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


      let [user, setUser] = useState('false')
      let [username, setUsername] = useState('')
      let [password, setPassword] = useState('')
      let [email, setEmail] = useState('')
      let [address, setAddress] = useState('')
      let [role, setRole] = useState('0')
      

      let HandleLogin = (event) => {
        event.preventDefault()
        const data = {
          username: username,
          password: password
        }

        console.log(data)
        //   axios({
        //     method: 'POST',
        //     url: 'http://localhost:3000/books/login',
        //     data:{
        //         name_user: username,
        //         password: password
        //     }
        // })
        // .then((response) => {
          
        //       Swal.fire({
        //         title: 'Success',
        //         text: "Login Success",
        //         icon: 'success',
        //         confirmButtonColor: '#3085d6',
        //         confirmButtonText: 'Ok'
        //       }).then((result) => {
        //         if (result.value) {
        //           console.log(result)
        //           localStorage.setItem('token', response.data.data[0].AccessToken)
        //           localStorage.setItem('name_user', response.data.data[0].name_user)
        //           localStorage.setItem('id', response.data.data[0].id_user)
        //           if(response.data.data[0].role === 1){
        //             history.push('/admin')
        //           }else{
        //             window.location.reload()
        //           }
                  
        //         }
        //       })
              
      
            
        // })
        // .catch((error) =>{
        //   console.log(error)

        // })
      }

      let HandleRegister = (event) => {
        event.preventDefault()

        axios({
          method: 'POST',
          url: 'http://localhost:3000/books/register',
          data: {
            name_user: username,
            email: email,
            password: password,
            address: address,
            role: role
          }
      })
      .then((response) => {
        Swal.fire({
          title: 'Success',
          text: "Regiter Success",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.value) {
              window.location.reload()
          }
        })
      })
      .catch((error) =>{
          console.log(error)
      })
      }

      let IconUser = (props) =>{
        if(props.localStorage === null ){
          return(
            <NavLink><i style={{color: 'white'}} class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <span className={style.NavLink}><strong onClick={props.login}>Login</strong> Or <strong onClick={props.register}>Register</strong></span></NavLink>
          )
        }
        else{
          return(
            <NavLink><i style={{color: 'white'}} class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <span className={style.NavLink}>{localStorage.getItem('name_user')}</span> <span onClick={props.logout} className={style.NavLink}>Logout</span></NavLink>
          )
        }
        
      }

      let logout = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You will exit this page",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'Success',
              text: "Logout Success",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            }).then((result) => {
              if (result.value) {
                localStorage.clear();
                history.push('/')
              }
            })
          }
        })
        
        
      }
    return (
     <>

     {/* Alert */}
        

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
          <form onSubmit={HandleRegister}>
            <FormGroup>
                <Input value={username} onChange={(e) => setUsername(e.target.value)}  className={style.InputMedia} type="text" id="exampleEmail" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Input value={email} className={style.InputMedia} onChange={(e) => setEmail(e.target.value)}  type="text" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Input value={password} type="password" className={style.InputMedia} onChange={(e) => setPassword(e.target.value)}  name="text" id="exampleEmail" placeholder="Password" />
            </FormGroup>
            <FormGroup>
                <Input value={address} className={style.InputMedia} type="text" id="exampleEmail" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            </FormGroup>
            <Button style={{width: '100%'}} color="primary">Register</Button>
          </form>
            </ModalBody>
        </Modal>


            <NavItem>
                <IconUser logout={logout} localStorage={localStorage.getItem('name_user')} user={user} login={login} register={register}/>
            </NavItem>
        
    </>
    )
  }

const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps)(UserBeforeLogin)