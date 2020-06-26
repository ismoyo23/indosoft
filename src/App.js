import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from './page/Admin'
import User from './page/User'
function App() {
  return (
    <div style={{margin: '0', padding: '0'}}>
    <Router>
      <Switch>
        <Route path='/' exact component={User}/>
        <Route path='/admin' component={Admin}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;