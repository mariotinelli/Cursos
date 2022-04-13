import PropTypes from 'prop-types'

function Props(props) {

    return (
        // Fragments ->   <></>
        <>
            <p>Olá, {props.nome} você tem {props.idade} anos e mora em {props.cidade}</p>
        </>
    )
}

// Define um tipo para cada prop
Props.propTypes = {
    nome: PropTypes.string,
    idade: PropTypes.number,
    cidade: PropTypes.string
}

// Gera um valor default
Props.defaultProps = {
    nome: "Fátima",
    idade: 55,
    cidade: "Cambará"
}

export default Props