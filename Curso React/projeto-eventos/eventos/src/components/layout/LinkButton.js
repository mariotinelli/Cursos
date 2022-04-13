// Styles
import styles from './LinkButton.module.css'

// Components
import {Link} from 'react-router-dom'

function LinkButton( { to, color, text, handleOnClick } ){

    return (
        <div>
            <Link to={to} onClick={handleOnClick} className={`${styles.btn} ${styles[color]}`}> {text} </Link>            
        </div>
    )
}

export default LinkButton