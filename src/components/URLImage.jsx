import React, { Component } from 'react';
import { Image } from 'react-konva';

class URLImage extends Component {
    state = {
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
        console.log("Pressed an image")
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
            image: this.image
        });
        // if you keep same image object during source updates
        // you will have to update layer manually:
        this.imageNode.getLayer().batchDraw();
    };
    render() {
        const { x, y } = this.props;
        return (
            <Image
                x={x}
                y={y}
                image={this.state.image}
                ref={node => {
                    this.imageNode = node;
                }}
                draggable={true}
                scaling={true}
                draggable={true}
                opacity={this.state.opacity}
                onClick={this.handleClick}
            />
        );
    }
}

export default URLImage;