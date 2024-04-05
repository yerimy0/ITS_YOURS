import {Box, Sentence, RedStar, Label, Input, StateButtons, SmallButton} from '../WriteFormStyle'

function Section({ label, onChange, value, name }) {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>{label}</Label>
            </Sentence>
            <Input className="Medium" placeholder={label + "을 입력해주세요"} onChange={onChange} value={value} name={name} />
        </Box>
    );
}

function Section2({ label, onChange, value, name }) {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>{label}</Label>
            </Sentence>
            <Input className="Small" placeholder={label + "를 입력해주세요"} onChange={onChange} value={value} name={name} />
        </Box>
    );
}

function Section3({ label, onChange, value, name }) {
    return (
        <Box>
            <Sentence>
                <RedStar>*</RedStar>
                <Label>{label}</Label>
            </Sentence>
            <Input className="Large" placeholder={label + "을 입력해주세요"} onChange={onChange} value={value} name={name} />
        </Box>
    );
}

function Section4() {
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
    );
}

export {Section, Section2, Section3, Section4};