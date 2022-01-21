import React from 'react';
import './form-label-box.styles.css';

const FormLabelBox = ({children}) => {
    return(
        <div className='form-label-box'>
            {children}
        </div>
    )
}

export default FormLabelBox;