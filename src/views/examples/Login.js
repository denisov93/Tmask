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
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import dataService from "components/dataService.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
// eslint-disable-next-line
import AppBase from "components/AppBase.js";

function Popup() {
  const [modalOpen, setModalOpen] = React.useState(false);

  dataService.getData().subscribe(message => {
    if (message.value === 'login_failed') {
      setModalOpen(true)
    }
  });

  return (
    <>
      <Modal className='modal-dialog-centered' toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="loginPopup" style={{ userSelect: 'none' }}>
            🔐 Authentication Fail
          </h5>
        </div>
        <ModalBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            You entered invalid credentials.<br></br>
          Try one of the following test users:<br></br>
            <b>alicia</b>, <b>jonny</b>, <b>nahla</b>, <b>pedro</b><br></br>
          No password required.
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}


class Login extends AppBase {

  constructor() {
    super()

    this.state = {
      user: "",
      pass: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  handleSubmit(e) {

  }

  pressedSubmit() {
    var result = this.validateSignIn(this.state.user, this.state.pass)
    if (!result) {
      dataService.setData('login_failed')
    }
    if (result) {
      this.props.history.push("profile-page")
    }
    this.setState({})
  }

  loginAuthNetworks() {
    let SHOW = false
    if (SHOW) {
      return (<CardHeader className="bg-white pb-5">
        <div className="text-muted text-center mb-3">
          <small>Sign in with</small></div>
        <div className="btn-wrapper text-center">

          <Button
            className="btn-neutral btn-icon"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            <span className="btn-inner--icon mr-1">
              <img
                alt="..."
                src={require("assets/img/icons/common/github.svg").default}
              />
            </span>
            <span className="btn-inner--text">Github</span>
          </Button>
          <Button
            className="btn-neutral btn-icon ml-1"
            color="default"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            <span className="btn-inner--icon mr-1">
              <img
                alt="..."
                src={require("assets/img/icons/common/google.svg").default}
              />
            </span>
            <span className="btn-inner--text">Google</span>
          </Button>
        </div>
      </CardHeader>
      )
    }
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                      {this.loginAuthNetworks()}
                    <Popup />
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Sign in with credentials</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="id_account" placeholder="Username / Email" type="username" onChange={e => this.setState({ user: e.target.value })} />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="id_password"
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={e => this.setState({ pass: e.target.value })}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <br />
                          <Button //type="submit"
                            className="my-4"
                            color="primary"
                            onClick={() => { this.pressedSubmit() }}
                          >
                            SIGN IN
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="/register-page"
                        onClick={e => e.render()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
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
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
