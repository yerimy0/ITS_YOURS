import WishButton from '../WishButton';
import {ProductCardWrap, ProductImage, ProductInfoWrap, 
  ProductInfo, ProductTitle, ProductPrice, Price, PriceWon, ProductButton} from './PeoductCardStyle';

function ProductCard() {

  return (
    <ProductCardWrap>
      <ProductImage src="./book_cover.jpg" alt=""/>
      <ProductInfoWrap>
        <ProductInfo>
          <ProductTitle>
            공예란 무엇인가
          </ProductTitle>
          <ProductPrice>
            <Price>27,000</Price>
            <PriceWon>원</PriceWon>
          </ProductPrice>
        </ProductInfo>
      <ProductButton>
        <WishButton />  
      </ProductButton>      
    </ProductInfoWrap>
  </ProductCardWrap>
  )
}

export default ProductCard;