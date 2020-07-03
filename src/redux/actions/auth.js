import axios from 'axios'

export let login = data => {
    return{
        type: 'LOGIN',
        payload: axios({
            method: 'POST',
            url: 'http://localhost:3000/books/login',
            data:{
                name_user: data.username,
                password: data.password
            }
        })
    }
}