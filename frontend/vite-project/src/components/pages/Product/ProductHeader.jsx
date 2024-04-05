import React, { useState } from 'react';
import SearchBar from '../../SearchBar';
import ProductFilter from '../../ProductFilter/ProductFilter';
import {ProductListHeader, ProductListTitle, SearchResultContainer, SearchResult, ProductFilterWrap} from './ProductHeaderStyle'; 

function ProductHeader () {


  return (
    <ProductListHeader>
      <ProductListTitle>상품목록</ProductListTitle>
      <SearchBar />
      <SearchResultContainer>
        <SearchResult>10</SearchResult>
        <SearchResult>개의 도서를 찾았어요.</SearchResult>
      </SearchResultContainer>
      <ProductFilterWrap>
        <ProductFilter />
      </ProductFilterWrap>
    </ProductListHeader>
  );
}

export default ProductHeader;