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

/*
  TODO:
    - better display for review
    - no need to reload to return to FacialFeatures
*/

import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import AppBase from "components/AppBase";

import doc from "assets/docs/ruler_30cm.pdf"
import oval from "assets/img/faceShape/oval.png"
import square from "assets/img/faceShape/square.png"
import round from "assets/img/faceShape/round.png"
import heart from "assets/img/faceShape/heart.png"
import oblong from "assets/img/faceShape/oblong.png"
import diamond from "assets/img/faceShape/diamond.png"
import mask1 from "assets/img/editorResources/editor_mask_cirurgical.png"
import mask2 from "assets/img/editorResources/editor_mask_cloth.png"
import mask3 from "assets/img/editorResources/editor_mask_N95.png"
import mask4 from "assets/img/editorResources/editor_mask_N95_type2.png"

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const labelStyle = {
  width: 140,
  margin: 10,
  fontSize: 18
}

const labelStyle2 = {
  width: 140,
  margin: 10,
  marginLeft: 70,
  marginRight: 70,
  fontSize: 18
}

function IconButton(props) {
  return (
    <Button
      className="my-4"
      color="primary"
      onClick={props.onClick}
    >
      <i className={props.icon} />
    </Button>
  );
}

function IconTextButton(props) {
  let text = props.pos === "right"
    ? <>{props.text}&nbsp;&nbsp;&nbsp;<i className={props.icon} /></>
    : <><i className={props.icon} />&nbsp;&nbsp;&nbsp;{props.text}</>

  return (
    <Button
      className="btn-std-case my-4 mx-3"
      color="primary"
      onClick={props.onClick}
      style={{ width: 128, }}
    >
      {text}
    </Button>
  );
}

class NewFacialFeatures extends AppBase {

