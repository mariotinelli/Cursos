// Styles
import styles from './Button.module.css'

function Button( { text, color, handleOnClick } ){

    return (
        <div>
            <button onClick={handleOnClick} className={`${styles.btn} ${styles[color]}`}> {text} </button>
        </div>
    )
}

export default Button