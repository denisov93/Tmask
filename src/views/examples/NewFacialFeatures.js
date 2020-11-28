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
//import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import AppBase from "components/AppBase";

import doc from "assets/docs/measuring_tool.pdf"
import oval from "assets/img/faceType/oval.png"
import square from "assets/img/faceType/square.png"
import round from "assets/img/faceType/round.png"
import heart from "assets/img/faceType/heart.png"
import oblong from "assets/img/faceType/oblong.png"
import diamond from "assets/img/faceType/diamond.png"
import Col from "reactstrap/lib/Col";

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const legendStyle = {
  width: 140,
  margin: 10,
  fontSize: 18
}

function BottomButton(props) {
  return (
    <Button
      className="my-4 btn-std-case"
      color="primary"
      onClick={props.onClick}
      style={{ width: 105 }}
    >
      {props.text}
    </Button>
  );
}

class NewFacialFeatures extends AppBase {

  state = {
    index: 0,
    face: "",
    xaxis: 0,
    yaxis: 0,
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  faceButton(img, i) {
    let isSelected = i === this.state.face ? "double" : "none"

    return (
      <Button
        color="primary"
        style={{ background: "white", borderStyle: isSelected, }}
        onClick={() => this.setState({ face: i })}>
        <img src={img} alt="" />
      </Button>
    );
  }

  renderSwitch() {
    switch (this.state.index) {
      case 0:
        return (
          <div>
            <h4 className="py-5">Face Shape</h4>
            <Col>
              <Row style={rowStyle}>
                {this.faceButton(oval, "oval")}
                {this.faceButton(square, "square")}
                {this.faceButton(round, "round")}
              </Row>
              <Row style={rowStyle}>
                <p style={legendStyle}>Oval</p>
                <p style={legendStyle}>Square</p>
                <p style={legendStyle}>Round</p>
              </Row>
              <Row style={rowStyle}>
                {this.faceButton(heart, "heart")}
                {this.faceButton(oblong, "oblong")}
                {this.faceButton(diamond, "diamond")}
              </Row>
              <Row style={rowStyle}>
                <p style={legendStyle}>Heart</p>
                <p style={legendStyle}>Oblong</p>
                <p style={legendStyle}>Diamond</p>
              </Row>
            </Col>
          </div>
        )
      case 1:
        return (
          <div>
            <h4 className="py-5">Distances</h4>
            <Col>
              <Row style={rowStyle} className="row-cols-3">
                <p style={{ marginRight: 16, marginBottom: 10, }}>From the nose bridge to under the chin</p>
                <p style={{ marginLeft: 16, marginBottom: 10, }}>Between the ears across the chin</p>
              </Row>
              <Row style={rowStyle} className="row-cols-3 margin-b">
                <FormGroup className="mb-3 margin-r">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-arrows-v" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input id="id_xaxis"
                      type="number" value={this.state.xaxis} min="1" max="25" step="0.25"
                      onChange={e => this.setState({ xaxis: e.target.value })} />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>centimeters</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3 margin-l">
                <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-arrows-h" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input id="id_yaxis" placeholder="Between the ears across the chin"
                      type="number" value={this.state.yaxis} min="1" max="50" step="0.25"
                      onChange={e => this.setState({ yaxis: e.target.value })} />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>centimeters</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Row>
              <Button
                className="btn-neutral btn-icon btn-std-case"
                color="default">
                <span className="btn-inner--icon">
                  <i className="fa fa-file-pdf-o mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1">
                  <a href={doc} target="_blank" rel="noreferrer" >Get out measurement tool!</a>
                </span>
              </Button>
            </Col>
          </div>
        );
      default:
        return this.state.index;
    }
  }

  renderBottomButtons() {
    switch (this.state.index) {
      case 0:
        return (
          <BottomButton text="Next"
            onClick={() => { this.setState({ index: this.state.index + 1 }); }}
          />
        )
      case 5: //TODO: last index
        return (
          <div>
            <BottomButton text="Previous"
              onClick={() => { this.setState({ index: this.state.index - 1 }); }}
            />
            <BottomButton text="SAVE"
              onClick={() => { this.pressedSubmit(); }}
            />
          </div>
        )
      default:
        return (
          <div>
            <BottomButton text="Previous"
              onClick={() => { this.setState({ index: this.state.index - 1 }); }}
            />
            <BottomButton text="Next"
              onClick={() => { this.setState({ index: this.state.index + 1 }); }}
            />
          </div>
        )
    }
  }

  render() {
    console.log("xaxis", this.state.xaxis)
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
              <Card className="card-profile shadow mt--450">
                <div className="px-4">
                  <div className="text-center mt-5">
                    <h3>
                      <i className="fa fa-id-card" />{" "}New facial feature
                    </h3>
                  </div>
                  <div className="mt-5 border-top text-center">
                    <Form role="form" onSubmit={this.handleSubmit}>
                      {this.renderSwitch()}
                      {this.renderBottomButtons()}
                    </Form>
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

export default NewFacialFeatures;
