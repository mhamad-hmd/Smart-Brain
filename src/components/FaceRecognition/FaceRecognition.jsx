import React from 'react';
import "./faceRecognition.css";



const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='flexCenter'>
            <div className='absolute mt-2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div className='boxOutline' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

            </div>
            {/* creating a div that gonna be the box aroung the face */}

            </div>
        </div>
    )
}

export default FaceRecognition