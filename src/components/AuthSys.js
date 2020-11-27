import React from 'react';
import { Link } from "react-router-dom";
import { Button, NavLink } from "reactstrap";

import AppBase from "components/AppBase.js";


function LoginButton(props) {
  return (
          <Button onClick={props.onClick}
          className="btn-neutral btn-icon"
          color="default"
          to="/login-page" 
          tag={Link}>
          <span className="btn-inner--icon">
            <i className="fa fa-sign-in mr-2" />
          </span>
          <span className="nav-link-inner--text ml-1">
            Login
          </span>
          </Button>
  );
}

function LogoutButton(props) {
  return (
    <Button onClick={props.onClick}
          className="btn-neutral btn-icon"
          color="default"
          to="/" 
          tag={Link}>
          <span className="btn-inner--icon">
            <i className="fa fa-sign-in mr-2" />
          </span>
          <span className="nav-link-inner--text ml-1">
            Logout
          </span>
          </Button>
  );
}

const SESSION_ID = 'sessionID'
const SESSION_NAME = 'sessionNAME'
const SESSION_IMG = 'sessionIMG'

class AuthSys extends AppBase{

  state = {
    id: "",
    name: "",
    img: ""
  }

  constructor() {
    super()
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidMount() {
    this.state.id = this.getCookie(SESSION_ID)
    this.state.name = this.getCookie(SESSION_NAME)
    this.state.img = this.getCookie(SESSION_IMG)

    this.setState({
    });
  }

  componentDidUpdate(){
    this.state.id = this.getCookie(SESSION_ID)
    this.state.name = this.getCookie(SESSION_NAME)
    this.state.img = this.getCookie(SESSION_IMG)
  }

  handleHasSession(){
    return (this.state.name !== null && this.state.img !== null)
  }

  handleLoginClick() {
    return(<NavLink
      to="/login" 
      tag={Link}>
    </NavLink>)
  }

  handleSignInClick() {
    this.doLogin()
  }

  handleLogoutClick() {
    this.clearSession()
    this.doLogout()
  }

  render() {
    let components;
    let accountimg;
    let accountdetails;

    var image
    if(this.state.id === 0)
      image = require("assets/img/userimage/user_alicia.png").default
    else if(this.state.id === 1)
      image = require("assets/img/userimage/user_jonny.png").default
    else if(this.state.id === 2)
      image = require("assets/img/userimage/user_nahla.png").default
    else if(this.state.id === 3)
      image = require("assets/img/userimage/user_pedro.png").default

    if (this.handleHasSession()) {
      //user image
      accountimg = <img alt=""
      src={image}
      style={{width: 42, height: 42, borderRadius: 90/2, borderStyle: "solid", borderColor: "white", borderWidth: 2 }}/>
      //user name
      accountdetails = 
    <div style={{display:"grid", placeItems: "center", paddingInlineStart: 10, paddingInlineEnd: 10 }}><font color="white">{this.state.name}</font></div>
      //logout button
      components = <LogoutButton onClick={this.handleLogoutClick} />;
      //
    } else {
      //login button
      components = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center"}}>
        {accountimg}
        {accountdetails}
        {components}
      </div>
    );
  }

}

export default AuthSys