import React, {useState, useEffect} from 'react'
import style from '../../../styles/Users/Detail.module.css'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap';
function DetailPage(props){
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return(
        <>
        <CardGroup>
            <Card>
                <CardImg className={style.CardImg} src={`http://localhost:3000/${props.idBooks.image}`} alt="Card image cap" />
                <CardBody>
                <Container>
                <Row>
                    <Col md='9'>
                        <Row>
                        <CardTitle className={style.CardTitle}>{props.idBooks.title}</CardTitle>
                        <Col md="7">
                        </Col>
                        <Col md="2">
                            <p className={style.TextStatus}>{props.idBooks.status} Available</p>
                        </Col>
                        </Row>
                        <CardText>{props.idBooks.discription}</CardText>
                    </Col>
                    <Col md='3'>
                    <CardImg className={style.CardChild} src={`http://localhost:3000/${props.idBooks.image}`} alt="Card image cap" /><br/>
                        <Button color="warning" onClick={toggle} className={style.Button}>Borrow</Button>
                    </Col>
                </Row>
                    
                   
                </Container>
                </CardBody>
            </Card>
      </CardGroup>
        </>
    )
}

export default DetailPage