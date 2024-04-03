import styled from "styled-components" 

const RightNav = styled.div`
    display: flex;
    width: 837px;
    height: 55px;
    align-items: center;
    gap: 30px;
    .MainLink {
        font-weight: 900; 
    }
    a{
        font-size: 25px;
    }

`;

const LeftNav = styled.div`
    display: flex;
    height: 55px;
    padding: 0px 20px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    a {
        font-size: 15px;
    }

`;

const HeaderMain  = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex: 1 0 0;
    padding-top: 20px;
    width: 100vw;

    a {
        text-decoration: none;
        color: #000;
        text-align: center;
        font-family: SUIT;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-right: 25px;
    }
`;


export {RightNav, HeaderMain, LeftNav  };