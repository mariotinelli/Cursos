// Styles
import styles from './Form.module.css'

import React from 'react'

// Hooks
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const EventForm = ({ onSubmit, eventData, children, schema }) => {

    
    const methods = useForm({
        defaultValues: eventData,
        resolver: yupResolver(schema)
    });
    
    const { handleSubmit, formState: {errors} } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
            {React.Children.map(children, child => {
                return child.props.name
                ? React.createElement(child.type, {
                    ...{
                        ...child.props,
                        register: methods.register,
                        getValue: methods.getValues,
                        errors: errors,
                        key: child.props.name
                    }
                })
                : child;
            })}
        </form>
        
    )
}

export default EventForm