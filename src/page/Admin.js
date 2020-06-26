import React, {Component} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../component/theme/admin/Header'
import Navbar from '../component/theme/admin/Navbar'
import HomeAdmin from '../component/body/admin/Home'
import {Row, Col, Container} from 'reactstrap'

class Admin extends Component{    
    render(){
        return(
            <>      
                    
                    <Row noGutters>
                        <Col md='2' xs='2'>
                            <Sidebar/>
                        </Col>
                        <Col md='10' xs='10'>
                            <Navbar/>
                            <HomeAdmin/>
                        </Col>
                    </Row>

            </>
        )
    }
}

export default Admin