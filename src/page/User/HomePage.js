import React, {useState,useEffect} from 'react'
import style from '../../styles/Users/Navbar.module.css'
import Navbar from '../../component/theme/users/NavbarPage'
import HomePage from '../../component/body/users/HomePage'
import SlideShow from '../../component/body/users/SlideShow'
import axios from 'axios'
import {Row, Container} from 'reactstrap'
function HomeUsers(props){

    let [allBooks, setAllBooks] = useState([]) 
    let [Search, setSearch] = useState('')
    let [Genre, SetGenre] = useState('')
    let [sort, setSort] = useState('')
    console.log(Search);
    
    useEffect(() => {
        getAllBooks()
    }, []);

    // useEffect(() => {
    //     getAllBooks()
    // });
    let getAllBooks = () => {
        let SearchBooks = Search === '' ? '' : `&search=${Search}&field=title`
        let genre = Genre === '' ? '' : `&search=${Genre}&field=book_detail.id_genre`
        let SortBooks = sort === 'ASC' ? `/?sort=${sort}` : `/?sort=${sort}`
        axios({
            method: 'GET',
            url: `http://localhost:3000/books${SortBooks}${SearchBooks}${genre}`
        })
        .then((response) => {
            setAllBooks(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
            <Navbar sort={setSort} valSort={sort} valGenre={Genre} genre={SetGenre} value={Search} Search={(e) => setSearch(e.target.value)}/>
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