import { useEffect, useState } from 'react'
import EventCard from '../../Event/Card/EventCard'
import Container from '../../layout/Container/Container'
import styles from './Events.module.css'

interface IEvent {
    title: string;
    city: string;
}

export default function Home() {

    const [events , setEvents] = useState<IEvent[]>([])

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setEvents(data);
            console.log(events)
        })
        .catch((error) => console.log(error))

    }, [])



    return (
        
        <Container>
            <h1>Próximos Eventos</h1>
            <p>Veja os próximos eventos</p>

            {events.length > 0 ? (
                <div className={styles.eventsContainer}>     
                    {events.map((event) =>
                        <EventCard title={event?.title} city={event?.city}/>
                    )}                
                </div>

            ) : (
                <p>Não há eventos...</p>
            )}

            
        </Container>
    )
}