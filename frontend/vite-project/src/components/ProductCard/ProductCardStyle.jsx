import styled from "styled-components";

const ProductCardWrap = styled.div`
  display: flex;
  width: 170px;
  height: 360px;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
`;

const ProductImage = styled.img`
  display: flex;
  width: 170px;
  height: 254px;
  align-items: flex-start;
`;

const ProductInfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 5px;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductTitle = styled.p`
  display: flex;
  align-items: flex-start;
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Price = styled.p`
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
  font-style: normal;
  margin: 0;
`;
const PriceWon = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin: 0;
`;
const ProductButton = styled.div`
  display: flex;
  width: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export {
  ProductCardWrap,
  ProductImage,
  ProductInfoWrap,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  Price,
  PriceWon,
  ProductButton,
};
