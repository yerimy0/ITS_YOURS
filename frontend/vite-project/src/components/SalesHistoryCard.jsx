import styled from "styled-components";

const SalesHistoryCard = () => {
  return (
    <ProductCardWrap className="productCard">
      <ImageBox>
        <ForSalesListImage src="./book4.png" alt="" />
      </ImageBox>
      <SalesListTitle className="SLT">
        점프 투 파이썬
        <SalesListPrice className="producPrice">
          <SalesListPriceNum className="price">27,000</SalesListPriceNum>
          <SalesListWon className="price_won">원</SalesListWon>
        </SalesListPrice>
        <SalesListStatus>
          <WishIcon src="heart.svg" alt="" />
          <WishStatus>8</WishStatus>
          <ChatIcon src="chat_bubble_oval.svg" alt="" />
          <ChatStatus>8</ChatStatus>
        </SalesListStatus>
        <DateStatus className="지금">2027년 3월 5일</DateStatus>
      </SalesListTitle>
      <SalesListBtnBox>
        <EdditBtnBox>
          <EdditBtn>수정</EdditBtn>
        </EdditBtnBox>
        <DeleteBtnBox>
          <DeleteBtn>삭제</DeleteBtn>
        </DeleteBtnBox>
      </SalesListBtnBox>
    </ProductCardWrap>
  );
};

export default SalesHistoryCard;

const ProductCardWrap = styled.div`
  display: flex;
  margin-left: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const ImageBox = styled.div`
  width: auto;
  border: 1px solid #ded8e1;
  padding: 10px;
  margin: 5px;
  display: inline-block;
`;

const ForSalesListImage = styled.img`
  display: flex;
  width: 100px;
  height: 150px;
  display: inline-block;
`;

const SalesListTitle = styled.div`
  color: var(--M3-black, #000);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.15px;
  margin-top: 40px;
  margin-left: 10px;
`;

const SalesListPrice = styled.div`
  display: flex;
`;

const SalesListPriceNum = styled.div`
  color: var(--M3-black, #000);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  display: inline-block;
  margin: 0px;
`;

const SalesListWon = styled.div`
  color: var(--M3-black, #000);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
  margin: 0px;
  flex-direction: column-reverse;
`;

const SalesListStatus = styled.div`
  display: flex;
`;

const WishIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const WishStatus = styled.p`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  margin: 0px;
  hieght: 25px;
`;

const ChatIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const ChatStatus = styled.p`
  color: #000;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  margin: 0px;
  hieght: 25px;
`;

const DateStatus = styled.p`
  margin: 0px auto;
  color: #000;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.027px;
`;

const SalesListBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 1000px;
  margin-top: 100px;
`;

const EdditBtnBox = styled.div`
  margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
`;

const EdditBtn = styled.button`
  border-radius: 20px;
  border: 1px solid #009dff;
  background: #fff;
  width: 66px;
  height: 53px;
  color: #009dff;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  margin: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const DeleteBtnBox = styled.div`
  margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
`;
const DeleteBtn = styled.button`
  width: 66px;
  height: 53px;
  border-radius: 20px;
  border: 1px solid #ded8e1;
  background: #fff;
  color: #000;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  margin: 3px;
  &:hover {
    cursor: pointer;
  }
`;
