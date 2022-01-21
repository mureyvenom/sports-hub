import React from 'react';
import './form-box.styles.css';

const FormBox = ({children}) => {
    return(
        <div className='formbox bg-light'>
            {children}
        </div>
    )
}

export default FormBox;