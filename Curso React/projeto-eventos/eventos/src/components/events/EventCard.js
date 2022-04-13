// Styles
import styles from './EventCard.module.css'

// Image
import banner from '../../img/banner1.png'

// Layouts
import LinkButton from '../layout/LinkButton'
import Paragraph from '../layout/Paragraph'


function EventCard( {id, name, category} ){

      
    return (
        
        <div className={styles.event_card}>

            <img src={banner} alt="Banner" />

            <div className={styles.card_info}>
                <h2>{name}</h2>  
                <Paragraph span="Data: " text="10/09/2022" />   
                <Paragraph span="Categoria: " text={category} />                        
            </div>  
             
            <LinkButton to={`event/${id}`} text="Saber Mais" color="success"/>
        
        </div>
    )
}

export default EventCard

