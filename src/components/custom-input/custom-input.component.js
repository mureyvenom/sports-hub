import React from 'react';
import './custom-input.styles.css';

const CustomInput = ({value, handleChange, placeholder, ...otherProps}) => {
    return(
        <div>
            <input placeholder={placeholder} className='formfield' value={value} onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default CustomInput;