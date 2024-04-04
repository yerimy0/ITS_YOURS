import styled from "styled-components" 

const Content = styled.div`
    background: var(--footer, #0D1034);
    color: #fff;
    display: flex;

    width: 100vW;
    height: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
    bottom:0px;
`

const Icons = styled.div`
    display: flex;
    width: 149px;
    justify-content: center;
    gap: 27px;
    flex-shrink: 0;
`

const Line = styled.div`
    width: 179.003px;
    height: 1px;
`

const Developer = styled.div`
    color: #FFF;

    text-align: center;
    font-size: 10px;
    font-family: SUIT;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
`

export {Content, Icons, Line, Developer   };