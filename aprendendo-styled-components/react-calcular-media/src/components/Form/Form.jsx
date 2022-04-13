import React from 'react'
import { StyledForm, Label, Input, Button } from '../Form/styles.js'

const Form = ({onSubmit, handleChange}) => {



    return (
        <StyledForm onSubmit={onSubmit}>
          <Label>Nota do 1° Bimestre</Label>
          <Input type="number" id='nota1' name='nota1' onChange={handleChange} placeholder="Primeiro Bimestre"/>

          <Label>Nota do 2° Bimestre</Label>
          <Input type="number" id='nota2' name='nota2' onChange={handleChange}  placeholder="Segundo Bimestre"/>

          <Label>Nota do 3° Bimestre</Label>
          <Input type="number" id='nota3' name='nota3' onChange={handleChange}  placeholder="Terceiro Bimestre"/>

          <Label>Nota do 4° Bimestre</Label>
          <Input type="number" id='nota4' name='nota4' onChange={handleChange}  placeholder="Quarto Bimestre"/>

          <Button type='submit' >Calcular</Button>
        </StyledForm>
    )
}

export default Form;