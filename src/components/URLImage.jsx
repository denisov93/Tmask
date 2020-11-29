import React, { Component } from 'react';
import { Image } from 'react-konva';
import PropTypes from 'prop-types';

class URLImage extends Component {
    state = {
        canChange: this.props.canChange,
        canDrag: true,
        image: null,
        opacity: 0.7,
        opacitySwitch: true
    };
    componentDidMount() {
        this.loadImage();
    }
    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }
    componentWillUnmount() {
        this.image.removeEventListener('load', this.handleLoad);
    }
    handleClick = () => {
        if(this.state.canChange){
            if(this.state.opacitySwitch){
                this.setState({
                    opacitySwitch: false,
                    opacity: 1
                });
            }else{
                this.setState({
                    opacitySwitch: true,
                    opacity: 0.7
                });
            }
        }
    };
    loadImage() {
        // save to "this" to remove "load" handler on unmount
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
    }
    handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setState({
            image: this.image,
            isChangable: this.props.canChange,
            canDrag: this.props.canDrag,
            opacity: this.props.opacity,
            opacitySwitch: this.props.opacitySwitch
        });
        // if you keep same image object during source updates
        // you will have to update layer manually:
        this.imageNode.getLayer().batchDraw();
    };
    render() {
        const { x, y, name } = this.props;
        
        return (
            <Image 
                name={name}
                x={x}
                y={y}
                image={this.state.image}
                ref={node => {
                    this.imageNode = node;
                }}
                scaling={true}
                draggable={this.state.canDrag}
                opacity={this.state.opacity}
                onClick={this.handleClick}
            />
        );
    }
}

URLImage.propTypes ={
    canChange : PropTypes.bool.isRequired,
    canDrag: PropTypes.bool.isRequired,
    opacity: PropTypes.number.isRequired,
    opacitySwitch: PropTypes.bool.isRequired
  }

export default URLImage;