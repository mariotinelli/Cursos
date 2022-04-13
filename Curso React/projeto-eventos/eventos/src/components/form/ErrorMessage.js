import styles from './ErrorMessage.module.css'


function ErrorMessage( {msg} ) {

    
    return (
        <>
            <div className={styles.errorMessage}>
                <p>{msg}</p>
            </div>             
        </>      
    )
}

export default ErrorMessage