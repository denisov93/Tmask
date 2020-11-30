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
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import AppBase from "components/AppBase";

const SESSION_ID = 'sessionID'

function BigButton(props) {
  return (
    <Button
      className="btn-neutral btn-icon btn-std-case"
      onClick={props.onClick}
      color="default"
      to={props.route}
      tag={Link}
    >
      <Row style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
        className="dropdown-menu-lg ">
        <span className="btn-inner--icon">
          <i className={props.icon} />
        </span>
        <h6 className="mt-2 ml-2">
          {props.text}
        </h6>
      </Row>
    </Button>
  );
}

function SmallButton(props) {
  return (
    <Button
      className="btn-neutral btn-icon btn-sm"
      onClick={props.onClick}
      color="default"
    >
      <span className="fs-11">
        <i className={props.icon} />
      </span>
    </Button>
  );
}

function FeatureItem(props) {
  return (
    <Row style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h5 className="mt-2 mr-3">
        {props.item.title}
      </h5>
      <SmallButton icon="fa fa-pencil" />
      <SmallButton icon="fa fa-files-o" />
      <SmallButton icon="fa fa-times" />
    </Row>
  );
}

class FacialFeatures extends AppBase {

  state = {
    features: []
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    let id = this.getCookie(SESSION_ID)
    if (id != null) {
      let newFeatures = this.getSessionFeatures()
      if (newFeatures != null)
        this.setState({ features: newFeatures })
    }
  }

  generateComponent() {
    let col =
      <Col>
        <BigButton icon="fa fa-plus" text="Create a new facial feature" route="/facial-features/new" />
      </Col>

    if (this.state.features.length > 0) {
      return (
        <Row>
          <Col>
            {this.state.features.map((feature, i) => {
              return (<FeatureItem key={i} item={feature} />)
            })}
          </Col>
          {col}
        </Row>
      )
    } else {
      return (
        col
      )
    }
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="/facial-features" ref="main">
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
                  <div className="text-center mt-5">
                    <h3>
                      <i className="fa fa-id-card" />{" "}Facial Features
                    </h3>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    {this.generateComponent()}
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

export default FacialFeatures;
