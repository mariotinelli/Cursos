// Styles
import styles from './CreateEvents.module.css'

// Components
import EventForm from '../events/EventForm'

// Hooks
import { useNavigate } from 'react-router-dom'
import Input from '../form/Input'

function CreateEvents(){

    const navigate = useNavigate()

    function createPost(event){
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
            console.log(data) 
            //redirect
            navigate('/myevents', { state: {message: "Evento criado com sucesso"}})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.createEvents_container}>
            <h1>Crie seu Evento</h1>
            <p>Digite as informações do seu evento</p>
            <EventForm handleSubmit={createPost} btnText="Criar Evento"/>
        </div>
    )
}

export default CreateEvents