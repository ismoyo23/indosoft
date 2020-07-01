import React,{useEffect, useState} from 'react'
import Navbar from '../../component/theme/users/NavbarPage'
import BorrowedPage from '../../component/body/users/BorrowerPage'
import axios from 'axios'
import {Row, Container} from 'reactstrap'
function BorrowerBooks(){

    let [Borrowed, setBorrowed]= useState([])

    useEffect(() => {
     getNameBorrowed()
    }, []);

    let getNameBorrowed = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/borrower?field=name_user&search='+ localStorage.getItem('name_user')
        })
        .then((response) => {
            console.log(response)
            setBorrowed(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
    <>
    <Navbar/>
    <Container>
        <Row>
        {Borrowed.map((borrow) => {
                return <BorrowedPage borrow={borrow}/>
        })}
        </Row>
     </Container>
    
    </>
    )
}

export default BorrowerBooks