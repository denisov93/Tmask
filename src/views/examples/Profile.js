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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import AppBase from "components/AppBase";

const SESSION_ID = 'sessionID'

class Profile extends AppBase {
  state = {
    wait: true,
    id: -1,
    name: "",
    img: "",
    displaySocialButtons: false
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    let id = this.getCookie(SESSION_ID)
    if (id != null) {
      this.setState({ id: id })
    }
    this.setState({ wait: false })
  }

  componentDidUpdate() {
    this.state.id = this.getCookie(SESSION_ID)
  }

  renderSocialButtons() {
    if(this.state.displaySocialButtons){
    return (
      <div className="card-profile-actions py-4 mt-lg-0">
        <Button
          className="mr-4"
          color="info"
          href="#user"
          onClick={e => e.preventDefault()}
          size="sm"
        >
          Send Friend Request
  </Button>
        <Button
          className="float-right"
          color="default"
          href="#user"
          onClick={e => e.preventDefault()}
          size="sm"
        >
          Message
  </Button>
      </div>)
    }else{
      return(<div></div>)
    }
  }

  render() {
    if (this.state.wait)
      return (<></>)

    let user = this.getUser(this.state.id)
    let name = user.name
    let age = user.age
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

    const socialButtons = this.renderSocialButtons()

    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main" style={{userSelect: 'none'}}>
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        
                          <img style={{border: 6, borderStyle: 'solid', borderColor: 'white'}}
                            alt="..."
                            className="rounded-circle"
                            src={image}
                          />
                        
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      {socialButtons}
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center" style={{backgroundColor:"#FFFFFFAA"}}>
                        <div>
                          <span className="heading" style={{color:'#32325D'}}>12</span>
                          <span className="description" style={{color:'#32325D'}}><b>Masks</b></span>
                        </div>
                        <div>
                          <span className="heading" style={{color:'#32325D'}}>7</span>
                          <span className="description" style={{color:'#32325D'}}><b>Photos</b></span>
                        </div>
                        <div>
                          <span className="heading" style={{color:'#32325D'}}>31</span>
                          <span className="description" style={{color:'#32325D'}}><b>Comments</b></span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      <i className="ni ni-badge" />{" "}{name}{""}
                      <span className="font-weight-light">, {age}</span>
                    </h3>
                    <div>
                      <i className="ni education_hat mr-2" />
                      "I have a Motto, but it is not here."
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>{'>'} An idea would be to list masks shared and bought (Not part of the prototype)</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
