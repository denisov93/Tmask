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
 Form,
  Button,
  //Card,
  //CardBody,
  //CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
// index page sections
//import Download from "../IndexSections/Download.js";

import AppBase from "components/AppBase.js";

const titleStyle = {
  fontSize: "36px",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "underline",
  textTransform: "uppercase"
}

const styleButton = {
  minWidth: 210, 
  maxHeight: 43,
}

const styleButtonSelected = {
  minWidth: 210, 
  maxHeight: 43,
  color: "#879bf4", 
}

const cards2 = [
  {
    id : 1,
    title: "Goku Mask",
    image: require("assets/img/masks/goku.png").default,
    description: "This Mask is perfect for someone who loves anime",
    tags: ["TVShow","Anime","Goku","DDZ","Blue"],
    price: 4.99,
    amount:1
  },
  {
    id : 2,
    title: "Abstract Blue",
    image: require("assets/img/masks/mask_abstract_blue.png").default,
    description: "Made with love",
    tags: ["Abstract","Blue"],
    price: 4.99,
    amount:1
  },
  {
    id : 3,
    title: "Abstract Green",
    image: require("assets/img/masks/mask_abstract_green.png").default,
    description: "You Are Free Spirited",
    tags: ["Abstract","Green"],
    price: 4.99,
    amount:1
  },
  {
    id : 4,
    title: "Abstract Red",
    image: require("assets/img/masks/mask_abstract_red.png").default,
    description: "Made with Passion",
    tags: ["Abstract","Red"],
    price: 4.99,
    amount:1
  },
  {
    id : 5,
    title: "Simple Pink",
    image: require("assets/img/masks/mask_simple_pink.png").default,
    description: "Girly Mask",
    tags: ["Simple","Pink"],
    price: 4.99,
    amount:1
  },
  {
    id : 6,
    title: "The Mask",
    image: require("assets/img/masks/mask_tmask.png").default,
    description: "Great Product, Such WOW",
    tags: ["TMASK","Black","Grey"],
    price: 4.99,
    amount:1
  }
]

const cards = [
  {
    id : 1,
    title: "Fire",
    image: require("assets/img/masks/fire.png").default,
    description: "Things Are On Fire",
    tags: ["Fire","Red","Black"],
    price: 5,
    amount:1
  },
  {
    id : 2,
    title: "Fire 2",
    image: require("assets/img/masks/mask_fire.png").default,
    description: "Because Fire is Never enought",
    tags: ["Fire","Red","Black"],
    price: 5,
    amount:1
  },
  {
    id : 3,
    title: "Artist",
    image: require("assets/img/masks/mask_bob_ross.png").default,
    description: "Big Man, loved his show",
    tags: ["Bob","Ross","Painting","Nature","Blue"],
    price: 5,
    amount:1
  },
  {
    id : 4,
    title: "The Whale",
    image: require("assets/img/masks/mask_whale.png").default,
    description: "Some People paint bunny in their clotes, meawhile i....",
    tags: ["Whale","Ocean","Blue","Nature"],
    price: 5,
    amount:1
  },
  {
    id : 5,
    title: "Matrix",
    image: require("assets/img/masks/mask_matrix.png").default,
    description: "Keanu Our GOD",
    tags: ["Matrix","WB","Keanu Reeves","Black","Green","Sci-fi","Action"],
    price: 5,
    amount:1
  },
  {
    id : 6,
    title: "Triangle",
    image: require("assets/img/masks/mask_triangle.png").default,
    description: "Yes, it is triangle... Dont ask...",
    tags: ["Geometric","Triangle","White","Black"],
    price: 5,
    amount:1
  }
]

class Catalog extends AppBase {

  state = {
    allcards: cards2,
    cards: cards,
    cards2: cards2,
    masksFilter:'',
    flag: false
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    var addedMasks = this.getCookie('addedMasks')
   
    if(addedMasks !== null){
      if(addedMasks !== []){
      var newCards = this.state.cards.concat(addedMasks)
    
      //console.log(newCards)
        this.setState({
          cards : newCards
        })
      
    }
    }

  }


  filterExec = () =>{
    var filtered = this.state.cards2
    
    let keyw = this.state.masksFilter
    var res = []
    filtered = filtered.concat(this.state.cards).map(
      (ml)=>{
       
        if(!res.includes(ml)){
          let values = ml.tags 
          values.push(ml.title) 
          
          values = values.map(
            (a)=>{ 
              if(!res.includes(ml)){              
                let peq = a.trim().toUpperCase()            
                if(peq === keyw.toUpperCase()){
                  res.push(ml)
                }else if(ml.title.trim().toUpperCase() === keyw.toUpperCase()){
                  res.push(ml)
                }
              }
            }
          )
        }
      }
    )
    if(res.length > 0){
      this.setState({
        allcards : res
      })
    }else{
      this.setState({
        allcards : cards2
      })
    }
  }

  handleChange = (e) =>{
    this.setState({
      masksFilter: e.target.value
    },()=>{this.filterExec()})
  }

  
  handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      e.preventDefault() 
    }
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
              <Container>
              <div style={{display: 'flex', flexDirection: 'row'}}>
              <Button style={this.state.flag? styleButton : styleButtonSelected} 
              color="secondary" 
              type="button"
              onClick={() =>{this.setState({
                allcards: this.state.cards2,
                flag: false
              });}}
              >
                Made By TMask Team
              </Button>
              <Button style={!this.state.flag? styleButton : styleButtonSelected} 
              color="secondary" 
              type="button"
              onClick={() =>{this.setState({
                allcards: this.state.cards,
                flag: true
              });}}
              >
               Made By Customers
              </Button>
              <div >
              <Form style={{position: 'absolute', minWidth: 300, width: 320, maxWidth: 320, top:0, right:15}}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                      className="form-control-alternative"
                      placeholder="Search"
                      type="text"
                      id="filter" 
                      value={this.state.masksFilter} 
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress}
                    />
                  </InputGroup>
                </FormGroup>
              </Form>
              </div>
              </div>
                  <br></br>
                  <br></br>
                    <div style={titleStyle} >
                      {this.state.masksFilter !== "" && "Search Results:"}
                      {this.state.masksFilter === "" && !this.state.flag && "Made By TMask Team"}
                      {this.state.masksFilter === "" && this.state.flag &&  "Made By Our Customers"}
                    </div>
                  <Row className="row-grid align-items-center mt-4 mb-md">
                      <Cards cards={ this.state.allcards }/>
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
            {/* 1st Hero Variation */}
          </div>
          
          
          
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Catalog;
