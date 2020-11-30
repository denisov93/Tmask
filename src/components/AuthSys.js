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

class AuthSys extends AppBase {

  state = {
    wait: true,
    id: "",
    username: "",
    img: ""
  }

  constructor() {
    super()
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidMount() {
    this.state.id = this.getCookie(SESSION_ID)
    this.state.wait = false

    this.setState({
    });
  }

  componentDidUpdate() {
    this.state.id = this.getCookie(SESSION_ID)
  }

  handleHasSession() {
    return (this.state.id !== null)
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
    if (this.state.wait)
      return (<></>)

    let components
    if (this.handleHasSession()) {
      let user = this.getUser(this.state.id)

      let image
      switch (this.state.id) {
        case 0:
          image = require("assets/img/userimage/user_alicia.png").default
          break;
        case 1:
          image = require("assets/img/userimage/user_jonny.png").default
          break;
        case 2:
          image = require("assets/img/userimage/user_nahla.png").default
          break;
        case 3:
          image = require("assets/img/userimage/user_pedro.png").default
          break;
        default:
          break;
      }

      let accountimg =
        <img alt=""
          src={image}
          style={{ width: 42, height: 42, borderRadius: 90 / 2, borderStyle: "solid", borderColor: "white", borderWidth: 2 }}
        />
      let accountdetails =
        <div style={{ display: "grid", placeItems: "center", paddingInlineStart: 10, paddingInlineEnd: 10 }}>
          <font color="white">{user.name}</font>
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

                  <Media body className="mt-2 ml-2">
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

                  <Media body className="mt-2 ml-2">
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

                  <Media body className="mt-2 ml-2" onClick={this.handleLogoutClick} >
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