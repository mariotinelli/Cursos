// Hooks
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Styles
import styles from './Events.module.css'

// Layouts
import Container from '../layout/Container'

// Components
import EventCard from '../events/EventCard'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

// Icons
import { IoCloseOutline } from "react-icons/io5";
import EventSearch from '../events/EventSearch'

function Events(){

    let message = ''
    const location = useLocation()

    if (location.state) {
        message = location.state.message
    }

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('')


    useEffect( () => {
        fetch("http://localhost:5000/events", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then( (resp) => resp.json() )
        .then( (data) => {
            setEvents(data)
        })
        .catch( (err) => console.log(err) )
    }, [])



    function handleOnKeyDown(e){
        if (e.keyCode === 13){
            setSearch(e.target.value)
        } else if(e.target.value === '') {
            setSearch('')
        }     
    }

    function handleOnClick() {
        document.getElementById("search").value = "";
        setSearch('')
    }


    const eventFilter = events.filter( (event) => event.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <div className={styles.events_container}>

            <EventSearch text={<IoCloseOutline/>} handleOnKeyDown={handleOnKeyDown} handleOnClick={handleOnClick}/>
           
            {search ? (
                <h1>Buscando por: {search}</h1>
            ) : (
                <h1>Próximos Eventos</h1>
            )}
            
            <Container customClass="start">
                {eventFilter.length > 0 && (
                    eventFilter.map( (event) => (
                        <EventCard 
                            id={event.id}
                            name={event.name}
                            city={event.city}
                            category={event.category.name}
                            description={event.description}
                            key={event.id}/>
                    ))
                )}
                {eventFilter.length === 0 && (
                    <p>Não há eventos!</p>
                )}
            </Container>

        </div>
    )
}

export default Events