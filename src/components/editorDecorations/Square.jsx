import React from 'react';
import { Path } from 'react-konva';
import Shape from 'components/editorDecorations/Shape.jsx';

class Square extends Shape {

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

    render() {
        const { name } = this.props;
        return (<Path 
            x={75}
            y={75}
            scaling={true}
            scaleX={0.1}
            scaleY={0.1}
            data={"M 500.75,0.75 C 500.75,0.75 500.75,500.75 500.75,500.75 500.75,500.75 0.75,500.75 0.75,500.75 0.75,500.75 0.75,0.75 0.75,0.75 0.75,0.75 500.75,0.75 500.75,0.75 Z M 500.00,0.00 C 500.00,0.00 500.00,500.00 500.00,500.00 500.00,500.00 0.00,500.00 0.00,500.00 0.00,500.00 0.00,0.00 0.00,0.00 0.00,0.00 500.00,0.00 500.00,0.00 Z M 501.00,-1.00 C 501.00,-1.00 501.00,501.00 501.00,501.00 501.00,501.00 -1.00,501.00 -1.00,501.00 -1.00,501.00 -1.00,-1.00 -1.00,-1.00 -1.00,-1.00 501.00,-1.00 501.00,-1.00 Z"}
            fill={this.state.color}
            name={name}
            onDragMove={this.onDragMove}
            onDragEnd={this.onDragEnd}
            onClick={this.handleClick}
            draggable={true}
        />)
    }
}

export default Square;