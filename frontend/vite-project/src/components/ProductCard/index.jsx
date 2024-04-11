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

function formatPrice(price) {
	return price.toLocaleString('ko-KR');
}

function ProductCard({ _id, imgUrls, name, price }) {
	return (
		<ProductCardWrap productId={_id}>
			<ProductImage src={imgUrls} alt={name} />
			<ProductInfoWrap>
				<ProductInfo>
					<ProductTitle>{name}</ProductTitle>
					<ProductPrice>
						<Price>{formatPrice(price)}</Price>
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
