import React, { Component } from 'react';

import {
    Badge

  } from "reactstrap";
  import AppBase from "components/AppBase.js";


class CartItem extends AppBase{

    
    state = {
      amountOfItems : -1    ,
      itemID: -1
    };

    componentDidMount() {
        this.setState({
            itemID: this.props.itemID
        });
        this.setState({
            amountOfItems: this.props.amount
        })
    }
    
    increaseAmount = () =>{
       
        var newAmount = this.state.amountOfItems+1;
        this.setState({
            amountOfItems: newAmount
          });
          var newCart = this.getCookie('cart');
          newCart[this.state.itemID].amount = newAmount;
          this.setCookie('cart',newCart);

         
        
    }
    decreaseAmount = () =>{
        if(this.state.amountOfItems>1){
        var newAmount = this.state.amountOfItems-1;
        this.setState({
            amountOfItems: newAmount
          });
          var newCart = this.getCookie('cart');
          newCart[this.state.itemID].amount = newAmount;
          this.setCookie('cart',newCart);
        }
        
        
    }
    handleChange = (e) =>{
        var newAmount = e.target.value
        this.setState({
            amountOfItems: newAmount
          })
          var newCart = this.getCookie('cart');
          newCart[this.state.itemID].amount = newAmount;
          this.setCookie('cart',newCart);
    }
    getFacialSelector(){
        if(this.props.facial.length==0) return(<div></div>)
       console.log("FACE", this.props.facial)
        return(
             <select style={{width:"90%", height:"90%", fontSize:"15px",fontFamily:"verdana", textTransform:"uppercase"}}> 
                {this.props.facial.map(
                    (face)=>(
                        <option>
                            {face.title}
                        </option>
                    )

                    
                )}
            </select>)
    }
    

    
    render(){
        return(


            
            <Badge style={{width:620, height:110, marginBottom:20}}>
                    <div className="row" style={{alignItems:'center'} }>
                     <div style={{marginLeft:20}}>
                         <img width="90"
                        src={this.props.image} alt="..."/>
                     </div>
                     <div style={{width:150,height:30,marginLeft:10}}>
                         
                        <p style={{width:150,overflow:"hidden"}}>{this.props.name}</p>
                         
                        
                     </div>
                     <div  style={{width:30,height:23,marginLeft:15}}>
                        <b style={{width:20, fontSize:"18px"}}>{this.props.price}{"€"}</b>
                     </div>
                     <div  style={{width:160, height:40,marginLeft:15}}>
                        {this.getFacialSelector()}
                     </div>
                     <div style={{width:10, height:30,marginLeft:10}}>
                         <input onChange={this.handleChange}type="number" defaultValue={this.props.amount} min="1" step="1" style={{width:40,height:30, fontSize:15}}></input>
                         </div>
                     </div>
                    
                          
                    </Badge>
                    
            
        ) 
        
    }

}
export default CartItem