import React, {Component} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../component/theme/admin/Header'
import Navbar from '../component/theme/admin/Navbar'
import HomeAdmin from '../component/body/admin/Home'
import style from '../styles/Admin/Sidebar.module.css'
import {Row, Col, Container} from 'reactstrap'
import $ from 'jquery'
class Admin extends Component{  
    
    
    render(){
        let EventClick = () => {
            $('.sidebar').addClass(style.sidebar12)
            $('.navbar123').addClass(style.navbar12)
            $('.body').css('margin-left', '100px')
        }
        return(
            <>      
               
                        <div className={`${style.sidebar} sidebar`}>
                            <Sidebar/>
                        </div>
                        <div className={`${style.Col2} navbar123`}>
                            <Navbar event={EventClick}/>
                            <div className='body'>
                                <HomeAdmin/>
                            </div>
                        </div>
           

            </>
        )
    }
}

export default Admin