import React from 'react';
import WishButton from '../WishButton';
import {
	ProductCardWrap,
	ProductImage,
	ProductInfoWrap,
	ProductInfo,
	ProductTitle,
	ProductPrice,
	Price,
	PriceWon,
	ProductButton,
} from './ProductCardStyle';

function ProductCard({ _id, imgUrls, name, price }) {
	return (
		<ProductCardWrap productId={_id}>
			{/* imgUrls 배열의 첫 번째 요소를 사용하여 이미지를 표시합니다. */}
			<ProductImage src={imgUrls} alt={name} />
			<ProductInfoWrap>
				<ProductInfo>
					<ProductTitle>{name}</ProductTitle>
					<ProductPrice>
						<Price>{price}</Price>
						<PriceWon>원</PriceWon>
					</ProductPrice>
				</ProductInfo>
				<ProductButton>
					<WishButton />
				</ProductButton>
			</ProductInfoWrap>
		</ProductCardWrap>
	);
}

export default ProductCard;
