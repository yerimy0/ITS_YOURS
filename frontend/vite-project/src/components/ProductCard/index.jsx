import axios from 'axios';
import { useState, useEffect } from 'react';
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

function ProductCard() {
	const [productData, setProductData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:4000/api/products/list');
				// 데이터를 받아오면 state에 저장
				setProductData(response.data);
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
					<ProductImage src={productData.imgUrls[0]} alt="" />
					<ProductInfoWrap>
						<ProductInfo>
							<ProductTitle>{productData.name}</ProductTitle>
							<ProductPrice>
								<Price>{productData.price.toLocaleString()}</Price>
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
