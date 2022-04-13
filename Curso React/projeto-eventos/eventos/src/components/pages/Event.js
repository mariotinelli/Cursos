// Syles
import styles from './Event.module.css'

// Icons
import { useParams } from 'react-router-dom'
import {IoLocationOutline, IoCalendarOutline, IoGlobeOutline, IoPersonOutline, IoPeopleOutline} from 'react-icons/io5'
import { ImPencil } from "react-icons/im";

// Layouts
import Container from '../layout/Container'
import Message from '../layout/Message'
import Button from '../layout/Button'
import Paragraph from '../layout/Paragraph'

// Hooks
import { useEffect, useState } from 'react'

// Image
import banner from '../../img/banner1.png'

// Components
import EventForm from '../events/EventForm'

import { format } from 'date-fns';

function Event( ){

    const {id} = useParams()
    const [event, setEvent] = useState([])
    const [showEventForm, setShowEventForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    

    function editPost(project) {

        setMessage()
        // validation
        
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then( resp => resp.json() )
        .then( (data) => {
            setEvent(data)
            setShowEventForm(false)
            setType("success")
            setMessage("O evento foi atualizado!")
        })
        .catch( (err) => console.log(err) )

    }

    useEffect( () => {
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then( resp => resp.json() )
        .then( (data) => {
            setEvent(data) 
        })
        .catch( (err) => console.log(err) )

    }, [id])

    function toggleEventForm(){
        setShowEventForm(!showEventForm)
    }

    function dateFormat(eventDate){
        const newDate = new Date(eventDate)
        //console.log(format(newDate, 'MM/dd/yyyy'))
        return format(newDate, 'MM/dd/yyyy')
    }
    
    return (
        <Container>
            {message && (
                <Message type={type} msg={message}/>
            )}

            {!showEventForm ? (
                <Container customClass="show">
                    <div className={styles.event_container}>
                        <img src={event.image.path} alt={event.image.path} />              
                        <div className={styles.details_container}> 
                            <div className={styles.event_container_actions}>
                                <Button handleOnClick={toggleEventForm} text={<ImPencil/>} color="success" />                                
                            </div > 
                            <h1> {event.name} </h1>  
                            <div className={styles.event_info}>
                                <div>
                                    <Paragraph span={<IoPersonOutline/>} text="Dono" />
                                    <Paragraph span={<IoCalendarOutline/>} text="{dateFormat(event.date)}" />
                                    <Paragraph span={<IoLocationOutline/>} text={event.city} />
                                </div>
                                <div>
                                    <Paragraph span={<IoPeopleOutline/>} text={`Cap: ${event.maxCapacity} pessoas`}  />
                                    <Paragraph span={<IoPeopleOutline/>} text={`${event.participants} Participantes`}  />
                                    <Paragraph span={<IoGlobeOutline/>} text="{event.category.name}" />                          
                                </div>  
                            </div>   
                            <div className={styles.event_action}>        
                                <Button text="Confirmar Presença"/>
                            </div>                                     
                        </div>
                    </div>
                    <div className={styles.event_description}>
                        <p>{event.description}</p>
                    </div>
                </Container>
            ) : (
                <Container customClass="event_form">
                    <EventForm handleSubmit={editPost} btnText="Editar Evento" eventData={event}/>
                </Container>
            )}            
        </Container>
    )
}

export default Event

