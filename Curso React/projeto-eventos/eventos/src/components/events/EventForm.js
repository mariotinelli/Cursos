// Styles
import styles from './EventForm.module.css'

// Components
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import TextArea from '../form/TextArea'
import Form from '../form/Form'

// Hooks
import {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorMessage from '../form/ErrorMessage'


function EventForm({ onSubmit, btnText, eventData}) {
    const schema = yup.object({
        name: yup.string().min(2, "Insira no minimo 2 caracteres!").required("O nome é obrigatório!"),
        city: yup.string().min(2, "Insira no minimo 2 caracteres!").required("A cidade é obrigatória!"),
        date: yup.date("Insira uma data").required("A data é obrigatória"),
        maxCapacity: yup.number("Digite um número").positive("Digite um número positivo").integer("Digite um número sem virgulas").required("A capacidade é obrigatória"),
        //category: yup.object().required("A categoria é obrigatória"),
        //description: yup.string().min(2, "Insira no minimo 2 caracteres!").required("A descrição é obrigatória"),
      }).required();

    //const [categories, setCategories] = useState([])
    const [event, setEvent] = useState(eventData || {})


    const { setValue, getValues, watch } = useForm()
/*
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {setCategories(data)})
        .catch((err) => console.log(err))
    }, [])
       */
    function handleChange(e) {
        setEvent({ ...event, [e.target.name]: e.target.value})
        setValue(e.target.name, e.target.value)
    }

    function handleCategory(e) {
        setEvent({ ...event, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }


    console.log(watch())

    return (
        <Form onSubmit={onSubmit} eventData={event} schema={schema}>
            <Input 
                text="Evento:" 
                type="text" 
                name="name"
                placeholder="Digite o nome do evento" 
                handleOnChange={handleChange} 
                value={event.name ? event.name : ''}
            />  

            <Input 
                text="Cidade:" 
                type="text" 
                name="city" 
                placeholder="Digite a cidade do evento"
                handleOnChange={handleChange} 
                value={event.city ? event.city : ''}
            />

            <Input 
                text="Data:" 
                type="date" 
                name="date" 
                handleOnChange={handleChange} 
                value={event.date ? event.date : ''}
            />

            <Input 
                text="Capacidade Máxima:" 
                type="number" 
                name="maxCapacity" 
                placeholder="Digite a capacidade máxima do evento"
                handleOnChange={handleChange} 
                value={event.maxCapacity ? event.maxCapacity : ''}
            />
            {/*
            <Select 
                text="Categoria" 
                name="category" 
                options={categories}
                handleOnChange={handleCategory} 
                value={event.category ? event.category.id : ''}
            />

            <TextArea 
                text="Descrição" 
                name="description" 
                placeholder="Digite a descrição do evento" 
                rows="5" 
                handleOnChange={handleChange} 
                value={event.description ? event.description : ''}
            />
             */}

            <SubmitButton type="submit" text={btnText} />                                
        </Form>
    )
}

export default EventForm