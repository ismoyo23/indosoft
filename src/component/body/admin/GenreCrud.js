import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'
import axios from 'axios'
import FormData from 'form-data'
import Swal from 'sweetalert2'
function GenreCrud(props){
    const {
        buttonLabel,
        className
      } = props;

      useEffect(() => {
        GetAllGenre()
      }, [])
    
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      let [nameGenre, setNameGenre] = useState('')
      let [genre, setGenre] = useState([])
      let [id, setId] = useState()
      let [modalTitle, setModalTitle] = useState('Add Genre')
      
      let ActionGenre = (event) => {
        event.preventDefault()
        
        let ConUrl = modalTitle === 'Add Genre' ? `http://localhost:3000/books/genre` : `http://localhost:3000/books/genre/${id}`
        let Method = modalTitle === 'Add Genre' ? `POST` : `PUT`
        
        axios({
            method: Method,
            url: ConUrl,
            data: {
                'name_genre': nameGenre
            }
        })
        .then((response) => {
            Swal.fire(
                'Success!',
                `${modalTitle} success`,
                'success'
              )
            
        }) 
    }

    // get data
    let GetAllGenre = async () => {
        await axios({
            method: 'GET',
            url: 'http://localhost:3000/books/genre/'
        })
        .then((response) => {            
            setGenre(response.data.data)
        })
  
    }

    let ShowGenre = (id) => (event)=>{
        event.preventDefault()
        axios({
            method: 'GET',
            url: `http://localhost:3000/books/genre/?field=id_genre&search=${id}`
        })
        .then((response) => {
            setModal(true)
            setNameGenre(response.data.data[0].name_genre)
            setModalTitle('Edit Genre')
        })
        .catch((error) => {
            console.log(error);
            
        })
    }

    let DeleteGenre = (id) => (event) => {
        event.preventDefault()

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios({
                    method: 'DELETE',
                    url: `http://localhost:3000/books/genre/${id}`
                })
                .then((response) => {
                    Swal.fire(
                        'Success!',
                        `Delete success`,
                        'success'
                      )
                })
            }
          })

        
    }
    return(
        <>
            {/* modal */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <form onSubmit={ActionGenre}>
                <ModalHeader toggle={toggle}>Add Genre</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name Genre</Label>
                        <Input value={nameGenre} onChange={(e) => setNameGenre(e.target.value)} type="text" id="exampleEmail" placeholder="Title Books" />
                    </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                <Button color="primary" >Add</Button>
                <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
                </form>
            </Modal>


            {/* card */}
    
                <Row noGutters>
                <Col md='12' xs='12'>
                <Card body className={style.CardTable}>
                <Row>
                 <Col md='6'>
                    <Button  onClick={toggle} color="primary"><i class="fa fa-plus" aria-hidden="true"></i> Add Genre
                    </Button>
                </Col>

                <Col md='6'>
                    <Input className={style.Search} type="text"  placeholder="Search" />
                </Col>
                </Row>
                    <Table hover className={style.Table}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name Genre</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {genre.map((genre, key) =>{
                                return(
                            <tr>
                                <th scope="row">{key}</th>
                                <td>{genre.name_genre}</td>
                                <td>
                                    <Button onClick={ShowGenre(genre.id_genre)} color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button onClick={DeleteGenre(genre.id_genre)} color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
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

export default GenreCrud