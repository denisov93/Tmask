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
import CartItem from 'components/CartItem'

// reactstrap components
import {
  Badge,
  Button,
  Modal,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import AppBase from "components/AppBase.js";
import ItemDeletionButton from "components/ItemDeletionButton.js";


class Cart extends AppBase {
  state = {
    itemList: [],
    facialFeatures: [],
    finalCost: 0,
    confirmPopup: false,
    successPopup: false
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;


    var sessionID = this.getCookie('sessionID')

    this.updateState();
    if (sessionID != null) {
      var newFeatures = this.getFeatures(sessionID)
      if (newFeatures != null)
        this.setState({
          facialFeatures: newFeatures
        })
    }

  }
  hasItems() {
    return (this.state.itemList.length > 0)
  }

  cartHeader() {
    if (this.hasItems())
      return (
        <h2 style={{ marginLeft: "15%", marginBottom: 30, color: "white" }}>Your Cart:</h2>
      )
    else return (
      <>
        <h2 style={{ textAlign: "center", marginBottom: 30, color: "white" }}>Your Cart Is Empty!</h2>
        <div className="row" style={{ alignItems: "center" }}>
          <Button style={{ marginLeft: "33%" }}
            className="btn-icon mb-3 mb-sm-0"
            color="info"
            to="/catalog"
            tag={Link}
          >
            <span className="btn-inner--icon mr-1">
              <img alt=".." className="text-white" src={require("assets/img/icons/common/head-side-mask-solid.svg").default} />
            </span>
            <span className="btn-inner--text">view mask Catalog</span>
          </Button>
          <b style={{ marginRight: 10 }}>OR</b>
          <Button
            className="btn-icon mb-3 mb-sm-0"
            color="info"
            to="/builder"
            tag={Link}
          >
            <span className="btn-inner--icon mr-1">
              <i className="ni ni-palette" />
            </span>
            <span className="btn-inner--text"> Go to Builder</span>
          </Button>
        </div>
      </>
    )

  }


  loadCheckoutSection() {
    if (this.hasItems()) {
      return(<div>
        <Button onClick={this.toggleConfirmPopup} >Checkout: {this.state.finalCost.toFixed(2)}€</Button>
        <Modal className="modal-dialog-centered"
          isOpen={this.state.confirmPopup}>
          <Badge style={{ height: 250 }}>
            <h2>Complete purchase?</h2>
            <div style={{ marginTop: 30 }}>
              <b style={{ fontSize: 20 }}>Total: {this.state.finalCost.toFixed(2)}€</b></div>
            <div className="row" style={{ marginTop: 50 }}>
              <Button onClick={this.cartCheckout} color="primary" style={{ marginLeft: 155, height: 45 }}>PAY</Button>
              <Button onClick={this.toggleConfirmPopup} color="light" style={{ marginLeft: 50, height: 45 }}>BACK</Button>
            </div>
          </Badge>


        </Modal>
        <Modal className="modal-dialog-centered"
          isOpen={this.state.successPopup}>
          <Badge style={{ height: 200 }}>
            <h2>Purchased with success</h2>
            <div style={{ marginTop: 30 }}>
              <b style={{ fontSize: 20 }}>Total: {this.state.finalCost.toFixed(2)}€</b></div>
            <div className="row" style={{ marginTop: 50 }}>
              <Button onClick={this.emptyCart} color="primary" style={{ marginLeft: 225, height: 45 }} to={"/Tmask"} tag={Link} >OK</Button>

            </div>
          </Badge>


        </Modal>

      </div>)
    }
  }


  
  updateState=()=>{ 
        

    var newItemList = this.getCookie('cart')
    if (newItemList != null) {
      this.setState({
        itemList: newItemList
      })

      var totalPrice = 0;
      for(var i=0;i<newItemList.length;i++){
        var item=newItemList[i]
         totalPrice+= item.amount*item.price
         
     }
   
     this.setState({
       finalCost: totalPrice
     })


    }
    


  }




  
//TODO
  toggleConfirmPopup=()=>{

    this.updateState();

    this.setState({
      confirmPopup: !this.state.confirmPopup
    })
  }


  emptyCart=()=>{

    var newCart = []
    this.setCookie('cart', newCart);
  }

  cartCheckout=()=>{
    if(this.hasItems()){

      this.setState({
        confirmPopup: !this.state.confirmPopup
      })
      this.setState({
        successPopup: !this.state.successPopup
      })
    }
  }






  render() {
    var counter = 0;
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
              <div>{this.cartHeader()}</div>


              <Container className="py-lg-md d-flex">




                <div className="col px-0" >
                  <div>{
                    this.state.itemList.map(
                      (item) => (
                        <div className="row">
                          <CartItem name={item.title} func={this.updateState} image={item.image} price={item.price} itemID={counter} facial={this.state.facialFeatures} amount={item.amount} />
                          <div style={{ marginLeft: 20, marginTop: 20 }}>
                            <ItemDeletionButton id={counter++} name={item.title} image={item.image}></ItemDeletionButton>
                          </div>
                        </div>
                      )

                    )}</div>

                  <div style={{ marginTop: "20px" }}>

                    {this.loadCheckoutSection()}
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
