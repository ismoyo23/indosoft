import {combineReducers} from 'redux'
// =============================================
// import from reducers auth
import auth from './auth'

// =============================================
// import funtion from author
import authorGet from './author/authorGet'
import deleteData from './author/deleteData'
import showID from './author/showID'
import authorAction from './author/authorAction'
// ============================================
// import function from genre
import genreGet from './genre/genreGet'
import deleteGenre from './genre/deleteGenre'
import showGenre from './genre/showGenre'
import genreAction from './genre/genreAction'

// ============================================
// import function from genre
import booksGet from './books/booksGet'
import actionBooks from './books/actionBooks'
import deleteBooks from './books/deleteBooks'
import showBooks from './books/showBooks'
// ===========================================
import borrowGet from './borrow/borrowGet';

// export combine reducers
export default combineReducers({
    // =========================================//
    // export auth // 
    auth,
    // =========================================//
    // export author // 
    authorGet, deleteData, showID, authorAction,
    // ========================================//
    // export author // 
    genreGet, deleteGenre, showGenre, genreAction,
    // ======================================= //
    // export books
    booksGet, actionBooks, deleteBooks, showBooks,

    // ========================================//
    // export borrow
    borrowGet

})
