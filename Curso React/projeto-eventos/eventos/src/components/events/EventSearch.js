// Styles
import Button from '../layout/Button'
import styles from './EventSearch.module.css'


function EventSearch({ handleOnKeyDown, handleOnClick, text, value}) {

    return (
        <div className={styles.eventSearch}>
            <input type="text" placeholder='Busque um evento' name='search' id="search" onKeyDown={handleOnKeyDown} value={value}/>
            <button onClick={handleOnClick}>{text}</button>
        </div>        
    )
}

export default EventSearch