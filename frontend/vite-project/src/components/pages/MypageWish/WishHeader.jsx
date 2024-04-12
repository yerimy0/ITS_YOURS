import { WishWrap, WishTitle, WishFilterWrap } from './WishHeaderStyle';
import ProductFilter from '../../ProductFilter/ProductFilter';

function MypageWishHeader({ onSortChange }) {
	return (
		<WishWrap>
			<WishTitle>찜목록</WishTitle>
			<WishFilterWrap>
				<ProductFilter onSortChange={onSortChange} />
			</WishFilterWrap>
		</WishWrap>
	);
}

export default MypageWishHeader;
