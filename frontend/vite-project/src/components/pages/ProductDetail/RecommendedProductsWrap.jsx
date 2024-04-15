import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import { RecommendedProducts, Title, ProductContainer } from './RecommendedProductsStyle';
import { fetchDefaultProducts } from '../../../apis/service/product.api';
import { useNavigate } from 'react-router-dom';

function RecommendedProductsWrap({ product }) {
	const [recommendedProducts, setRecommendedProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (product && product.region && product.schoolName) {
			fetchDefaultProducts()
				.then(products => {
					const filteredProducts = products.filter(
						p => p.region === product.region && p.schoolName === product.schoolName,
					);
					setRecommendedProducts(filteredProducts.slice(0, 6));
				})
				.catch(error => {
					console.error('Error fetching products:', error);
				});
		}
	}, [product]);

	console.log(recommendedProducts);

	const handleProductClick = productId => {
		navigate(`/product/${productId}`);
		// 페이지를 이동한 후에 스크롤을 맨 위로 이동
		window.scrollTo({ top: 0 });
	};

	return (
		<>
			<RecommendedProducts>
				<Title>{product.schoolName} 대학교의 다른 상품</Title>
				<ProductContainer>
					{recommendedProducts
						.filter(recommendedProduct => recommendedProduct._id !== product._id) // 현재 상품 필터링
						.map(recommendedProduct => (
							<ProductCard
								key={recommendedProduct._id}
								productId={recommendedProduct._id}
								name={recommendedProduct.name}
								price={recommendedProduct.price}
								imgUrls={recommendedProduct.imgUrls}
								onClick={() => handleProductClick(recommendedProduct._id)}
							/>
						))}
				</ProductContainer>
			</RecommendedProducts>
		</>
	);
}

export default RecommendedProductsWrap;
