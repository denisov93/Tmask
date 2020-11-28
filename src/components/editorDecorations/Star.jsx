import React from 'react';
import { Path } from 'react-konva';
import Shape from 'components/editorDecorations/Shape.jsx';

class Star extends Shape {

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
            x={300}
            y={300}
            scaling={true}
            scaleX={2.2}
            scaleY={2.2}
            data={"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"}
            fill={this.state.color}
            name={name}
            onDragMove={this.onDragMove}
            onDragEnd={this.onDragEnd}
            onClick={this.handleClick}
            draggable={true}
        />)
    }
}

export default Star;