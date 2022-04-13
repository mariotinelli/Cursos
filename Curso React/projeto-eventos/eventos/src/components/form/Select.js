// Styles
import styles from './Select.module.css'

import React from 'react'

const Select = React.forwardRef(({ text, name, handleOnChange, options, value }, ref) => (


    <div className={styles.select_container}>
        <label htmlFor={name}> {text} </label>
        <select ref={ref} name={name} id={name} onChange={handleOnChange} value={value}>
            <option> Selecione uma opção </option>
            {options.map((option) => (
                <option value={option.id} key={option.id}> {option.name} </option>
            ))}
        </select>
    </div>
  
))

export default Select