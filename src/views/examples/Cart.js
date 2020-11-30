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
// eslint-disable-next-line
import CartItem from 'components/CartItem'
import classnames from "classnames";

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

// index page sections
// eslint-disable-next-line
import Download from "../IndexSections/Download.js";
import dataService from "components/dataService.js";
import AppBase from "components/AppBase.js";
import ItemDeletionButton from "components/ItemDeletionButton.js";

class Cart extends AppBase {
  state = {
    itemList:[]
  };
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    
    
    var newItemList = this.getCookie('cart')
    console.log("cart is: ",newItemList)
    if(newItemList!=null){
      this.setState({
        itemList: newItemList
      })
    
      
    }
    
  }
   

  
  render() {
    var counter =-1;
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
              <h2 style={{marginLeft:"15%", marginBottom:30, color:"white"}}>Your Cart:</h2>
              
              <Container className="py-lg-md d-flex">
                
                
                
                
                <div className="col px-0" >
                <div>{
                this.state.itemList.map(
                    (item)=>(
                      <div className="row">
                      <CartItem name={item.title} image={item.image} price='5'id={counter++}/>
                      <div style = {{marginLeft:20, marginTop:20}}>
                      <ItemDeletionButton id={counter} name={item.title} image={item.image}></ItemDeletionButton>
                      </div>
                      </div>
                      )
                      
                 )}</div>
                
                <div style={{marginTop:"20px"}}>
                
                <Button >Checkout</Button>
                </div>
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
            
          </div>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Cart;
