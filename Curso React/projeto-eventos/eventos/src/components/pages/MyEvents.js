// Hooks
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'

// Layouts
import Container from '../layout/Container'
import Message from '../layout/Message'
import Button from '../layout/Button'

// Styles
import styles from './MyEvents.module.css'

// Components
import TBody from '../table/TBody'
import EventForm from '../events/EventForm'

function MyEvents(){

    const [events, setEvents] = useState([]);
    const [showEventForm, setShowEventForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    const location = useLocation()

    function createPost(event){

        setMessage('');

        // Initialize cost and services
        event.participants = 0
        event.userParticipants = [{}]

        fetch("http://localhost:5000/events", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(event),
        })
        .then((resp) => resp.json())
        .then((data) => {
            //reload
            document.location.reload(true)
            setShowEventForm(false)
            setType("success")
            setMessage(" O evento foi criado com sucesso! ")
        })
        .catch((err) => console.log(err))
    }

    function removeEvent(id){
        setMessage('')
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setEvents(events.filter( (event) => event.id !== id ))
            // message
            setType("error")
            setMessage("Evento removido com sucesso!")
        })  
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (location.state) {
            setMessage(location.state.message)
        }
    }, [location])   
 

    function toggleEventForm(){
        setShowEventForm(!showEventForm)
    }
          
    useEffect( () => {
        fetch("http://localhost:5000/events", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then( (resp) => resp.json() )
        .then( (data) => {
            setMessage('');
            setEvents(data)
        })
        .catch( (err) => console.log(err) )
    }, [])

    return (
        <div>
            {message && (
                <Message type={type} msg={message}/>
            )}  

            {events.length > 0 && (
                <Container customClass="column">
                    <div className={styles.details_container}>
                        <h1>Meus Eventos</h1>
                        <Button handleOnClick={toggleEventForm} text={!showEventForm ? "Criar Evento" : "Fechar"}/>
                    </div>
                    
                        {!showEventForm ? (
                            <Container customClass="table">                   
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Cidade</th>
                                            <th>Categoria</th>
                                            <th>Ações</th>
                                        </tr> 
                                    </thead>         
                                    {events.map( (event) => (
                                        <TBody 
                                            id={event.id}
                                            name={event.name}
                                            city={event.city}
                                            category={event.category.name}
                                            handleRemove={removeEvent}                                      
                                            >
                                            <Button handleOnClick={toggleEventForm} text={!showEventForm ? "Editar" : "Fechar"}/>
                                        </TBody>                                
                                    ))}               
                                </table>                    
                            </Container>         
                        ) : (
                            <Container customClass="event_form">                          
                                <EventForm handleSubmit={createPost} btnText="Criar Evento"/>                          
                            </Container>  
                        )}                    
                </Container>
            )}
            {events.length === 0 && (
                <>
                    <h1>Meus Eventos</h1>
                    <p>Não há eventos!</p>
                </>
            )}
        </div>
    )
}

export default MyEvents

