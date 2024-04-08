import {ProductInfo, Title, PriceContainer, Div, Price, PriceWon,} from './ProductInfoStyle'
import WishButton from '../../WishButton';

function ProductInfoWrap () {
  return (
    <>
      <ProductInfo>
        <Title>디지털 논리 설계와 컴퓨터 구조</Title>
          <Div>
            <PriceContainer>
              <Price>27,000</Price>
              <PriceWon>원</PriceWon>
            </PriceContainer>
            <WishButton />
          </Div>
      </ProductInfo>
    </>
  )
}

export default ProductInfoWrap;