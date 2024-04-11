import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import { Loading, ProductsWrap, Products } from './ProductsContainerStyle';
import Paginator from '../../Paginator';
import instance from '../../../apis/axiosInstance';
import ProductHeader from './ProductHeader';
import { useNavigate } from 'react-router-dom';

function ProductsContainer() {
	const [products, setProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await instance.get('/api/products/list');
				setProducts(res.data);
				setSortedProducts(res.data);
				setTotalItems(res.data.length);
			} catch (error) {
				console.error('상품 데이터를 불러오는 중 에러 발생:', error);
			}
		};
		fetchData();
	}, []);

	//정렬 옵션에 따른 제품 정렬
	const handleSortChange = sortOption => {
		let sorted = [...products];
		if (sortOption === 'latest') {
			sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		} else if (sortOption === 'cheapest') {
			sorted.sort((a, b) => a.price - b.price);
		}
		setSortedProducts(sorted);
	};

	const handleFilterChange = fiters => {
		// 필터링 로직
	};

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const productsToShow = sortedProducts.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	// 추가된 부분: 상품 클릭 함수 수정
	const handleProductClick = productId => {
		// 상품 ID를 사용하여 상세 페이지로 이동
		navigate(`/product/${productId}`);
	};

	return (
		<>
			<ProductHeader onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
			<ProductsWrap>
				<Products>
					{productsToShow.map(product => (
						<ProductCard
							key={product._id}
							imgUrls={product.imgUrls}
							name={product.name}
							price={product.price}
							onClick={() => handleProductClick(product._id)}
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
	);
}

export default ProductsContainer;
