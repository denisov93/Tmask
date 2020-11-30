import React, { Component } from 'react';

import {
    Badge

  } from "reactstrap";
  import AppBase from "components/AppBase.js";


class CartItem extends Component{

    
    state = {
      amountOfItems : 1,
      id: this.props.id
    };
    increaseAmount = () =>{
        this.setState({
            amountOfItems: this.state["amountOfItems"]+1
          });
         
        
    }
    decreaseAmount = () =>{
        if(this.state.amountOfItems>1){
            this.setState({
                amountOfItems: this.state["amountOfItems"]-1
              });
        
        }
        
    }
  

    
    render(){
        return(


            
            <Badge style={{width:600, height:110, marginBottom:20}}>
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
                     <div  style={{width:130, height:40,marginLeft:15}}>
                        <select style={{width:"90%", height:"90%", fontSize:"15px",fontFamily:"verdana", textTransform:"uppercase"}}> 
                            <option>Profile</option>
                            <option>Profile2</option>
                        </select>
                     </div>
                     <div style={{width:130, height:42,marginLeft:15}}>
                         <div className="row" style={{alignItems:"center",marginLeft:15}}>
                         <button style={{border:"none", outline:"none"}} onClick={this.decreaseAmount}
                         ><img src={require("assets/img/icons/common/minus_icon.png").default} alt="..." width="25" height="30"></img></button>
                            
                            <b style={{fontSize:"20px",marginLeft:5,marginRight:5 }}>{this.state.amountOfItems}</b> 
                            <button style={{border:"none", outline:"none"}} onClick={this.increaseAmount} height="30" width="30"
                         ><img src={require("assets/img/icons/common/plus_icon.png").default} width="25" height="30" alt="..."></img></button>
                         </div>
                     </div>
                    
                    </div>
                    
                    </Badge>
                    
            
        ) 
        
    }

}
export default CartItem