import axios from 'axios'

export const login = (data) => ({
    type: 'LOGIN',
        payload: axios({
            method: 'POST',
            url: `${data.env}books/login`,
            data:{
                name_user: data.username,
                password: data.password
            }
        })
})
