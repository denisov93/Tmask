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
import MaskEditor from "components/MaskEditor.js"

// reactstrap components
import {
  // eslint-disable-next-line
  Badge,
  // eslint-disable-next-line
  Button,
  // eslint-disable-next-line
  Card,
  // eslint-disable-next-line
  CardHeader,
  // eslint-disable-next-line
  CardTitle,
  // eslint-disable-next-line
  CardBody,
  // eslint-disable-next-line
  CardImg,
  // eslint-disable-next-line
  FormGroup,
  // eslint-disable-next-line
  Input,
  // eslint-disable-next-line
  InputGroupAddon,
  // eslint-disable-next-line
  InputGroupText,
  // eslint-disable-next-line
  InputGroup,
  // eslint-disable-next-line
  Container,
  // eslint-disable-next-line
  Row,
  // eslint-disable-next-line
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { ReactComponent as TrashCan } from 'assets/svg/trash.svg';
import Accordion from 'react-bootstrap/Accordion';

const maskIndex = [
  "",
  "",
  "",
]

const btnImageStyle = {
  width: '60px',
  height: '60px',
}

const accordionStyle = {
  maxHeight: '400px',
  overflowY: 'scroll',
  overflowX: 'hidden',
}

const btnStyle = {
  borderRadius: '16px',
  paddingLeft: '19px',
  margin: '1px',
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const RAM = {
  display: 'grid',
  gridGap: '0rem',
  gridTemplateColumns: 'repeat(auto-fit,minmax(90px,1fr))',
  maxWidth: '375px',
}

const simpleLayer = {
  height: "4em",
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px #ccc dotted"
}

const btnDeleteStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

const trashStyle = {

  border: "none",
  padding: "5px 9px",

  cursor: "pointer",
  float: "right",

};

class Builder extends React.Component {
  state = {
    expanded: '',
    selectedLayer:-1,
    decorations: []
  };

  heartAdd = () => {
    this.refs.editor.handleAddHeart();
    console.log(this.refs.editor.state)
  }

  starAdd = () => {
    this.refs.editor.handleAddStar();
    console.log(this.refs.editor.state)
  }

  handleAddHeart = () => {
    this.setState({
      decorations: [...this.state.decorations, "<3"]
    })
  }

  handleAddStar = () => {
    this.setState({
      decorations: [...this.state.decorations, "*"]
    })
  }

  handleUndoDecoration = () =>{
    this.state.decorations.splice(-1,1)
    this.setState({
      decorations: this.state.decorations
    })
  }

  handleSelectedLayer = (id) => {
    //if id = -1 or doesn't exist Alert("Doesn't exist")
    this.setState({
      selectedLayer: id
    })
  }

  download = () => {
    this.refs.editor.handleExportClick()
  }

  setExpanded(panel) {
    this.setState({ expanded: panel });
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setExpanded(newExpanded ? panel : false);
  };

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
              <br></br>

              <Row>


                <Col id="leftComponent" className="col-3">

                  <Col >

                    <Card className="card shadow" style={{ height: "800px" }}>

                      <Accordion defaultActiveKey="0">

                        <Accordion.Toggle as={CardHeader} eventKey="0">
                          {" "}<i class="fa fa-shield"></i> Masks
                          </Accordion.Toggle>
                        <Accordion.Collapse style={accordionStyle} eventKey="0">
                          <div style={RAM}>
                            <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { this.handleAddHeart() }}
                            >
                              Add Heart
                              </Button>

                            <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { this.handleUndoDecoration() }}
                            >
                              Delete Heart
                              </Button>
                            <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { this.heartAdd() }}
                            >
                              Add Heart
                              </Button>

                            <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { this.heartAdd() }}
                            >
                              Add Heart
                              </Button>

                            <Button
                              color="primary"
                              style={btnStyle}
                              onClick={() => { this.heartAdd() }}
                            >
                              Add Heart
                              </Button>

                          </div>
                        </Accordion.Collapse>

                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="1">
                            <i class="fa fa-cubes"></i> Materials
                            </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <div style={RAM}>
                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="2">
                            <i class="fa fa-image"></i> Images
                            </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <div style={RAM}>
                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="3">
                            <i class="fa fa-paint-brush"></i> Colors
                            </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <div style={RAM}>
                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={CardHeader} eventKey="4">
                            <i class="fa fa-star"></i> Decorations
                            </Accordion.Toggle>
                          <Accordion.Collapse eventKey="4">
                            <div style={RAM}>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddHeart() }}>
                              <img src={require("assets/img/masks/goku.png").default} style={btnImageStyle} alt="Heart" onClick={this.myfunction} />
                              </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.handleAddStar() }}
                              >
                                Add Star
                                </Button>

                              <Button
                                color="primary"
                                style={btnStyle}
                                onClick={() => { this.heartAdd() }}
                              >
                                Add Heart
                                </Button>

                            </div>
                          </Accordion.Collapse>
                        </Card>

                      </Accordion>
                    </Card>
                  </Col>

                </Col>

                <Col id="middleComponent" className="col-6" >
                  <Card id="editor" className="card shadow" style={{ height: "800px" }}>

                    <MaskEditor decorations={this.state.decorations} ref="editor" />

                  </Card>
                </Col>


                <Col id="rightComponent" className="col-3">
                  <Col >
                    <Card className="card shadow" style={{ height: "800px" }}>

                      {this.state.decorations.map((el, index) =>
                        (<div style={simpleLayer} key={index} onClick={""}>
                          <span >
                            {`Layer ${index + 1}`}
                          </span>
                          <span style={trashStyle}>
                            {<TrashCan onClick={() => { 
                              this.handleUndoDecoration()
                              this.forceUpdate()
                              }}/>}
                          </span>
                        </div>)
                      )}

                    </Card>
                  </Col>

                </Col>

              </Row>
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
        </main>

        <CardsFooter />
      </>
    );
  }
}

export default Builder;

