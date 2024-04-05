import styled from 'styled-components';
import WishButton from './WishButton';

const ProductCard = () => {
  return (
    <ProductCardWrap className="productCard">
      <ProductImage src="./book_cover.jpg" alt=""/>
      <ProductInfoWrap className="productInfoWrap">
        <ProductInfo className="productInfo">
          <ProductTitle className="productTitle">
            공예란 무엇인가
          </ProductTitle>
          <ProductPrice className="producPrice">
            <Price className="price">27,000</Price>
            <PriceWon className="price_won">원</PriceWon>
          </ProductPrice>
      </ProductInfo>
      <ProductButton>
        <WishButton />  
      </ProductButton>      
    </ProductInfoWrap>
  </ProductCardWrap>
  )
}

const ProductCardWrap = styled.div`
  display: flex;
  width: 170px;
  height: 360px;
  flex-direction: column;
  align-items: flex-start;
  &:hover{
    cursor: pointer;
  };
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
const ProductPrice = styled.p`
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
flex: 1 0 0;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.15px;
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


export default ProductCard;