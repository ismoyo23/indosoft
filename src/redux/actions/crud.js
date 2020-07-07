import axios from 'axios'

export const crud = (url) => ({
    type: 'RECEIVE_DATA',
    payload:axios({
        method: 'GET',
        url: `${url}books/author`
    })
})
