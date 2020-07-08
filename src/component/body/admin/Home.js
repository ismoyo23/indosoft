import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,Table, Row,Col, Card, Button} from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'
import {connect} from 'react-redux';
import { borrowGet } from '../../../redux/actions/borrow'
import axios from 'axios'
import Swal from 'sweetalert2'
function Home(props){

    let [Borrowed, setBorrowed]= useState([])
    useEffect(() => {
        getBorrowed()
       }, [])

    let getBorrowed = () => {
        props.borrowGet(process.env.REACT_API_URL)
        .catch((error) => {
            console.log(error);
            
        })
    }

    let HandleReturn = (id) => (event) => {
        event.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You want return this books!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.value) {
                let token = localStorage.getItem('token')
                axios({
                    method: 'DELETE',
                    url: `http://localhost:3000/books/borrower/${id}`,
                    headers : {
                        Authorization : token
                    }
                })
                .then((response) => {
                    Swal.fire({
                        title: 'Success',
                        text: "You won't be able to revert this!",
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Yes'
                      }).then((result) => {
                        if (result.value) {
                            window. location. reload()
                        }
                      })
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
          })


    } 


    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

        return(


            <>
                <Row style={{marginTop: '30px'}} noGutters>
                <Col md="3" xs='10' className={style.Card}>
                    <Card body>
                        <i className="fa fa-user" aria-hidden="true"><span className={style.writer}>Users</span></i>
                        <p className={style.writer}>120</p>
                    </Card>
                </Col>
                <Col md="3" xs='10' className={style.Card}>
                    <Card body>
                        <i class="fa fa-bookmark" aria-hidden="true"><span className={style.writer}>Borrowed</span></i>
                        <p className={style.writer}>120</p>
                    </Card>
                </Col>

                <Col md="3" xs='10' className={style.Card}>
                    <Card body>
                        <i  class="fa fa-commenting" aria-hidden="true"><span className={style.writer}>Message</span></i>
                        <p className={style.writer}>120</p>
                    </Card>
                </Col>

                <Col md='12' xs='12'>
                <Card body className={style.CardTable}>
                <Row>
                 <Col md='6'>
                    <header style={{fontSize: '20px'}}><b>Table Borrow</b></header>
                </Col>

                <Col md='6'>
                    <Input className={style.Search} type="text"  placeholder="Search" />
                </Col>
                </Row>
                    <Table hover className={style.Table}>
                        <thead>
                            <tr>
                             
                                <th>Username</th>
                                <th>Email</th>
                                <th>Title Books</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.borrowCrud.data.map((borrow) => {
                                return (
                            <tr>
                                <td>{borrow.name_user}</td>
                                <td>{borrow.email}</td>
                                <td>{borrow.title}</td>
                                <td>{borrow.address}</td>
                                <td>
                                    <Button onClick={HandleReturn(borrow.id_borrower)} color="danger">Return
                                    </Button>
                                </td>
                            </tr>
                                )
                        })}
                            
                            
                        </tbody>
                        </Table>
                    </Card>
                </Col> 
                
                </Row>
            
                
            </>
        )
    }


    let mapStateToProps = (state) => ({
        borrowCrud: state.borrowGet
    })
    const mapDispatchToProp = {borrowGet}
        
    export default connect(mapStateToProps, mapDispatchToProp)(Home)