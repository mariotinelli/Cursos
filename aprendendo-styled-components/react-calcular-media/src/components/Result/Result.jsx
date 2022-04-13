import React from 'react'
import { StyledResult } from './styles';


const Result = ({aprovado}) => {

    return (
        <>
            {!aprovado ?  (
                <StyledResult reprovado> Reprovado </StyledResult>
            ) : (
                <StyledResult>Aprovado</StyledResult>
            )}
        </>
    )
}

export default Result;