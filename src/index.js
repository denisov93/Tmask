/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim
* Modified by Tactical Design

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

//import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Catalog from "views/examples/Catalog.js";
import Builder from "views/examples/Builder.js";
import Cart from "views/examples/Cart.js";
import FacialFeatures from "views/examples/FacialFeatures.js";
import NewFacialFeatures from "views/examples/NewFacialFeatures.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Tmask" exact render={props => <Landing {...props} />} />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route path="/profile-page" exact render={props => <Profile {...props} />} />
      <Route path="/register-page" exact render={props => <Register {...props} />} />
      <Route path="/catalog" exact render={props => <Catalog {...props} />} />
      <Route path="/builder" exact render={props => <Builder {...props} />} />
      <Route path="/cart" exact render={props => <Cart {...props} />} />
      <Route path="/facial-features" exact render={props => <FacialFeatures {...props} />} />
      <Route path="/facial-features/new" exact render={props => <NewFacialFeatures {...props} />} />
      <Redirect to="/Tmask" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
