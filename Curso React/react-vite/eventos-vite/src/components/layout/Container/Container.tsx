import styles from './Container.module.css'

import * as React from 'react'

interface PropChildren {
    children?: React.ReactNode;
}

export default function Container({children}: PropChildren) {

    return (

        <div className={styles.container}>
            {children}
        </div>

    )
}