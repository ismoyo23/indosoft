import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Users from './page/User/HomePage'
import Admin from './page/Admin/Dashboard'
import CrudBooks from './page/Admin/BooksCrud'
import CrudAuthor from './page/Admin/AuthorCrud'
import CrudGenre from './page/Admin/GenreCruds'
import DetailBooks from './page/User/DetailBooks'


function App() {
  return (
    <div style={{margin: '0', padding: '0'}}>
    <Router>
      <Switch>
      <Route path='/DetailBooks' component={DetailBooks}/>
        {/* Route User */}
        <Route path='/' exact component={Users}/>

        {/* Route Admin */}
        <Route path='/admin' component={Admin}/>
        <Route path='/books' component={CrudBooks}/>
        <Route path='/author' component={CrudAuthor}/>
        <Route path='/genre' component={CrudGenre}/>

        
      </Switch>
    </Router>
    </div>
  );
}

export default App;