import React, { Component } from "react";
import { Image } from "react-konva";

import PropTypes from 'prop-types';

class Drawing extends Component {
    state = {
        isDrawing: false,
        canDraw: true,
        clearDraw:false,
    };

    componentDidMount() {
        const canvas = document.createElement("canvas");
        canvas.width = this.props.width;
        canvas.height = this.props.height;
        console.log("Canvas Created["+ this.props.width + "w," + this.props.height+"h]")
        const context = canvas.getContext("2d");
        this.setState({ canvas, context });
        this.setState({ canDraw: this.props.canDraw });
        
        this.setState({ clearDraw: this.props.clearDraw});

        canvas.oncontextmenu = function (e) {
            e.preventDefault(); //disable right click
        };

        document.addEventListener("deleteDrawing", this.deleteDraw);  
    }

    componentDidUpdate(){
        if(this.props.clearDraw){
            this.deleteDraw()
        }
    }

    handleMouseDown = () => {
        this.setState({ isDrawing: true });
        const stage = this.image.getStage();
        this.lastPointerPosition = stage.getPointerPosition();
    };

    handleMouseUp = () => {
        this.setState({ isDrawing: false });
    };

    deleteDraw = () => {
        this.image.getLayer().clear()
    }

    handleMouseMove = (e, color) => {
        let evt = e.evt;
        const { context, isDrawing, canDraw } = this.state;
        //console.log(evt)
        if (isDrawing && canDraw) {
            context.strokeStyle = color;
            context.lineJoin = "round";
            context.lineWidth = 5;

            if (evt.buttons === 1) {
                // draw
               // console.log(evt.buttons === 1)
                context.globalCompositeOperation = "source-over";
            } else if (evt.buttons === 2) {
               // console.log(evt.buttons, evt, evt.buttons === 2)
                // erase
                context.globalCompositeOperation = "destination-out";
            }
            context.beginPath();

            var localPos = {
                x: this.lastPointerPosition.x - this.image.x(),
                y: this.lastPointerPosition.y - this.image.y()
            };
            context.moveTo(localPos.x, localPos.y);

            const stage = this.image.getStage();

            var pos = stage.getPointerPosition();
            localPos = {
                x: pos.x - this.image.x(),
                y: pos.y - this.image.y()
            };
            context.lineTo(localPos.x, localPos.y);
            context.closePath();
            context.stroke();
            this.lastPointerPosition = pos;
            this.image.getLayer().draw();
        }
    };

    render() {
        const { canvas } = this.state;
        const { x, y, color, width, height } = this.props;
        
        return (
            <Image
                image={canvas}
                ref={node => (this.image = node)}
                width={width}
                height={height}
                x={x}
                y={y}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseMove={(e) => this.handleMouseMove(e, color)}
            />
        );
    }
}

Drawing.propTypes={
    clearDraw: PropTypes.bool.isRequired
}

export default Drawing;