import React, { Component } from 'react';
// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    //Container,
    Col,
    //Row,
    Modal
  } from "reactstrap";
  import PropTypes from 'prop-types'


class OneCard extends Component{
    state = {
        exampleModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

    render () {
        return (
            <Col lg="4">
            <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">        
                    <h6 className="text-primary text-uppercase">
                    {this.props.card.title}
                    </h6>
                    <CardImg
                    alt="..."
                    src={this.props.card.image}
                    top
                    />
                    <div>
                    <Badge color="primary" pill className="mr-1">
                        design
                    </Badge>
                    <Badge color="primary" pill className="mr-1">
                        system
                    </Badge>
                    <Badge color="primary" pill className="mr-1">
                        creative
                    </Badge>
                    </div>
                    <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={() => this.toggleModal("exampleModal")}
                    >
                    Learn more
                    </Button>
               </CardBody>
            </Card>
            <Modal
            className="modal-dialog-centered"
            isOpen={this.state.exampleModal}
            toggle={() => this.toggleModal("exampleModal")}
            >
            <div className="modal-header">
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
                <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body">
                    <img
                        width="100%"
                        alt="..."
                        src={this.props.card.image}
                        top
                    />
                    <div>
                    <p>
                        {this.props.card.description}   
                    </p>    
                    <Badge color="primary" pill className="mr-1">
                        design
                    </Badge>
                    <Badge color="primary" pill className="mr-1">
                        system
                    </Badge>
                    <Badge color="primary" pill className="mr-1">
                        creative
                    </Badge>
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
                <Button color="primary" type="button">
                Save changes
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