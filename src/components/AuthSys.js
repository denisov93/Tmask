import React from 'react';
import { Link } from "react-router-dom";
import {
  Button, NavLink
} from "reactstrap";

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

class AuthSys extends React.Component{

  constructor() {
    super()
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    <NavLink
      to="/login" 
      tag={Link}>
    </NavLink>
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  hasSession(){
    return this.state.isLoggedIn
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;
    let components;
    let accountimg;
    let accountdetails;

    if (isLoggedIn) {
      //user image
      accountimg = <img alt=""
      src={require("assets/img/userimage/user_alicia.png").default}
      style={{width: 42, height: 42, borderRadius: 90/2, borderStyle: "solid", borderColor: "white", borderWidth: 2 }}/>
      //user name
      accountdetails = 
      <div style={{display:"grid", placeItems: "center", paddingInlineStart: 10, paddingInlineEnd: 10 }}><font color="white">Alicia</font></div>
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