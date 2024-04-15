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
import ProductHeader from './ProductHeader';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchDefaultProducts } from '../../../apis/service/product.api';

function ProductsContainer() {
	const navigate = useNavigate();
	const location = useLocation();

	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const itemsPerPage = 20;

	useEffect(() => {
		if (location.state && location.state.searchResults) {
			handleSearchResults(location.state.searchResults);
		} else {
			loadDefaultProducts();
		}
	}, [location.state]);

	const loadDefaultProducts = async () => {
		try {
			const productsData = await fetchDefaultProducts();
			setProducts(productsData);
			setDisplayProducts(productsData);
			setTotalItems(productsData.length);
		} catch (error) {
			console.error('Error loading default products:', error);
		}
	};

	const handleSearchResults = results => {
		setDisplayProducts(results);
		setTotalItems(results.length);
		setCurrentPage(0);
	};

	const handleSortChange = sortOption => {
		let sorted = [...displayProducts];
		if (sortOption === 'latest') {
			sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		} else if (sortOption === 'cheapest') {
			sorted.sort((a, b) => a.price - b.price);
		}
		setDisplayProducts(sorted);
		setCurrentPage(0);
	};

	const handleFilterChange = (selectedLocation, selectedUniversity) => {
		const filteredProducts = products.filter(product => {
			const isLocationMatch = selectedLocation ? product.region === selectedLocation : true;
			const isUniversityMatch = selectedUniversity
				? selectedUniversity === '전체' || product.schoolName === selectedUniversity
				: true;
			return isLocationMatch && isUniversityMatch;
		});
		setDisplayProducts(filteredProducts);
		setTotalItems(filteredProducts.length);
		setCurrentPage(0);
	};

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const productsToShow = displayProducts.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

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
				{totalItems === 0 ? (
					<NoProductsMessageWrap>
						<NoProductsMessage>검색 결과가 없습니다.</NoProductsMessage>
						<Searchrecommendation>
							- 단어의 철자가 정확한지 확인해 보세요
							<br />
							- 보다 일반적인 검색어로 다시 검색해 보세요
							<br />
							- 검색어의 띄어쓰기를 다르게 해보세요
							<br />- 유해/금지어가 아닌지 확인해 주세요
						</Searchrecommendation>
					</NoProductsMessageWrap>
				) : (
					<Products>
						{productsToShow.map(product => (
							<ProductCard
								key={product._id}
								productId={product._id}
								imgUrls={product.imgUrls}
								name={product.name}
								price={product.price}
								onClick={() => handleProductClick(product._id)}
							/>
						))}
					</Products>
				)}
			</ProductsWrap>
			{totalItems > 0 && (
				<Paginator
					currentPage={currentPage}
					totalItems={totalItems}
					itemsCountPerPage={itemsPerPage}
					onChange={handlePageChange}
				/>
			)}
		</>
	);
}

export default ProductsContainer;
