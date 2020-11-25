import React from 'react';

const colors= [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF"]

const BrushOptions = ({ value, onChange }) => {
    //<i class="fas fa-paint-brush"></i>
    return (
        <select name="" id="" onChange={onChange} defaultValue={0}>
            <option value={colors[0]}>Black</option>
            <option value={colors[1]}>White</option>
            <option value={colors[2]}>Red</option>
            <option value={colors[3]}>Green</option>
            <option value={colors[4]}>Blue</option>
        </select>
    )
}

export default BrushOptions;