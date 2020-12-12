import React, { Component } from 'react';

import {
    Badge,
    UncontrolledTooltip,
    NavLink,
    Container

  } from "reactstrap";
  import { Link } from "react-router-dom";
  import AppBase from "components/AppBase.js";
  import ItemDeletionButton from "components/ItemDeletionButton.js";


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
  
   
    handleChange = (e) =>{
        
        var newAmount = e.target.value
        if(newAmount<1){
           
            return;
        }
        this.setState({
            amountOfItems: newAmount
          })
          var newCart = this.getCookie('cart');
          newCart[this.state.itemID].amount = newAmount;
          this.setCookie('cart',newCart);

          this.props.func();
    }
    fixDeselect = (e)=>{
        if(e.target.value<1){
            e.target.value =1
            this.setState({
                amountOfItems: 1
              })
              var newCart = this.getCookie('cart');
              newCart[this.state.itemID].amount = 1;
              this.setCookie('cart',newCart);
    
              this.props.func();
        }
        
    }

    getFacialSelector(){
        if(this.props.facial.length==0){
            var iconDisplay = (<></>);
            var sessionID = this.getCookie("sessionID")
            if (sessionID !== null) {
                iconDisplay =(
                    <div style={{width:"10"}}>
            <NavLink
                      to="/facial-features"
                      id="tooltipff2"
                      tag={Link}
                    >
                      <i className="fa fa-question-circle" style={{color:"darkSlateBlue", fontSize:20}}/>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltipff2">
                      Add Facial Features?
                    </UncontrolledTooltip>
                    </div>
                    
                )
                
            }
            else{
                iconDisplay =(
                    <div style={{width:"10"}}>
                    <Container id="tooltipff3">
                <i className="fa fa-question-circle" style={{color:"darkSlateBlue", fontSize:20}}/>
                </Container >
                <UncontrolledTooltip delay={0} target="tooltipff3">
                Log in to Add Facial Features!
              </UncontrolledTooltip>
              </div>
                )
            }
         return(
        <div style={{transform:"translateY(35%)"}}>{iconDisplay}</div>
        )}
        return(
            <div className="row" style={{alignItems:'center'}}>
                <div style={{width:"10"}}>
            <NavLink
                      to="/facial-features"
                      id="tooltipff1"
                      tag={Link}
                    >
                      <i className="fa fa-question-circle" style={{color:"darkSlateBlue", fontSize:20}}/>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltipff1">
                      Edit Facial Features?
                    </UncontrolledTooltip>
                    </div>
             <select style={{width:"130px", height:"35px", fontSize:"15px",fontFamily:"verdana", textTransform:"uppercase",marginLeft:0}}> 
                {this.props.facial.map(
                    (face)=>(
                        <option>
                            {face.title}
                        </option>
                    )

                    
                )}
            </select>
            </div>
            )
    }
    

    
    render(){
        
       
        
        return(


            
            <Badge style={{width:760, height:150, marginBottom:25}}>
                    <div className="row" style={{alignItems:'center', width:770} }>
                     <div style={{marginLeft:20}}>
                         <img width="130"
                        src={this.props.image} alt="..."/>
                     </div>
                     <div style={{width:180,height:30,marginLeft:10}}>
                         
                        <p style={{width:180,overflow:"hidden", transform:"translateY(-50%)", fontSize:"18px"}}>{this.props.name}</p>
                        <h2 style={{transform:"translateY(-100%)", fontSize:"18px"}}>{this.props.price}{"€"}</h2>
                        
                     </div>
                     <div  style={{width:180, height:40,marginLeft:25}}>
                        {this.getFacialSelector()}
                     </div>
                     <div style={{width:10, height:30,marginLeft:20}}>
                         <input onChange={this.handleChange} onBlur={this.fixDeselect} type="number" defaultValue={this.props.amount} min="1" step="1" style={{width:40,height:30, fontSize:15}}></input>
                         </div>
                     <div style={{width:10,marginLeft:45}}>
                        <b style={{width:20, fontSize:"18px"}}>{(this.props.price * this.state.amountOfItems).toFixed(2)}{"€"}</b>
                     </div>
                     <div style={{marginLeft:70}}>
                     <ItemDeletionButton func={this.props.func} id={this.props.itemID} name={this.props.title} image={this.props.image}></ItemDeletionButton>
                     </div>
                     </div>
                    
                          
                    </Badge>
                    
            
        ) 
        
    }

}
export default CartItem