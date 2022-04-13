import Props from './Props'
import styles from './PropsTwo.module.css'

function PropsTwo({titulo, cidade, data, dono}) {

    return (
        <div >
            <hr />
            <Props nome={dono} idade={27} cidade={cidade}/>
            <h1 className={styles.h1Props}>Titulo do evento: {titulo}</h1>
            <p className={styles.pProps}>Cidade: {cidade}</p>
            <p className={styles.pProps}>Data: {data}</p>
            <p className={styles.pProps}>Dono do evento: {dono}</p>
        </div>
    )

}

export default PropsTwo