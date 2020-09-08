import React, {useState} from 'react';
import BoxDiplay from './BoxDisplay';
import BoxForm from './BoxForm';

const Boxes = (props) => {
    const [boxes, setBoxes] = useState([
        {
            "color": "red",
            "heigth": "100",
            "style": {
                "display": "inline-block",
                "background": "red",
                "height": "100px"
            }

        }
    ])


    return (
        <div>
            <h1>Hello Boxes !</h1> 
           
            <BoxForm 
            boxes={boxes} 
            setBoxes={setBoxes}/>

            <BoxDiplay boxes={boxes}/>
        </div>
    )
}
export default Boxes;