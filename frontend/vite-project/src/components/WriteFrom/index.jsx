import { RegisterBox, Title, RedStar, TopTitle, Line, Input, Label, StateButtons, RegButtons, MainContent, Sentence, ProductTwoInput, SmallButton, BigButton, Notion, Img, ProductImg, Box } from './WriteFormStyle';
import InputImg from './components/InputImg'
import {Section, Section2, Section3, Section4} from './components/Section'
import { useEffect, useState } from 'react';

function WriteForm() {
    const [register, setRegister] = useState({
        prodName: '',
        prodPrice: 0,
        prodAuth: '',
        prodPub: '',
        prodStatus: '',
        district: '',
        prodDisc: '',
        uploadImgUrls: ['', '', '']
    });

    const { prodName,
        prodPrice,
        prodAuth,
        prodPub,
        prodStatus,
        district,
        prodDisc, 
        uploadImgUrls } = register;

    useEffect(() => {
        const dbReq = indexedDB.open('tempSave', 1);
        dbReq.addEventListener('success', function (e) {
            const db = e.target.result;

            const transaction = db.transaction(['topics'], 'readonly');
            const store = transaction.objectStore('topics');
            const request = store.getAll();

            request.onsuccess = function (e) {
                const savedData = e.target.result;
                if (savedData.length > 0) { 
                    const latestData = savedData[savedData.length - 1]; 
                    setRegister(latestData);
                }
            };
        });
    }, []);

    function onChange(e) {
        const { value, name } = e.target;
        setRegister({
            ...register,
            [name]: value,
        });
    }

    function handleImageChange(newUrls) {
        setRegister({
            ...register,
            uploadImgUrls: newUrls
        });
    }

    function tempSave() {
        const dbReq = indexedDB.open('tempSave', 1);
        let db;
        dbReq.addEventListener('success', function (e) {
            db = e.target.result;

            const transaction = db.transaction(['topics'], 'readwrite'); 
            const store = transaction.objectStore('topics');
            const request = store.put(register);

            request.onsuccess = function () {
                console.log('임시 저장되었습니다.');
            };

            request.onerror = function () {
                console.log('임시 저장에 실패했습니다.');
            };
        });
        dbReq.addEventListener('error', function (e) {
            const error = e.target.error;
            console.log('error', error.name);
        });
        dbReq.addEventListener('upgradeneeded', function (e) {
            db = e.target.result;
            let oldVersion = e.oldVersion;
            if (oldVersion < 1) {
                const topicsStore = db.createObjectStore('topics', { keyPath: 'id', autoIncrement: true });
            }
        });
    }

    return (
        <RegisterBox>
            <Title>
                <TopTitle>상품 등록</TopTitle>
                <RedStar>*필수 항목</RedStar>
            </Title>
            <Line><hr /></Line>
            <MainContent>
                <InputImg onImageChange={handleImageChange} />
                <Section label={"상품명"} onChange={onChange} value={prodName} name="prodName" />
                <Section label={"판매가"} onChange={onChange} value={prodPrice} name="prodPrice" />
                <ProductTwoInput>
                    <Section2 label={"출판사"} onChange={onChange} value={prodPub} name="prodPub" />
                    <Section2 label={"저자"} onChange={onChange} value={prodAuth} name="prodAuth" />
                </ProductTwoInput>
                <Section3 label={"상품 설명"} onChange={onChange} value={prodDisc} name="prodDisc" />
                <Section4 />
            </MainContent>
            <RegButtons>
                <BigButton className="Button" onClick={tempSave}>임시저장</BigButton>
                <BigButton className="Button">등록하기</BigButton>
            </RegButtons>
        </RegisterBox>
    );
}


export default WriteForm;
