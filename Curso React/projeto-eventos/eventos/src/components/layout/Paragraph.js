// Styles
import styles from './Paragraph.module.css'



function Paragraph( { span, text } ){

      
    return (        
        <>
            <p className={styles.paragraph}> <span> {span} </span> {text} </p>
        </>
    )
}

export default Paragraph

