import React from 'react';
import SearchBar from '../../SearchBar';
import ProductFilter from '../../ProductFilter/ProductFilter';
import {
	ProductListHeader,
	ProductListTitle,
	SearchResultContainer,
	SearchResult,
	ProductFilterWrap,
} from './ProductHeaderStyle';

function ProductHeader({ onSortChange, onFilterChange, onSearchResults, totalItems }) {
	return (
		<ProductListHeader>
			<ProductListTitle>상품목록</ProductListTitle>
			<SearchBar onSearchResults={onSearchResults} />
			<SearchResultContainer>
				<SearchResult>{totalItems}</SearchResult>
				<SearchResult>개의 도서를 찾았어요.</SearchResult>
			</SearchResultContainer>
			<ProductFilterWrap>
				<ProductFilter onSortChange={onSortChange} onFilterChange={onFilterChange} />
			</ProductFilterWrap>
		</ProductListHeader>
	);
}

export default ProductHeader;
