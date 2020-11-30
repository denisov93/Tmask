import React from 'react';
import AppBase from "components/AppBase.js";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    //Container,
    Col,
    // eslint-disable-next-line
    CardHeader,
    //Row,
    Modal
  } from "reactstrap";
  import PropTypes from 'prop-types'

class ItemDeletionButton extends AppBase{
 state={
     id:-1
 }
 componentDidMount() {
     this.setState({
         id: this.props.id
     })
 }
 removeThisItem = ()=>{
     console.log(this.state.id)
     var thisId = this.state.id
     
     var cart = this.getCookie('cart')
     cart.splice(thisId,1);
     this.setCookie('cart',cart)
     window.location.reload(false)
 }

 render(){
     return(
        <Badge ><button onClick={this.removeThisItem} style={{border:"none", outline:"none"}}><img src={require("assets/img/icons/common/trash-can_icon.png").default} alt="..." width="40"></img></button>
        </Badge>
     )
 }

}
export default ItemDeletionButton