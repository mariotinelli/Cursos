// Styles
import styles from './SubmitButton.module.css'

function SubmitButton( { text, type, handleOnClick } ){

    return (
        <div>
            <button onClick={handleOnClick} className={styles.btn} type={type}> {text} </button>
        </div>
    )
}

export default SubmitButton