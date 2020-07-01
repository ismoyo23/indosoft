import React from 'react'
import style from '../../../styles/Users/Navbar.module.css'
import 'font-awesome/css/font-awesome.min.css';
import img from '../../../image/slide1.jpg'
import img2 from '../../../image/slide2.jpg'
import img3 from '../../../image/slide3.png'
import img4 from '../../../image/slide4.png'
import iconbuku from '../../../image/icon_buku1.png'
import iconbuku2 from '../../../image/icon_buku2.png'
import iconbuku3 from '../../../image/icon_buku3.png'
import iconbuku4 from '../../../image/icon_buku4.png'
import iconbuku5 from '../../../image/icon_buku5.png'
import img6 from '../../../image/image.jpg'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import {
  Container,
  Card, Button, Row, Col, Input,
   CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function SlideShow(props){
console.log(props)
    let params = {
        effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      }

      let bookSlide = {
        slidesPerView: 5,
      spaceBetween: 11,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      }
    return (
        <>
    <Container>
        <Row>
        <Col md='12' xs='12'>
      <Swiper {...params}>
        
            <div class="swiper-slide">
                <img src={img3}/>
            </div>
            <div class="swiper-slide">
                <img src={img4}/>
            </div>
            
    </Swiper>
    </Col>
      </Row>

</Container>
        </>
    )
}

export default SlideShow