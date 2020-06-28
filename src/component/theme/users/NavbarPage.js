import React, { useState } from 'react';
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
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Card, Button, CardTitle, CardText, Row, Col, Input
} from 'reactstrap';

function NavbarPage(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


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
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      }


    return(
        <>
    <Navbar light className={style.NavBar} expand="md">
<Container>
        <NavbarBrand className={style.NavBrand}>loyal book be your friend</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          </Nav>
          <NavbarText>
          <Nav className="mr-auto"  navbar>
            <NavItem>
              <NavLink className={style.NavLink} >GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                    <img src={img} className={style.LogoImg}/> <span className={style.NavLink}><b>User</b></span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem >
            <Input type="email" name="text" id="exampleEmail" placeholder="Search..." />
            </NavItem>

          </Nav>
          </NavbarText>
        </Collapse>
    </Container>
      </Navbar>

      <Navbar className={style.CardHeader} color="light" light expand="md">
          <Container>
        <NavbarBrand href="/"><span className={style.FontTitle}><i class="fa fa-book" aria-hidden="true"></i>
            Setya</span> <span className={style.TitleLib}>Library</span></NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          </Nav>
          <NavbarText>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className={style.NavItem}>Category</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className={style.NavItem}>All Time</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
              
            </UncontrolledDropdown>

            </Nav>

          </NavbarText>
        </Collapse>
        </Container>
      </Navbar>

  <Container>
      <Swiper {...params}>

      <div class="swiper-slide">
          <img src={img3}/>
      </div>
      <div class="swiper-slide">
          <img src={img4}/>
      </div>
      
    </Swiper>

    <Row className={style.IconBooks}>
        <Col md='3' xs='6'>
            <img src={iconbuku} />
        </Col>

    <Col md='3' xs='6'>
            <img src={iconbuku2} />
     </Col>
     <Col md='3' xs='6'>
            <img src={iconbuku3} />
     </Col>


     <Col md='3' xs='6'>
            <img src={iconbuku5}/>
     </Col>
     
    </Row>

      
      {/* slide books */}
    <header className={style.headerBooks}>New Books</header>

    <Swiper {...bookSlide}>

      <div class="swiper-slide" className={style.SwiperSlide}>
        <div className={style.SwiperWraper}>
          <img style={{width: '300px'}} src={img6}/>
        </div>
      </div>
      <div class="swiper-slide" className={style.SwiperSlide}>

      <div className={style.SwiperWraper}>
          <img style={{width: '300px'}} src={img6}/>
      </div>
      </div>

      <div class="swiper-slide" className={style.SwiperSlide}>

      <div className={style.SwiperWraper}>
          <img style={{width: '300px'}}  src={img6}/>
      </div>
      </div>

      <div class="swiper-slide" className={style.SwiperSlide}>

      <div className={style.SwiperWraper}>
          <img style={{width: '300px'}}  src={img6}/>
      </div>
      </div>

      <div class="swiper-slide" className={style.SwiperSlide}>

      <div className={style.SwiperWraper}>
          <img style={{width: '300px'}}  src={img6}/>
      </div>
      </div>
      

      <div class="swiper-slide" className={style.SwiperSlide}>

      <div className={style.SwiperWraper}>
          <img style={{width: '300px'}}  src={img6}/>
      </div>
      </div>

      <div class="swiper-slide" className={style.SwiperSlide}>

      <div className={style.SwiperWraper}>
          <img style={{width: '300px'}}  src={img6}/>
      </div>
      </div>
      
    </Swiper>



    {/* list books */}

    <header className={style.headerBooks}>List Books</header>
    <Row>
      

     <Col md='2' xs='6'>
        <Card className={style.cardBody}>
            <img className={style.imgCard} src={img6} alt="Card image cap" />
        </Card>
     </Col>

     <Col md='2' xs='6'>
        <Card>
            <img className={style.imgCard} src={img6} alt="Card image cap" />
        </Card>
     </Col>

     <Col md='2' xs='6'>
        <Card>
            <img className={style.imgCard} src={img6} alt="Card image cap" />
        </Card>
     </Col>
    </Row>
    </Container>

    
        </>
    )
}

export default NavbarPage