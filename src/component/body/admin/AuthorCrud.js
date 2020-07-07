import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'react-id-swiper';
import {Input,Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'
function AuthorCrud(props){

    useEffect(() => {
        GetAuthor()
    }, [])

    const {
        buttonLabel,
        className
      } = props;
    
      let [modal, setModal] = useState(false);
      let toggle = () => setModal(!modal);
      let [nameAuthor, setNameAuthor] = useState('')
      let [author, setAuthor] =useState([])
      let [id, setId] = useState()
      let [modalTitle, setModalTitle] = useState('Add Author')

      let GetAuthor = () => {
          axios({
              methot: 'GET',
              url: 'http://localhost:3000/books/author'
          })
          .then((response) => {
              setAuthor(response.data.data)
          })
      }
      let DeleteAuthor = (id) => (event) =>{
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
                    url: `http://localhost:3000/books/author/${id}`
                })
                .then((response) => {
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                })
            }
          })
      }

      let ActionAuthor = (event) => {
        event.preventDefault()
        let ConUrl = modalTitle == 'Add Author' ? 'http://localhost:3000/books/author' : `http://localhost:3000/books/author${id}`
        let Method = modalTitle == 'Add Author' ? 'POST' : 'PUT'
        axios({
            method: Method,
            url: ConUrl,
            data: {
                'name_author': nameAuthor
            }
        })
        .then((response) => {
            Swal.fire(
                'Success!',
                `${modalTitle} success`,
                'success'
              )
        })
        .catch((error)=>{
            console.log(error);
            
        })
      }

      let showAuthor = (id) => (event) =>{
          event.preventDefault()
          axios({
              methot: 'GET',
              url: `http://localhost:3000/books/author?field=id_author&search=${id}`
          })
          .then((response) => {
              setModal(true)
              setNameAuthor(response.data.data[0].name_author)
              setModalTitle('Edit Author')
              setId(id)
          })
      }

      let close = () => {
        setModal(false)
        setNameAuthor('')
        setModalTitle('Add Author')
      }

    return(
        <>
            {/* modal */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <form onSubmit={ActionAuthor}>
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name Author</Label>
                        <Input onChange={(e) => setNameAuthor(e.target.value)} value={nameAuthor} type="text" id="exampleEmail" placeholder="Name Author" />
                    </FormGroup>
                    
                    </Form>
                </ModalBody>

                <ModalFooter>
                <Button color="primary">{modalTitle}</Button>
                <Button color="secondary" onClick={close}>Cancel</Button>
                </ModalFooter>
                </form>
            </Modal>


            {/* card */}
    
                <Row noGutters>
                <Col md='12' xs='12'>
                <Card body className={style.CardTable}>
                <Row>
                 <Col md='6'>
                    <Button  onClick={toggle} color="primary"><i class="fa fa-plus" aria-hidden="true"></i> Add Author
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
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {author.map((author,key)=> {
                                return(
                            <tr>
                                <td>{key + 1}</td>
                                <td>{author.name_author}</td>
                                <td>
                                    <Button onClick={showAuthor(author.id_author)} color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button onClick={DeleteAuthor(author.id_author)} color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
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

export default AuthorCrud