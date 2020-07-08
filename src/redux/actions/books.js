import axios from 'axios'

// ==============================================
// action get data Author
export let booksGet = (data) => ({
    type: 'BOOKS_GET',
    payload:axios({
        method: 'GET',
        url: `${data.ConUrl}books/${data.SearchBooks}`,
    })
})

// ==============================================
// action Add data Author
export let addData = (data) => ({
    type: 'PROCESS_BOOKS',
    payload: axios({
        method: data.Method,
        url: data.ConUrl,
        data: {
            'name_author': data.name_author,
            'profile_author': data.profile_author
        }
    })
})

// ===============================================
// action delete data author
export let removeData = (data) => ({
    type: 'DELETE_BOOKS',
    payload: axios({
        method: 'DELETE',
        url: `${data.ConUrl}books/author/${data.id}`
    })
})

export let showID = (data) => ({
    type: 'SHOW_BOOKS',
    payload: axios({
        methot: 'GET',
        url: `${data.ConUrl}books/author?field=id_author&search=${data.id}`
    }) 
})