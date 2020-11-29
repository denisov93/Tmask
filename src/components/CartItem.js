import React,{Component} from 'react';
import AppBase from "components/AppBase.js";
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    Container,
    Col,
    Row,
    Modal
  } from "reactstrap";
import { Ellipsis } from 'react-bootstrap/esm/PageItem';


class CartItem extends AppBase{

     
    state = {
      amountOfItems : 1
    };
    increaseAmount = () =>{
        this.setState({
            ["amountOfItems"]: this.state["amountOfItems"]+1
          });
          console.log(this.state.amountOfItems);
        
    }
    decreaseAmount = () =>{
        if(this.state.amountOfItems>1){
            this.setState({
                ["amountOfItems"]: this.state["amountOfItems"]-1
              });
        console.log(this.state.amountOfItems);
        }
        
    }
    
   

    
    render(){
        return(


            
            <Badge style={{width:690, height:110, marginBottom:20}}>
                    <div class="row" style={{alignItems:'center'} }>
                     <div class="column" style={{marginLeft:20}}>
                         <img width="90"
                        src={this.props.image}/>
                     </div>
                     <div class="column" style={{width:150,height:30,marginLeft:10}}>
                         
                        <p style={{width:150,overflow:"hidden"}}>{this.props.name}</p>
                         
                        
                     </div>
                     <div class="column" style={{width:30,height:23,marginLeft:15}}>
                        <b style={{width:20, fontSize:"18px"}}>{this.props.price}{"€"}</b>
                     </div>
                     <div class="column" style={{width:130, height:40,marginLeft:15}}>
                        <select style={{width:"90%", height:"90%", fontSize:"15px",fontFamily:"verdana", textTransform:"uppercase"}}> 
                            <option>Profile</option>
                            <option>Profile2</option>
                        </select>
                     </div>
                     <div class="column"style={{width:130, height:42,marginLeft:15}}>
                         <div class="row" style={{alignItems:"center",marginLeft:15}}>
                         <button style={{border:"none", outline:"none"}} onClick={this.decreaseAmount}
                         ><img src={require("assets/img/icons/common/minus_icon.png").default} width="25" height="30"></img></button>
                            
                            <b style={{fontSize:"20px",marginLeft:5,marginRight:5 }}>{this.state.amountOfItems}</b> 
                            <button style={{border:"none", outline:"none"}} onClick={this.increaseAmount} height="30" width="30"
                         ><img src={require("assets/img/icons/common/plus_icon.png").default} width="25" height="30"></img></button>
                         </div>
                     </div>
                     <div class="column" style ={{height:48}}>
                         <button style={{border:"none", outline:"none"}}><img src={require("assets/img/icons/common/trash-can_icon.png").default} width="40"></img></button>
                     </div>
                    </div>
                    
                    </Badge>
                    
            
        ) 
        
    }

}
export default CartItem