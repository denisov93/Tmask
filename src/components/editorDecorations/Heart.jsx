import React from 'react';
import { Path } from 'react-konva';
import Shape from 'components/editorDecorations/Shape.jsx';

class Heart extends Shape {

    handleClick = (e) => {
        var color = this.getCookie("editorPickedColor")
        this.setState({
            color: color
        });
    };
    
    onDragMove = (e) => {

    }

    onDragEnd = (e) => {
        
    }

    handleColorChange(color){
        this.setState({
            color: color
        });
    }

    render() {
        const { name } = this.props;
        return (<Path
            x={75}
            y={75}
            scaling={true}
            scaleX={2}
            scaleY={2}
            data={"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"}
            fill={this.state.color}
            name={name}
            onDragMove={this.onDragMove}
            onDragEnd={this.onDragEnd}
            onClick={this.handleClick}
            draggable={true}
        />)
    }
}

export default Heart;