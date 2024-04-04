import styled from 'styled-components'

const RegisterBox =styled.div`
    left: 263px;
    display: flex;
    align-items: flex-start;
    width: 914px;
    padding: 70px 30px;
    flex-direction: column;
    justify-content: center;

    gap: 30px;
    margin-left: auto;

    .Button {
        border-radius: 20px;
        border: 1.5px solid #009DFF;
        background: #FFF;
        color: #009DFF;
        text-align: center;
        font-family: SUIT;
        font-style: normal;
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    input::placeholder {
        font-size: 15px;
        color: #888;
        font-weight: 400;
        line-height: normal;
        padding: 0px 5px;
        flex: 1 0 0;
        align-items: flex-start;
    }
`

const Notion = styled.span`
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 215.385% */
    margin-left: 10px;
`

const MainContent = styled.div`
    gap: 30px;
    display: contents;
`
const Box = styled.div`
    display:flex;
    flex-direction: column
`

const Sentence = styled.div`
    display: flex;
    align-items: flex-start;  
    margin-bottom: 5px; 
`

const Title = styled.div`
    display: flex;
    width: 211px;
    align-items: center;
    gap: 5px;
`

const RedStar = styled.span`
    color: #B3261E;

    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`
const TopTitle = styled.span`
    color: #000;
    text-align: center;
    font-family: SUIT;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
`

const Line = styled.div`
    width: 854px;
    height: 2px;
`

const Input = styled.input`
    border-radius: 20px;
    border: 1px solid #888;
    background: #FFF;
    padding: 8px;
    width: ${({ className }) => (className === "Small" ? "386px" : "838px")};
    height: ${({ className }) => {
        if (className === "Large") return "175px";
        else return "35px";
    }};
`;

const Label = styled.span`
    color: #000;
    font-family: SUIT;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`

const RegButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
    align-self: stretch;
`

const StateButtons = styled.div`
    display: flex;
    width: 845px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    button {
        font-size: 22px;
        font-weight: 700;
        line-height: 28px; /* 127.273% */
    }

`

const ProductTwoInput = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    align-self: stretch;
`

const SmallButton = styled.button`
    font-weight: 700;
    line-height: 28px; /* 127.273% */
    width: 152.5px;
    height: 51px;
`
const BigButton = styled.button`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
    width: 505px;
    height: 51px;
`
const Img = styled.img`
    display: flex;
    width: 200px;
    height: 200px;
    align-items: flex-start;
    gap: 8px;
`

const ProductImg = styled.div`
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
`

export { RegisterBox, Box, Title, Notion, RedStar, TopTitle, Line, Input, Label, StateButtons, RegButtons, MainContent, Sentence, ProductTwoInput, SmallButton, BigButton, Img, ProductImg }