import Button from "./Button"

function Evento({ numero }) {

    function meuEvento(){
        console.log(`fui ativado! ${numero}`)
    }

    function segundoEvento(){
        console.log("Ativando segundo evento")
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            {/* 
            Adiciona um evento onClick, onde caso seja clicado no botão, dispara a função que esta dentro das chaves {}. 
            Essa função é escrita sem os parenteses, pois é para ativar apenas quando clicar, caso tenha parenteres a função é chamada mesmo sem clicar
            */}
            {/* <button onClick={meuEvento}>Ativar!</button> */}

            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />            
        </div>
    )
}

export default Evento