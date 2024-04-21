import React from 'react';
import SearchBar from '../../SearchBar';
import ProductFilter from '../../ProductFilter/ProductFilter';
import {
	ProductListHeader,
	ProductListTitle,
	SearchResultContainer,
	SearchResult,
	ProductFilterWrap,
	TextWrap,
} from './ProductHeaderStyle';

function ProductHeader({ onSortChange, onFilterChange, onSearchResults, totalItems }) {
	return (
		<ProductListHeader>
			<TextWrap>
				<h4>
					You need it a list
					<span> of book products</span>
				</h4>
				<div className="tw_wrap">
					<h5>scroll</h5>
					<img src="/arr_bottom2.png" alt="" />
				</div>
			</TextWrap>
			<div className="container">
				<ProductListTitle>도서 상품목록</ProductListTitle>
				<SearchBar onSearchResults={onSearchResults} className="product_search_bar" />
				<SearchResultContainer>
					<SearchResult className="find_num">{totalItems}</SearchResult>
					<SearchResult>개의 도서를 찾았어요.</SearchResult>
				</SearchResultContainer>
				<ProductFilterWrap>
					<ProductFilter onSortChange={onSortChange} onFilterChange={onFilterChange} />
				</ProductFilterWrap>
			</div>
		</ProductListHeader>
	);
}

export default ProductHeader;
