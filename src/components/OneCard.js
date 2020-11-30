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

class OneCard extends AppBase{
    state = {
        exampleModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

      addToCart(){
        const cc = this.props.card
        var cart = this.getCookie('cart')
        if(cart === null)
            cart = []
        cart.push(cc)
        this.setCookie('cart', cart)
        this.addItemToCart(cc)
        this.toggleModal("exampleModal")
      }

      tagLimitation(input){

        input.sort(function(a, b){
            return a.length - b.length;
          });

          var tags =[]
          for(var i=0;i<6;i++){
                tags[i] = input[i]
          }
          return tags
      }

    render () {
        return (
            <Col lg="4">
            <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">        
                    <h6 className="text-dark text-uppercase">
                    {this.props.card.title}
                    </h6>
                    <CardImg
                    alt="..."
                    src={this.props.card.image}
                    top
                    />
                    <div style={{minHeight: '48px', maxHeight: '48px', display:'flex', alignItems:'center', flexWrap: 'wrap'}}>
                        { //console.log(this.props.card.tags),
                            this.tagLimitation(this.props.card.tags).map(
                                (tag,index)=>(
                                    <Badge key={index} color="light" pill className="mr-1">
                                        {tag}
                                    </Badge>
                                )
                            )
                        }
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column',flexFlow: "row wrap",justifyContent: "space-around", alignItems: 'flex-end'}}>
                    <big>{this.props.card.price} €</big>
                    <Button
                    className="mt-4"
                    color="secondary"
                    type="button"
                    onClick={() => this.toggleModal("exampleModal")}
                    >
                    More details
                    </Button>
                    </div>
               </CardBody>
            </Card>
            <Modal
            className="modal-dialog-centered"
            isOpen={this.state.exampleModal}
            toggle={() => this.toggleModal("exampleModal")}
            >
            <div className="modal-header" as={'CardHeader'}>
                <h5 className="modal-title" id="exampleModalLabel">
                {this.props.card.title}
                </h5>
                <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("exampleModal")}
                >
                <span aria-hidden={true}><i className="fa fa-window-close"></i></span>
                </button>
            </div>
            <div className="modal-body" style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <img width="90%" height="90%" alt="" src={this.props.card.image}/>
                    </div>
                    <div style={{overflowWrap: 'break-word'}}>
                    <p>
                    📃{" "}{this.props.card.description}   
                    </p>    
                    <div style={{display: 'flex', alignContent:'flex-start', flexWrap: 'wrap'}}>
                        { 
                            this.props.card.tags.map(
                            (tag,index)=>(
                                    <Badge style={{marginBottom:3}} key={index} color="light" pill className="mr-1">
                                        {tag}
                                    </Badge>))
                        }
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("exampleModal")}
                >
                Close
                </Button>
                <Button color="primary" type="button" onClick={ ()=> this.addToCart()}>
                <i className="fa fa-shopping-cart" /> 
                {"  Add to Cart"}
                </Button>
            </div>
            </Modal>

            <br></br> 
            </Col>
             
        )
    }
}

OneCard.propTypes = {
    card : PropTypes.object.isRequired
}

export default OneCard