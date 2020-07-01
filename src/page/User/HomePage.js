import React, {useState,useEffect} from 'react'
import style from '../../styles/Users/Navbar.module.css'
import Navbar from '../../component/theme/users/NavbarPage'
import HomePage from '../../component/body/users/HomePage'
import SlideShow from '../../component/body/users/SlideShow'
import axios from 'axios'
import {Row, Container} from 'reactstrap'
function HomeUsers(){

let [allBooks, setAllBooks] = useState([]) 

    useEffect(() => {
        getAllProduct()
    }, []);

    let getAllProduct = () => {
        let token = localStorage.getItem('token')
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books',
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            console.log(response)
            setAllBooks(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
            <Navbar/>
            <SlideShow/>
            <Container>
            <header className={style.headerBooks}>List Books</header>
                <Row>
                
                    {allBooks.map((allBooks) => {
                        return <HomePage allBooks={allBooks}/>
                    })}
                </Row>
            </Container>
            
        </>
    )
}

export default HomeUsers