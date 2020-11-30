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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  //Button,
  UncontrolledCollapse,
  DropdownMenu,
  //DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import AuthSys from "components/AuthSys";
import AppBase from "components/AppBase.js";

import dataService from "components/dataService.js";

class DemoNavbar extends AppBase {

  state = {
    collapseClasses: "",
    collapseOpen: false,
    itemCount: [],
    uselessState:false
  };

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();

    var cart = this.getCookie('cart')
    if(cart === null){cart = []}
    this.setState({
      itemCount: cart
    })

    dataService.getData().subscribe(message => {
      if(typeof message.value !== 'string'){
        this.setState({
          itemCount : [...this.state.itemCount,message.value]
        })
    }
    });
    

    let sessionID = this.getCookie("sessionID")
    if( sessionID !== null )
      if(this.state.uselessState===false)
        this.setState({uselessState: !this.state.uselessState})

  }

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
  
    
    let cartPopup;
    
    if (this.state.itemCount.length > 0) {
      cartPopup = "Checkout Your Cart!";
    } else {
      cartPopup = "Your cart is empty.";
    }

    return (
      <>
        <header className="header-global">
          <Navbar style={{userSelect:'none'}}
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require('assets/img/brand/TMASK_mask.png').default}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/TMASK_mask.png").default}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-bullet-list-67" /><span className="nav-link-inner--text">Menu</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          to="/catalog" 
                          tag={Link}
                        >
                          <img alt=".." className="icon icon-shape bg-gradient-primary rounded-circle text-white" src={require("assets/img/icons/common/head-side-mask-solid.svg").default}/>
                          
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Catalog
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Big Collection Of Masks, Explore It!
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          to="/builder" 
                          tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Builder
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Build Your Perfect Mask!
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      id="tooltip184698705"
                      to="/cart" 
                      tag={Link}
                    >
                      {this.state.itemCount.length}{" "}
                      <i className="fa fa-shopping-cart" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Cart
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                        {cartPopup}
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/"
                      id="tooltip112445449"
                      tag={Link}
                      //target="_blank"
                    >
                      <i className="fa fa-question-circle" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Questions
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Any Questions?
                    </UncontrolledTooltip>
                    
                  </NavItem>
                  <div style={{display: 'flex', alignItems:'left'}}>
                    <AuthSys/>
                  </div>
                  
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
