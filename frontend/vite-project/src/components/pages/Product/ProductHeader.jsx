import SearchBar from '../../SearchBar';
import ProductFilter from './ProductFilter';
import {ProductListHeader, ProductListTitle, SearchResultContainer, SearchResult, ProductFilterWrap, 
  Alignments, Bilnd, Alignment, Filter} from './ProductHeaderStyle'; 

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
        <Alignments>
          <Bilnd>정렬</Bilnd>
          <Alignment>최신순</Alignment>
          <Alignment>저가순</Alignment>
        </Alignments>
        <Filter>
          <ProductFilter />
        </Filter>
      </ProductFilterWrap>
    </ProductListHeader>
  );
}

export default ProductHeader;