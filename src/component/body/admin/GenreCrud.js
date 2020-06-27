import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input,Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from 'reactstrap';
import style from '../../../styles/Admin/Body.module.css'

function GenreCrud(props){
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
                <ModalHeader toggle={toggle}>Add Genre</ModalHeader>
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

export default GenreCrud