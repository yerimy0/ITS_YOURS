import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WishButton from '../WishButton';
import { BASE_URI } from '../../constants/URL';
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

function ProductCard() {
	const [productData, setProductData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${BASE_URI}/api/products/list`);
				setProductData(response.data);
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching product data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<ProductCardWrap>
			{productData && (
				<>
					<ProductImage src="/book_cover.jpg" alt="" />
					<ProductInfoWrap>
						<ProductInfo>
							<ProductTitle></ProductTitle>
							<ProductPrice>
								<Price></Price>
								<PriceWon>원</PriceWon>
							</ProductPrice>
						</ProductInfo>
						<ProductButton>
							<WishButton />
						</ProductButton>
					</ProductInfoWrap>
				</>
			)}
		</ProductCardWrap>
	);
}

export default ProductCard;
