function SeuNome({ setNome }){



    return (
        <div>
            <p>Qual é o seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome