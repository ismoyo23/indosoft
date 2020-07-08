import axios from 'axios';

export let borrowGet = (data) => ({
    type: 'BORROW_GET',
    payload: axios({
        method: 'GET',
        url: `http://localhost:3000/books/borrower`
    })
})