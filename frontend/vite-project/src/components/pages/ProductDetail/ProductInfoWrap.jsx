import { ProductInfo, Title, PriceContainer, Div, Price, PriceWon } from './ProductInfoStyle';
import WishButton from '../../WishButton';

function formatPrice(price) {
	if (price === null || price === undefined) {
		return ''; // 가격이 없을 때 빈 문자열을 반환
	}
	return price.toLocaleString('ko-KR');
}

function ProductInfoWrap({ productId, name, price }) {
	return (
		<>
			<ProductInfo>
				<Title>{name}</Title>
				<Div>
					<PriceContainer>
						<Price>{formatPrice(price)}</Price>
						<PriceWon>원</PriceWon>
					</PriceContainer>
					<WishButton productId={productId} />
				</Div>
			</ProductInfo>
		</>
	);
}

export default ProductInfoWrap;
