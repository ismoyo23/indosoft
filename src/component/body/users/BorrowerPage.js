import React, {useEffect, useState} from 'react'
import axios from 'axios'
import style from '../../../styles/Users/Navbar.module.css'
import {
    Card, Button, Row, Col, Input,
     CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
function BorrowerPage(props){
    console.log(props)
    return(
    <>
    {/* list books */}
    <Col md='2' xs='6'>
       <div className={style.cardBody}>
        <Card>
          <div className={style.front}>
            <img className={style.imgCard} src={`http://localhost:3000/${props.borrow.image}`} alt="Image None" />
          </div>

          <div className={style.back}>
       
          <Card className={style.text} style={{height: '270px', width: '100%'}}>
              <CardBody >
              <CardTitle>{props.borrow.title}</CardTitle>
                <CardText>{Date(props.borrow.create_at)}</CardText>
                <Button color="danger">Borrowed</Button>
              </CardBody>
          </Card>
          </div>
        
        </Card>
        </div>
     </Col>
    </>
    )
}

export default BorrowerPage