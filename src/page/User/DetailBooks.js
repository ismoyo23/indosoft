import React, {useEffect, useState} from 'react'
import DetailPage from '../../component/body/users/DetailPage'
import axios from 'axios'
function DetailBooks(){
    let [idBooks, setIdBooks] = useState([]) 
    useEffect(() => {
        getIdBooks()
    }, []);

    let getIdBooks = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/?search=40&field=id'
        })
        .then((response) => {
            console.log(response)
            setIdBooks(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <>
            {idBooks.map((idBooks) => {
                return <DetailPage idBooks={idBooks}/>
            })}
        </>
    )
}

export default DetailBooks