import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

interface PropsLinkButton {
    to: string,
    text: string,
}

export default function LinkButton( {to, text,}:PropsLinkButton ) {

    return (
        <Link className={styles.btn} to={to}> {text} </Link>
    )
}