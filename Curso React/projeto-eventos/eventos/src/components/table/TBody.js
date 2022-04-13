// Styles
import styles from './TBody.module.css'

// Icons
import {FaTrashAlt, FaExternalLinkAlt} from 'react-icons/fa'

// Layouts
import Button from '../layout/Button'
import LinkButton from '../layout/LinkButton'


function TBody({id, name, category, city, handleRemove}) {

    const removeEvent = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (        
        <>
            <tbody className={styles.table_tbody}>
                <tr>
                    <td> {name} </td>
                    <td> {city} </td>
                    <td> {category} </td>
                    <td className={styles.table_tbody_actions}>
                        <LinkButton to={`/event/${id}`} text={<FaExternalLinkAlt/>} />
                        <Button handleOnClick={removeEvent} text={<FaTrashAlt/>}/>
                    </td>
                </tr>
            </tbody>            
        </>     
    )
}

export default TBody