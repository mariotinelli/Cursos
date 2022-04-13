// Styles
import styles from './Navbar.module.css'

// Components
import { Link } from 'react-router-dom'

// Image
import logo from '../../img/Tinelli Eventos.png'

function Navbar(){

    return (
        <nav className={styles.navbar}>
            <Link to="/"> <img src={logo} alt="Tinelli Eventos" /> </Link>

            <ul >
                <li > <Link  to="/">Eventos</Link> </li>
                <li > <Link  to="/create_events">Criar Evento</Link> </li>
                <li > <Link  to="/myevents">Meus Eventos</Link> </li>
                <li > <Link  to="/contact">Contato</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar