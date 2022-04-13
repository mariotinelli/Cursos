import styled from 'styled-components'
import { rgba } from 'polished'

export const StyledResult = styled.div`
    background-color: ${props => (props.reprovado ? rgba(255, 0, 0, 0.15) : rgba(0, 255, 0, 0.15))};
    color: ${props => (props.reprovado ? "red" : "green")};
    text-align: center;
    padding: 1em;
    font-weight: bold;
    font-size: 20px;
`;