import { RegisterBox, Title, RedStar, TopTitle, Line, Input, Label, StateButtons, RegButtons, MainContent, Sentence, ProductTwoInput, SmallButton, BigButton, Notion, Img, ProductImg, Box  } from './WriteFormStyle'

function WriteForm () {
    return (
        <RegisterBox>
            <Title>
                <TopTitle>상품 등록</TopTitle>
                <RedStar>*필수 항목</RedStar>
            </Title>
            <Line><hr /></Line>
            <MainContent>
                <InputImg />
                <Section label={"상품명"}/>
                <Section label={"판매가"}/>
                <ProductTwoInput>
                    <Section2 label={"출판사"}/>
                    <Section2 label={"저자"}/>
                </ProductTwoInput>
                <Section3 />
                <Section4 />
            </MainContent>
            <RegButtons>
                    <BigButton className="Button">임시저장</BigButton>
                    <BigButton className="Button">등록하기</BigButton>
            </RegButtons>
        </RegisterBox>
    )
}
function InputImg () {
    return (
        <Box>
            <Sentence>
            <RedStar>*</RedStar>
            <Label>상품이미지</Label>
            <Notion>첫번째 사진은 책표지를 올려주세요</Notion>
            </Sentence>
            <ProductImg>
                <Img src="/book1.jpeg" />
                <Img src="/book2.jpeg" />
                <Img src="/book3.jpeg" />
            </ProductImg>
        </Box>
    )
}

function Section ({label}) {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>{label}</Label>
            </Sentence>
            {label === "상품명" ? <Input className="Medium" placeholder="상품명을 입력해주세요" /> : <Input className="Medium" placeholder="판매가를 입력해주세요" />}
        </Box>
    )
}

function Section2 ({label}) {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>{label}</Label>
            </Sentence>
            {label === "출판사" ? <Input className="Small" placeholder="출판사를 입력해주세요" /> : <Input className="Small" placeholder="저자를 입력해주세요" />}
        </Box>
    )
}

function Section3 () {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>상품 설명</Label>
            </Sentence>
            <Input className="Large" placeholder="상품에 대한 설명을 입력해주세요" />
        </Box>
    )
}

function Section4 () {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>상품 상태</Label>
            </Sentence>
            <StateButtons>
                <SmallButton className="Button"> 새상품</SmallButton>
                <SmallButton className="Button">거의 새것</SmallButton>
                <SmallButton className="Button">중고</SmallButton>
            </StateButtons>
        </Box>
    )
}

export default WriteForm;