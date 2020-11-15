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
// nodejs library that concatenates classes
//import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  /*FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,*/
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
//import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white">
                        Because Your Masks{" "}
                        <span>don't need to be boring.</span>
                      </h1>
                      <p className="lead text-white">
                      Most of the masks available do not match our day-to-day clothes or maybe we just need a mask that fits well with a formal attire.
                      Another relevant aspect that is lacking is the option to make the masks our own, that is, to express ourselves. 
                      Whether from adding a single word or phrase to create a work of art.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="/catalog"
                        >
                          <span className="btn-inner--icon mr-1">
                            <img alt=".." className="text-white" src={require("assets/img/icons/common/head-side-mask-solid.svg").default}/>
                          </span>
                          <span className="btn-inner--text">view mask Catalog</span>
                        </Button>
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="/builder"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-palette" />
                          </span>
                          <span className="btn-inner--text"> Go to Builder</span>
                        </Button>
                      </div>
                    </Col>
                    
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          
                          <h6 className="text-primary text-uppercase">
                            Show up to Friends
                          </h6>
                          <CardImg
                            alt="..."
                            src={require("assets/img/masks/goku.png").default}
                            top
                          />
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              blue
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              anime
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              tvshow
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/catalog"
                            onClick={e => e.preventDefault()}
                          >
                            view more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          
                          <h6 className="text-success text-uppercase">
                            Build Something Yourself
                          </h6>
                          <CardImg
                            alt="..."
                            src={require("assets/img/masks/whale.png").default}
                            top
                          />
                          <div>
                            <Badge color="success" pill className="mr-1">
                              ocean
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              white
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              blue
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="/catalog"
                            onClick={e => e.preventDefault()}
                          >
                            view more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          
                          <h6 className="text-warning text-uppercase">
                            Be Fairy!
                          </h6>
                          <CardImg
                            alt="..."
                            src={require("assets/img/masks/fire.png").default}
                            top
                          />
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              fire
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              black
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="/catalog"
                            onClick={e => e.preventDefault()}
                          >
                            view more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="8">
                <iframe title="Intentionally blank" aria-hidden="true" id="ytplayer" type="text/html" width="640" height="360"
                  src="http://www.youtube.com/embed/oBYRBx43eR0?autoplay=1&loop=1&controls=0&showinfo=0"
                  frameborder="0"/>
                </Col>
                <Col className="order-md-1" md="4">
                  <div className="pr-md-5">
                    <h3>Awesome Mask Editor</h3>
                    <p>
                      Make your own mask designs, your choices, decorate your mask with text and stickers.
                    </p>
                    <p>
                      Be unique!
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-image" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Import your own images
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="danger"
                            >
                              <i className="ni ni-app" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">You choose mask type</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >
                              <i className="ni ni-cloud-upload-96" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Share your creations 
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0">
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
      
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
