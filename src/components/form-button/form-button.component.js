import React from 'react';
import './form-button.styles.css';

const FormButton = ({title}) => {
    return(
        <div>
            <button className='form-button'>{title}</button>
        </div>
    )
}

export default FormButton;