  state = {
    index: 0,
    name: "",
    face: "",
    xaxis: 20,
    yaxis: 10,
    mask: "",
    layers: 1,
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  pressedSave() {
    let feature = {
      title: this.state.name,
      type: this.state.face,
      xaxis: this.state.xaxis,
      yaxis: this.state.yaxis,
      mask: this.state.mask,
      layers: this.state.layers,
    }

    this.addFeature(2, feature)
    document.location.reload()
  }

  faceButton(img, label) {
    let isSelected = label === this.state.face ? "double" : "none"

    return (
      <Button
        color="primary"
        style={{ background: "white", borderStyle: isSelected, }}
        onClick={() => this.setState({ face: label })}>
        <img src={img} alt="" />
      </Button>
    );
  }

  maskButton(img, label) {
    let isSelected = label === this.state.mask ? "double" : "none"

    return (
      <Button
        color="primary"
        style={{ background: "white", borderStyle: isSelected, marginLeft: 20, marginRight: 20, }}
        onClick={() => this.setState({ mask: label })}>
        <img src={img} alt="" style={{ width: 200, height: "auto", }} />
      </Button>
    );
  }

  renderSwitch() {
    switch (this.state.index) {
      case 0:
        return (
          <>
            <h4 className="py-4">Face Shape</h4>
            <Col>
              <Row style={rowStyle}>
                {this.faceButton(oval, "oval")}
                {this.faceButton(square, "square")}
                {this.faceButton(round, "round")}
              </Row>
              <Row style={rowStyle}>
                <p style={labelStyle}>Oval</p>
                <p style={labelStyle}>Square</p>
                <p style={labelStyle}>Round</p>
              </Row>
              <Row style={rowStyle}>
                {this.faceButton(heart, "heart")}
                {this.faceButton(oblong, "oblong")}
                {this.faceButton(diamond, "diamond")}
              </Row>
              <Row style={rowStyle}>
                <p style={labelStyle}>Heart</p>
                <p style={labelStyle}>Oblong</p>
                <p style={labelStyle}>Diamond</p>
              </Row>
            </Col>
          </>
        )
      case 1:
        return (
          <>
            <h4 className="py-4">Distances</h4>
            <Row style={rowStyle} className="row-cols-3">
              <Col>
                <p>From the nose bridge to under the chin</p>
                <FormGroup style={{ maxWidth: 190, }} className="ml-auto mr-auto">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-arrows-v" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input id="id_yaxis" type="number"
                      value={this.state.yaxis} min="1" max="25" step="0.25"
                      onChange={e => this.setState({ yaxis: e.target.value })} />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>centimetres</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col>
                <p>Between the ears across the chin</p>
                <FormGroup style={{ maxWidth: 190, }} className="ml-auto mr-auto">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-arrows-h" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input id="id_xaxis" type="number"
                      value={this.state.xaxis} min="1" max="50" step="0.25"
                      onChange={e => this.setState({ xaxis: e.target.value })} />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>centimetres</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Col>
              <Button
                className="btn-neutral btn-icon btn-std-case mt-4 mb-2"
                color="default">
                <span className="btn-inner--icon">
                  <i className="fa fa-file-pdf-o mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1">
                  <a href={doc} target="_blank" rel="noreferrer" >Print your own ruler!</a>
                </span>
              </Button>
            </Col>
          </>
        );
      case 2:
        let layersForm = this.state.mask !== ""
          ? <Row style={rowStyle} className="mt-5 mb-2">
            <h4>Number of layers:</h4>
            <FormGroup style={{ width: 75 }} className="mt-2 ml-3">
              <Input id="id_layers" type="number"
                value={this.state.layers} min="1" max="5" step="1"
                onChange={e => this.setState({ layers: e.target.value })} />
            </FormGroup>
          </Row>
          : <></>
        return (
          <>
            <h4 className="py-4">Mask Preference</h4>
            <Col>
              <Row style={rowStyle}>
                {this.maskButton(mask1, "cirurgical")}
                {this.maskButton(mask2, "cloth")}
              </Row>
              <Row style={rowStyle}>
                <p style={labelStyle2}>Cirurgical</p>
                <p style={labelStyle2}>Cloth</p>
              </Row>
              <Row style={rowStyle}>
                {this.maskButton(mask3, "N95")}
                {this.maskButton(mask4, "N95 type 2")}
              </Row>
              <Row style={rowStyle}>
                <p style={labelStyle2}>N95</p>
                <p style={labelStyle2}>N95 type 2</p>
              </Row>
            </Col>
            {layersForm}
          </>
        )
      case 3:
        let toComplete = []

        if (this.state.face === "")
          toComplete.push("face shape")
        if (this.state.mask === "")
          toComplete.push("mask preference")

        let l = this.state.layers === 1 ? "layer" : "layers"

        let block = toComplete.length === 0
          ? <div className="text-center">
            <p className="text-center">The shape of your face is <strong>{this.state.face}</strong></p>
            <p>You have <strong>{this.state.xaxis}</strong> centimetres between the ears</p>
            <p>And <strong>{this.state.yaxis}</strong> centimetres from the nose to the chin</p>
            <p>Your preferred mask is <strong>{this.state.mask}</strong> with <strong>{this.state.layers}</strong> {l}</p>
            <Row style={rowStyle} className="mt-5 mb-2">
              <h4>Save as:</h4>
              <FormGroup style={{ width: 250 }} className="mt-2 ml-3">
                <Input id="id_name" type="text" placeholder="Choose an appropriate name"
                  onChange={e => this.setState({ name: e.target.value })} />
              </FormGroup>
            </Row>
          </div>
          : <div className="text-center">
            <p>Please fill the following items to continue:</p>
            {toComplete.map((text, i) => {
              switch (text) {
                case "face shape":
                  i = 0;
                  break;
                case "mask preference":
                  i = 2;
                  break;
                default:
                  break;
              }

              return (<p style={{ cursor: "pointer", }} onClick={() => { this.setState({ index: i }); }}>
                <span style={{ color: "red", textDecoration: "underline", }}>{text}</span>
                {" "} <i className="fa fa-arrow-circle-right mr-2" />
              </p>)
            })}
          </div>

        return (
          <>
            <h4 className="py-4">Review</h4>
            {block}
          </>
        )
      default:
        return this.state.index;
    }
  }

  renderBottomButtons() {
    switch (this.state.index) {
      case 0:
        return (
          <IconTextButton text="Next" pos="right" icon="fa fa-arrow-right"
            onClick={() => { this.setState({ index: this.state.index + 1 }); }}
          />
        )
      case 3:
        return (this.state.face === "" || this.state.mask === "" || this.state.name === "")
          ? <IconTextButton text="Previous" icon="fa fa-arrow-left"
            onClick={() => { this.setState({ index: this.state.index - 1 }); }}
          />
          : <>
            <IconTextButton text="Previous" icon="fa fa-arrow-left"
              onClick={() => { this.setState({ index: this.state.index - 1 }); }}
            />
            <IconTextButton text="SAVE" icon="fa fa-floppy-o"
              onClick={() => { this.pressedSave(); }}
            />
          </>
      default:
        return (
          <>
            <IconTextButton text="Previous" icon="fa fa-arrow-left"
              onClick={() => { this.setState({ index: this.state.index - 1 }); }}
            />
            <IconTextButton text="Next" pos="right" icon="fa fa-arrow-right"
              onClick={() => { this.setState({ index: this.state.index + 1 }); }}
            />
          </>
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
              <Card className="card-profile shadow mt--450 mb-3">
                <div className="px-4">
                  <IconButton icon="fa fa-angle-left" onClick={() => document.location.reload()} />
                  <div className="text-center mt--43">
                    <h3>
                      <i className="fa fa-id-card" />{" "}New facial feature
                    </h3>
                  </div>
                  <div className="border-top text-center mt-5 mb-2">
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
