import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import {
	ProductsWrap,
	Products,
	NoProductsMessageWrap,
	NoProductsMessage,
	Searchrecommendation,
} from './ProductsContainerStyle';
import Paginator from '../../Paginator';
import instance from '../../../apis/axiosInstance';
import ProductHeader from './ProductHeader';
import { useNavigate, useLocation } from 'react-router-dom';

function ProductsContainer() {
	const navigate = useNavigate();
	const location = useLocation();

	const [products, setProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		if (location.state && location.state.searchResults) {
			setSearchResults(location.state.searchResults);
			setSortedProducts(location.state.searchResults);
			setTotalItems(location.state.searchResults.length);
		} else {
			fetchDefaultProducts();
		}
	}, [location.state]);

	const fetchDefaultProducts = async () => {
		try {
			const res = await instance.get('/api/products/list');
			setProducts(res.data);
			setSortedProducts(res.data);
			setTotalItems(res.data.length);
		} catch (error) {
			console.error('상품 데이터를 불러오는 중 에러 발생:', error);
		}
	};

	// 검색 결과 처리
	const handleSearchResults = results => {
		setSearchResults(results);
		setSortedProducts(results);
		setTotalItems(results.length);
	};

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

	// 상품 ID를 사용하여 상세 페이지로 이동
	const handleProductClick = productId => {
		navigate(`/product/${productId}`);
	};

	return (
		<>
			<ProductHeader
				onSortChange={handleSortChange}
				onFilterChange={handleFilterChange}
				onSearchResults={handleSearchResults}
				totalItems={totalItems}
			/>
			<ProductsWrap>
				{searchResults.length === 0 && (
					<NoProductsMessageWrap>
						<NoProductsMessage>검색결과를 찾지 못했어요.</NoProductsMessage>
						<Searchrecommendation>
							- 단어의 철자가 정확한지 확인해 보세요 <br />
							- 보다 일반적인 검색어로 다시 검색해 보세요 <br />
							-검색어의 띄어쓰기를 다르게 해보세요 <br />- 유해/금지어가 아닌지 확인해주세요
						</Searchrecommendation>
					</NoProductsMessageWrap>
				)}
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
				{searchResults.length > 0 && (
					<Paginator
						currentPage={currentPage}
						totalItems={totalItems}
						itemsCountPerPage={itemsPerPage}
						onChange={handlePageChange}
					/>
				)}
			</ProductsWrap>
		</>
	);
}

export default ProductsContainer;
