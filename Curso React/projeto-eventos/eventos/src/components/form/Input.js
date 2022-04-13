// Styles
import styles from './Input.module.css'

import React, { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'


const Input = ({text, type, name, handleOnChange, placeholder, value, register, getValue, errors, ...rest}) => {

    const [visible, setVisible] = useState(errors[name] ? true : false)
    console.log(errors[name])
    useEffect(() => {
        setVisible(errors[name] ? true : false)
    }, [errors[name]?.message])

    return (
        <div className={styles.input_container}>
            <label htmlFor={name}> {text} </label>
            <input 
                {...register(name)}
                type={type} 
                id={name} 
                onChange={handleOnChange} 
                placeholder={placeholder} 
                value={value} 
                {...rest}
            />
            {visible && (   
                console.log('Tem erro'),        
                <ErrorMessage msg={errors[name]?.message}/>
            )}
        </div>
    )    
    
}

export default Input