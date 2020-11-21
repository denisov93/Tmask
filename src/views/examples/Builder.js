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
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
// index page sections

class Builder extends React.Component {
  state = {  };

  heartAdd = () =>{
    this.refs.editor.handleAddHeart()
  }

  download = () =>{
    this.refs.editor.handleExportClick()
  }

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
          <Card className="card-profile shadow" style={{height:"800px"}}>

            <Button
              className="mt-4"
              color="primary"
              onClick={()=>{this.heartAdd()}}
            >
              Add Heart
            </Button>
            <br></br>
            <Button
              className="mt-4"
              color="primary"
              onClick={()=>{this.download()}}
            >
              Add Heart
            </Button>

          </Card>
          </Col>

          <Col id="middleComponent" className="col-6">
          <Card id="editor" className="card-profile shadow" style={{height:"800px"}}>
          
          <MaskEditor ref="editor"/>
          
          </Card>
          </Col>

          <Col id="rightComponent" className="col-3">
          <Card className="card shadow" style={{height:"800px"}}>
          
          </Card>
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

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);