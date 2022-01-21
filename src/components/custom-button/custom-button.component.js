import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({displayText, handlePress}) => {
    return(
        <div>
            <button onClick={handlePress} className='btn1'>{displayText}</button>
        </div>
    );
}

export default CustomButton;