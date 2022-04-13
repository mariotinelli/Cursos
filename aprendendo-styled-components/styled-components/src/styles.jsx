import styled from 'styled-components'

export const Title = styled.h1`
    color: #F00;
    font-size: ${props => `${props.fontSize}px`};

    span {
        font-size: 12px;
    }
`;

export const TitleSmall = styled(Title)`
    color: #00F;
    font-size: 16px;
`