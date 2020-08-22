import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BorrowerUser from "./page/User/BorrowerBooks";
import Users from "./page/User/HomePage";

import Admin from "./page/Admin/Dashboard";
import CrudBooks from "./page/Admin/BooksCrud";
import CrudAuthor from "./page/Admin/AuthorCrud";
import CrudGenre from "./page/Admin/GenreCruds";
import DetailBooks from "./page/User/DetailBooks";
import CrudUser from "./page/Admin/UsersCrud";
function App() {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <Router>
        <Switch>
          <Route path="/borowerbooks" component={BorrowerUser} />
          <Route path="/DetailBooks/:id" component={DetailBooks} />
          {/* Route User */}
          <Route path="/" exact component={Users} />
          <Route path="/search/:name" component={Users} />
          <Route path="/category/:category" component={Users} />
          <Route path="/sort/:sort" component={Users} />
          <Route path="/page/:page" component={Users} />
          {/* Route Admin */}
          <Route path="/admin" component={Admin} />
          <Route path="/filterAbsence/:name" component={Admin} />
          <Route path="/books" component={CrudBooks} />
          <Route path="/author" component={CrudAuthor} />
          <Route path="/genre" component={CrudGenre} />
          <Route path="/user/:filter" component={CrudUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
