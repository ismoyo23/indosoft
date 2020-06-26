import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import {Table, Container, Row,Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody} from 'reactstrap'
import img from '../../../image/index.jpeg'
import style from '../../../styles/Admin/Body.module.css'

import $ from 'jquery'
function Home(){
    const $ = require('jquery')
    $.Datatable = require('datatables.net')
        return(
            <>
    
                <Row noGutters>
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

            
                </Row>
            
                
            </>
        )
    }


export default Home