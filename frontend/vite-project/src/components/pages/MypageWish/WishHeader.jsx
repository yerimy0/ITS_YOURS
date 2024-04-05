import {WishWrap, WishTitle, WishFilterWrap} from './WishHeaderStyle';
import ProductFilter from '../../ProductFilter/ProductFilter';

function MypageWishHeader () {
  return (
    <WishWrap>
      <WishTitle>찜목록</WishTitle>
      <WishFilterWrap>
        <ProductFilter />
      </WishFilterWrap>
    </WishWrap>
  )
}

export default MypageWishHeader;