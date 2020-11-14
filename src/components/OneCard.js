import React, { Component } from 'react';
// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    Col
  } from "reactstrap";
  import PropTypes from 'prop-types'


class OneCard extends Component{
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
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    >
                    Learn more
                    </Button>
               </CardBody>
            </Card>
            <br></br> 
            </Col>
             
        )
    }
}

OneCard.propTypes = {
    card : PropTypes.object.isRequired
}

export default OneCard