import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import logo from '../../../img/logo.png'

export default function Navbar(){

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="logo" />
            <div>
                <ul>
                    <li> <Link to="/"> Eventos </Link> </li>
                    <li> <Link to="/company"> Empresa </Link> </li>
                    <li> <Link to="/contact"> Contato </Link> </li>
                </ul>                                    
            </div>
        </nav>
    )
}