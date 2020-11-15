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
//import OneCard from "components/OneCard.js";
import Cards from "components/Cards.js";
// reactstrap components
import {
 //Badge,
  Button,
  /* Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,*/
  Container,
  Row,
 // Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
//import Download from "../IndexSections/Download.js";



const cards2 = [
  {
    id : 1,
    title: "Goku Mask",
    image: require("assets/img/masks/goku.png").default,
    description: "This Mask is perfect for someone who loves anime",
    selected: false
  },
  {
    id : 2,
    title: "Abstract Blue",
    image: require("assets/img/masks/mask_abstract_blue.png").default,
    description: "Made with love",
    selected: false
  },
  {
    id : 3,
    title: "Abstract Green",
    image: require("assets/img/masks/mask_abstract_green.png").default,
    description: "You Are Free Spirited",
    selected: true
  },
  {
    id : 4,
    title: "Abstract Red",
    image: require("assets/img/masks/mask_abstract_red.png").default,
    description: "Made with Passion",
    selected: true
  },
  {
    id : 5,
    title: "Simple Pink",
    image: require("assets/img/masks/mask_simple_pink.png").default,
    description: "Girly Mask",
    selected: true
  },
  {
    id : 6,
    title: "The Mask",
    image: require("assets/img/masks/mask_tmask.png").default,
    description: "Great Product, Such WOW",
    selected: true
  }
]

const cards = [
  {
    id : 1,
    title: "Fire",
    image: require("assets/img/masks/fire.png").default,
    description: "Things Are On Fire",
    selected: false
  },
  {
    id : 2,
    title: "Fire 2",
    image: require("assets/img/masks/mask_fire.png").default,
    description: "Because Fire is Never enought",
    selected: false
  },
  {
    id : 3,
    title: "Artist",
    image: require("assets/img/masks/mask_bob_ross.png").default,
    description: "Big Man, loved his show",
    selected: true
  },
  {
    id : 4,
    title: "The Whale",
    image: require("assets/img/masks/mask_whale.png").default,
    description: "Some People paint bunny in their clotes, meawhile i....",
    selected: true
  },
  {
    id : 5,
    title: "Matrix",
    image: require("assets/img/masks/mask_matrix.png").default,
    description: "Keanu Our GOD",
    selected: true
  },
  {
    id : 6,
    title: "Triangle",
    image: require("assets/img/masks/mask_triangle.png").default,
    description: "Yes, it is triangle... Dont ask...",
    selected: true
  }
]

class Catalog extends React.Component {

  state = {
    flag: false
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const flag =  this.state.flag;
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
              <Container>
              <Button 
              color="secondary" 
              type="button"
              onClick={() =>{this.setState({flag: false});}}
              >
                Made By TMask Team
              </Button>
              <Button 
              color="secondary" 
              type="button"
              onClick={() =>{this.setState({flag: true});}}
              >
                Made By Customers
              </Button>

                { flag &&
                  <Row className="row-grid align-items-center my-md">
                      <Cards cards={ cards }/>
                  </Row>
                }
                { !flag &&
                  <Row className="row-grid align-items-center my-md">
                      <Cards cards={ cards2 }/>
                  </Row>
                }
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
          
          
          
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Catalog;
