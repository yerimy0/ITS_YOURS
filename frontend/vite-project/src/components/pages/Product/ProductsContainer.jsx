import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import { Loading, ProductsWrap, Products } from './ProductsContainerStyle';
import Paginator from '../../Paginator';
import instance from '../../../apis/axiosInstance';

function ProductsContainer() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await instance.get('/api/products/list');
				setProducts(res.data);
				setTotalItems(res.data.length);
				setLoading(false);
			} catch (error) {
				console.error('상품 데이터를 불러오는 중 에러 발생:', error);
				setError('상품 데이터를 불러오는 중 에러가 발생했습니다. 나중에 다시 시도해주세요.');
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const productsToShow = products.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			{loading ? (
				<Loading>로딩 중...</Loading>
			) : error ? (
				<div>에러가 발생했습니다: {error}</div>
			) : (
				<>
					<ProductsWrap>
						<Products>
							{productsToShow.map(product => (
								<ProductCard
									key={product._id}
									imgUrls={product.imgUrls}
									name={product.name}
									price={product.price}
								/>
							))}
						</Products>
					</ProductsWrap>
					<Paginator
						currentPage={currentPage}
						totalItems={totalItems}
						itemsCountPerPage={itemsPerPage}
						onChange={handlePageChange}
					/>
				</>
			)}
		</>
	);
}

export default ProductsContainer;
