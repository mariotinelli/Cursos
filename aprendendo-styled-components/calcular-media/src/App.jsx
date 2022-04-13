import { Header, Title, SubTitle } from './styles.js'
import Form from './components/Form/Form.jsx'
import Result from './components/Result/Result.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import React, { Fragment } from 'react'
import { useState } from 'react'


function App() {
  
  const [aprovado, setAprovado] = useState(false)  
  const [hideResult, setHideResult] = useState(false)
  const [notas, setNotas] = useState({}) 

  function handleChange(e){
      setNotas({...notas, [e.target.name]: parseFloat(e.target.value)})
  }

  function calcularMedia(e){
    e.preventDefault()
    const media = (notas.nota1 + notas.nota2 + notas.nota3 + notas.nota4) / 4;
    if (media >= 7) {
        setAprovado(true);
    } else {
        setAprovado(false);
    }
    setHideResult(true);
  }


  return (
      <Fragment>
        <GlobalStyle/>
        <Header>
          <Title>Calculadora de Média</Title>
          <SubTitle>Descubra qual a sua média de nota de todas as provas!</SubTitle>       
        </Header>

        <Form onSubmit={calcularMedia} handleChange={handleChange}/>
        {hideResult && (
          <Result aprovado={aprovado}/>
        )}
          
      </Fragment>
          
  )
}

export default App
