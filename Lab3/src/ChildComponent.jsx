import {React} from 'react';

const ChildComponent = ({selectedColor, onColorChange}) => {
    return (
        <div style={{ borderTop: "2px solid #ccc", paddingTop: "10px" }}>
        <h3>Child Component</h3>
        <p>Parent’s color is: {selectedColor}</p>
        <button onClick={() => onColorChange("lightblue")}>Blue</button>
        <button onClick={() => onColorChange("lightgreen")}>Green</button>
        <button onClick={() => onColorChange("lightpink")}>Pink</button>
        </div>

    ); 
};

export default ChildComponent;