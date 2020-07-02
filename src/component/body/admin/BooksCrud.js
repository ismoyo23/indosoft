import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'react-id-swiper';
import {Input,Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'
import axios from 'axios'

function BooksCrud(props){

    let [allBooks, setAllBooks] = useState([])
    let [allAuthor, setAllAuthor] = useState([])
    let [allGenre, setAllGenre] = useState([])
    useEffect(() => {
     getAllBooks()
     getAllAuthor()
     getAllGenre()
    }, []);

    let [title, setTitle] = useState('')
    let [discription, setDiscrption] = useState('')
    let [images, setImage] = useState('')
    let [idGenre, setIdGenre] = useState('')
    let [idAuthor, setIdAuthor] =useState('')
    let [stok, setStok] = useState('')

    let getAllAuthor = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/author',
        })
        .then((response) => {
            console.log(response)
            setAllAuthor(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let getAllGenre = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/genre/',
        })
        .then((response) => {
            console.log(response)
            setAllGenre(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let AddBooks = (event) => {
        event.preventDefault()

        axios({
            method: 'POST',
            url: 'http://localhost:3000/books',
            data: {
                title: title,
                discription: discription,
                image: images,
                id_genre: idGenre,
                id_author: idAuthor,
                stok: stok
              },
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response)
            
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }

    let getAllBooks = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books',
        })
        .then((response) => {
            console.log(response)
            setAllBooks(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
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
            {/* modal */}
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <form onSubmit={AddBooks}>
                <ModalHeader toggle={toggle}>Add Books</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Title</Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="exampleEmail" placeholder="Title Books" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="exampleSelect">Author</Label>
                        <Input value={idAuthor} onChange={(e) => setIdAuthor(e.target.value)} type="select" name="select" id="exampleSelect">
                        {allAuthor.map((allAuthor) => {
                        return(
                        <option value={allAuthor.id_author}>{allAuthor.name_author}</option>
                        )
                    })}
                        
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">Genre</Label>
                        <Input value={idGenre} onChange={(e) => setIdGenre(e.target.value)} type="select" name="select" id="exampleSelect">
                        {allGenre.map((allGenre) => {
                        return(
                        <option value={allGenre.id_genre}>{allGenre.name_genre}</option>
                        )
                    })}
                        
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Upload Image</Label>
                        <Input onChange={(e) => setImage((e.target.value))} color="warning" type="file"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Desciption</Label>
                        <Input value={discription} onChange={(e) => setDiscrption(e.target.value)} value={discription} type="textarea" name="text" id="exampleText" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Stok</Label>
                        <Input onChange={(e) => setStok(e.target.value)} value={stok} type="text" id="exampleEmail" placeholder="Stok" />
                    </FormGroup>

                    </Form>
                </ModalBody>

                <ModalFooter>
                <Button onClick={AddBooks} color="primary">Add</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                </form>
            </Modal>


            {/* card */}
    
                <Row noGutters>
                <Col md='12' xs='12'>
                <Card body className={style.CardTable}>
                <Row>
                 <Col md='6'>
                    <Button  onClick={toggle} color="primary"><i class="fa fa-plus" aria-hidden="true"></i> Add Books
                    </Button>
                </Col>

                <Col md='6'>
                    <Input className={style.Search} type="text"  placeholder="Search" />
                </Col>
                </Row>
                    <Table hover className={style.Table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>desciption</th>
                                <th>Stok</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allBooks.map((allBooks) => {
                            return(
                                <tr>
                                <td>{allBooks.title}</td>
                                <td>{allBooks.name_author}</td>
                                <td>{allBooks.discription.substr('0','22')}</td>
                                <td>{allBooks.stok}</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
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

export default BooksCrud