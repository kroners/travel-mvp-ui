import { TextField } from '@material-ui/core';
import React from 'react';

const CustomInput = (props) => {

    const { id, disabled, label, className, variant = "outlined" } = props;
    return (
        <>
            <TextField disabled={disabled} id={id} label={label} className={className} variant={variant} />
        </>                  
    )
}

export default CustomInput;