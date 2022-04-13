// Styles
import styles from './TextArea.module.css'

import React from 'react'

const TextArea = React.forwardRef(({ text, name, handleOnChange, placeholder, cols, rows, value }, ref) => (


    <div className={styles.textarea_container}>
        <label htmlFor={name}> {text} </label>
        <textarea ref={ref} name={name} id={name} cols={cols} rows={rows} placeholder={placeholder} onChange={handleOnChange} value={value}> </textarea>
    </div>
    
))

export default TextArea