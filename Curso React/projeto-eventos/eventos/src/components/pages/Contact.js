//
import LinkButton from '../layout/LinkButton'
import Paragraph from '../layout/Paragraph'

import { Modal } from 'antd'


function Contact(){

    return (
            <div>
                <h1>Contact</h1>
                <LinkButton to="/" text="Botao Layout"/>
                <Paragraph span="Data: " text="10/09/2022" />

                <Modal title="Teste" visible>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </Modal>
            </div>
    )
}

export default Contact