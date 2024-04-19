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
import { useNavigate, useLocation as useRegion } from 'react-router-dom';
import { fetchDefaultProducts } from '../../../apis/service/product.api';

function ProductsContainer() {
	const navigate = useNavigate();
	const region = useRegion();

	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [selectedRegion, setSelectedRegion] = useState('');
	const [selectedUniversity, setSelectedUniversity] = useState('');

	const itemsPerPage = 20;

	useEffect(() => {
		loadDefaultProducts();
	}, []);

	useEffect(() => {
		if (region.state && region.state.searchResults) {
			console.log('test::');
			handleSearchResults(region.state.searchResults);
		} else {
			console.log('loadDefaultProducts::');
			loadDefaultProducts();
		}
	}, []);

	const loadDefaultProducts = async () => {
		try {
			const productsData = await fetchDefaultProducts();
			productsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			setProducts(productsData);
			setDisplayProducts(productsData);
			setFilteredProducts(productsData);
			setTotalItems(productsData.length);
		} catch (error) {
			console.error('Error loading default products:', error);
		}
	};

	const handleSearchResults = results => {
		setDisplayProducts(results);
		applyFilter(selectedRegion, selectedUniversity, results);
		setCurrentPage(0);
	};

	const applyFilter = (region, university, productsToFilter) => {
		// region과 university를 사용하여 필터링된 상품을 찾음
		let filtered = productsToFilter.filter(product => {
			const isRegionMatch = region ? product.region === region : true;
			const isUniversityMatch = university
				? university === '전체' || product.schoolName === university
				: true;
			return isRegionMatch && isUniversityMatch;
		});

		setFilteredProducts(filtered);
		setTotalItems(filtered.length);
		setCurrentPage(0);
	};

	const handleSortChange = sortOption => {
		let sorted = [...filteredProducts];
		if (sortOption === 'latest') {
			sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		} else if (sortOption === 'cheapest') {
			sorted.sort((a, b) => a.price - b.price);
		}
		setFilteredProducts(sorted);
		setCurrentPage(0);
	};

	const handleFilterChange = (region, university) => {
		setSelectedRegion(region);
		setSelectedUniversity(university);
		applyFilter(region, university, displayProducts);
	};

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const productsToShow = filteredProducts.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 800 });
	};

	const handleProductClick = productId => {
		navigate(`/product/${productId}`);
		window.scrollTo({ top: 0 });
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
								// imgUrls={product.imgUrls}
								//이미지api 정보에는 imgurl에 중간에 coversum 이라고들어가는데 cover라고 바꾸면 사진이 깨끗해짐,
								// 하지만 api 어떤걸로 불러와야하는지몰라서 imgurl자체를 coversum단어를 cover로 대체해서 넣어버림
								imgUrls={product.imgUrls.map(url => url.replace('coversum', 'cover500'))}
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
