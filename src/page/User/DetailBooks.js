import React, {useEffect, useState} from 'react'
import DetailPage from '../../component/body/users/DetailPage'
import axios from 'axios'
function DetailBooks(props){
   
    let [idBooks, setIdBooks] = useState([]) 
    let [idBorower, setIdBorower] = useState([]) 
    useEffect(() => {
        getIdBooks()
    }, []);

    let getIdBooks = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/books/?search='+props.match.params.id+'&field=id'
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
                return <DetailPage paramId={props.match.params.id} idBooks={idBooks}/>
            })}
        </>
    )
}

export default DetailBooks