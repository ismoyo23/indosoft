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

      useEffect(() => {
          if (search != '') {
            GetAllGenre()
          }
      })
    
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      let [nameGenre, setNameGenre] = useState('')
      let [genre, setGenre] = useState([])
      let [id, setId] = useState()
      let [modalTitle, setModalTitle] = useState('Add Genre')
      let [search, setSearch] = useState('')
      
      let ActionGenre = (event) => {
        event.preventDefault()
        let ConUrl = modalTitle == 'Add Genre' ? `http://localhost:3000/books/genre` : `http://localhost:3000/books/genre/${id}`
        let Method = modalTitle == 'Add Genre' ? `POST` : `PUT`
        
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
        let Search = search == '' ? '' : `/?field=name_genre&search=${search}`
        await axios({
            method: 'GET',
            url: `http://localhost:3000/books/genre${Search}`
        })
        .then((response) => {            
            setGenre(response.data.data)
        })
  
    }

    let ShowGenre = (id) => (event)=>{
        event.preventDefault()
        axios({
            method: 'GET',
            url: `http://localhost:3000/books/genre/?field=name_genre&search=${id}`
        })
        .then((response) => {
            setId(id)
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

    let Close = () =>{
        setModalTitle('Add Genre')
        setModal(false)
        setId('')
    }
    return(
        <>
            {/* modal */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <form onSubmit={ActionGenre}>
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name Genre</Label>
                        <Input value={nameGenre} onChange={(e) => setNameGenre(e.target.value)} type="text" id="exampleEmail" placeholder="Title Books" />
                    </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                <Button color="primary" >{modalTitle}</Button>
                <Button color="secondary" onClick={Close}>Close</Button>
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
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} className={style.Search} type="text"  placeholder="Search" />
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
                                <td scope="row">{key+1}</td>
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