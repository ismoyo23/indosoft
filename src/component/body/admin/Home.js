import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'react-id-swiper';
import {Input,Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'

function Home(props){

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
                <form>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Title</Label>
                        <Input type="text" id="exampleEmail" placeholder="Title Books" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="exampleSelect">Author</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Upload Image</Label>
                        <Input color="warning" type="file"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Desciption</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Stok</Label>
                        <Input type="text" id="exampleEmail" placeholder="Stok" />
                    </FormGroup>

                    </Form>
                </ModalBody>

                <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                </form>
            </Modal>


            {/* card */}
    
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
                                <th>No</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>desciption</th>
                                <th>Stok</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>asd</td>
                                <td>Availabe</td>
                                <td>
                                    <Button color="primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button color="danger"><i class="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>
                            
                        </tbody>
                        </Table>
                    </Card>
                </Col> 
                
                </Row>
            
                
            </>
        )
    }


export default Home