import React from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavLink,
  Nav,
  Row,
} from "reactstrap";

import AppBase from "components/AppBase.js";
import 'assets/css/ajuda.css'


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

const SESSION_ID = 'sessionID'
const SESSION_NAME = 'sessionNAME'
const SESSION_IMG = 'sessionIMG'

class AuthSys extends AppBase {

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

  componentDidUpdate() {
    this.state.id = this.getCookie(SESSION_ID)
    this.state.name = this.getCookie(SESSION_NAME)
    this.state.img = this.getCookie(SESSION_IMG)
  }

  handleHasSession() {
    return (this.state.name !== null && this.state.img !== null)
  }

  handleLoginClick() {
    return (<NavLink
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
    if (this.state.id === 0)
      image = require("assets/img/userimage/user_alicia.png").default
    else if (this.state.id === 1)
      image = require("assets/img/userimage/user_jonny.png").default
    else if (this.state.id === 2)
      image = require("assets/img/userimage/user_nahla.png").default
    else if (this.state.id === 3)
      image = require("assets/img/userimage/user_pedro.png").default

    if (this.handleHasSession()) {
      accountimg =
        <img alt=""
          src={image}
          style={{ width: 42, height: 42, borderRadius: 90 / 2, borderStyle: "solid", borderColor: "white", borderWidth: 2 }}
        />
      accountdetails =
        <div style={{ display: "grid", placeItems: "center", paddingInlineStart: 10, paddingInlineEnd: 10 }}>
          <font color="white">{this.state.name}</font>
        </div>

      components =
        <Nav className="navbar-nav-hover align-items-lg-center" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Row>
                {accountimg}
                {accountdetails}
              </Row>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-md">
              <div className="dropdown-menu-inner">
                <Media
                  className="d-flex align-items-center"
                  to="/profile-page"
                  tag={Link}
                >
                  <i className="fa fa-user-circle fa-lg" />

                  <Media body className="margin-tl">
                    <h6 className="text-primary mb-md-1">
                      My Profile
                    </h6>
                  </Media>
                </Media>
                <Media
                  className="d-flex align-items-center"
                  to="/facial-features"
                  tag={Link}
                >
                  <i className="fa fa-id-card fa-lg" />

                  <Media body className="margin-tl">
                    <h6 className="text-primary mb-md-1">
                      Facial Features
                    </h6>
                  </Media>
                </Media>
                <Media
                  className="d-flex align-items-center"
                  to="/"
                  tag={Link}
                >
                  <i className="fa fa-sign-out fa-lg" />

                  <Media body className="margin-tl" onClick={this.handleLogoutClick} >
                    <h6 className="text-primary mb-md-1">
                      Log Out
                    </h6>
                  </Media>
                </Media>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>;
    } else {
      components = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {components}
      </div>
    );
  }

}

export default AuthSys