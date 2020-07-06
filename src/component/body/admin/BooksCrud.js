import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import {Input,Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'
import axios from 'axios'
import FormData from 'form-data'
import {connect} from 'react-redux'
import {login} from '../../../redux/actions/auth'
import ReactLiveSearch from 'react-live-search'

function BooksCrud(props){
    let [allBooks, setAllBooks] = useState([])
    let [allAuthor, setAllAuthor] = useState([])
    let [allGenre, setAllGenre] = useState([])
    useEffect(() => {
        getAllAuthor()
        getAllGenre()
        getAllBooks()
    }, []);

    // Component dit Update
    useEffect(() => {
    if(search != ''){
        getAllBooks() 
    }
    });

    let [id, setId] = useState('')
    let [title, setTitle] = useState('')
    let [discription, setDiscrption] = useState('')
    let [images, setImage] = useState('')
    let [idGenre, setIdGenre] = useState('')
    let [idAuthor, setIdAuthor] =useState('')
    let [stok, setStok] = useState('')

    let [Action, setAction] = useState('')

    let [modalTitle, setModalTitle] = useState('Add Books')

    let [search, setSearch] = useState('')
    

    // get data All Author
    let getAllAuthor = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/author',
        })
        .then((response) => {
            setAllAuthor(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // get data All Genre
    let getAllGenre = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/genre/',
        })
        .then((response) => {
            setAllGenre(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // Action Delete Books by id
    let DeleteBooks = (id) => (event) => {
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
                    url: `http://localhost:3000/books/${id}`
                })
                .then((response) => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                })
                .catch((error) => {
                    console.log(error)
                })
            }
          })
    }

    // Show Books by Id
    let ShowBooks = (id) => (event) => {
        event.preventDefault()
        axios({
            method: 'GET',
            url: `http://localhost:3000/books/?search=${id}&field=id`
        })
        .then((response) => {
            setModal(true)
            setId(id)
            setTitle(response.data.data[0].title)
            setDiscrption(response.data.data[0].discription)
            setIdAuthor(response.data.data[0].id_author)
            setStok(response.data.data[0].stok)
            setIdGenre(response.data.data[0].id_genre)
            setModalTitle('Edit Data')
        })
        .catch((error) => {
            console.log(error)
        })

    }

    // Action Add Books
    let ActionBooks = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('discription', discription)
        formData.append('image', images)
        formData.append('stok', stok)
        formData.append('id_genre', idGenre)
        formData.append('id_author', idAuthor)
        
        let ConUrl = modalTitle === 'Add Books' ? `http://localhost:3000/books` : `http://localhost:3000/books/${id}`
        let Method = modalTitle === 'Add Books' ? `POST` : `PUT`
        
        axios({
            method: Method,
            url: ConUrl,
            data: formData
        })
        .then((response) => {
            Swal.fire(
                'Deleted!',
                `${modalTitle} success`,
                'success'
              )
            
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }

    let getAllBooks = async () => {
        let SearchBooks = search === '' ? '' : `?search=${search}&field=title`
        await axios({
            method: 'GET',
            url: `http://localhost:3000/books/` + SearchBooks,
        })
        .then((response) => {
            setAllBooks(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let CloseModal = () =>{
            setModal(false)
            setTitle('')
            setDiscrption('')
            setIdAuthor('')
            setStok('')
            setIdGenre('')
            setModalTitle('Add Books')

            setAction('AddBooks')
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
                <form onSubmit={ActionBooks}>
                <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
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
                        <Input onChange={(e) => setImage((e.target.files[0]))} color="warning" type="file"/>
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
                <Button color="primary">{modalTitle}</Button>
                <Button color="secondary" onClick={CloseModal}>Cancel</Button>
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
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} className={style.Search} type="text"  placeholder="Search" />
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
                                    <Button onClick={ShowBooks(allBooks.id)} color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button onClick={DeleteBooks(allBooks.id)} color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
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

const mapStateToProps = (state) => ({
    auth: state.auth
  })
  const mapDispatchToProp = {login}
  
  export default connect(mapStateToProps, mapDispatchToProp)(BooksCrud)