import styles from './EventCard.module.css'

import imgCard from '../../../img/banner1.png'
import LinkButton from '../../layout/LinkButton/LinkButton'

interface IEventCard {
    title: string,
    city: string
}

export default function EventCard( {title, city}: IEventCard ) {

    return (

        <div className={styles.card}>
            <img src={imgCard} alt="title" />
            <div className={styles.eventDetails}>
                <h4>{title}</h4>
                <p>10/12/2022</p>
                <p>{city}</p>
            </div>
            <LinkButton to="#" text="Saber Mais"/>
        </div>

    )
}