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

function ProductCard({ productId, imgUrls, name, price, onClick }) {
	return (
		<ProductCardWrap productId={productId}>
			<ProductImage onClick={onClick} src={imgUrls} alt={name} />
			<ProductInfoWrap>
				<ProductInfo onClick={onClick}>
					<ProductTitle>{name}</ProductTitle>
					<ProductPrice>
						<Price>{formatPrice(price)}</Price>
						<PriceWon>원</PriceWon>
					</ProductPrice>
				</ProductInfo>
				<ProductButton>
					<WishButton productId={productId} />
				</ProductButton>
			</ProductInfoWrap>
		</ProductCardWrap>
	);
}

export default ProductCard;
