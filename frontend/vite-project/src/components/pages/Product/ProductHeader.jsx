import styled from 'styled-components';
import SearchBar from '../../SearchBar';

const ProductHeader = () => {
  return (
    <ProductListHeader className="product_list_header">
      <ProductListTitle className="product_list_title">상품목록</ProductListTitle>
      <SearchBar />
      <SearchResultContainer className="search_result">
        <SearchResult>10</SearchResult>
        <SearchResult>개의 도서를 찾았어요.</SearchResult>
      </SearchResultContainer>
      <ProductFilterWrap className="product_filter_wrap">
        <Alignments className="alignments">
          <Bilnd className="blind">정렬</Bilnd>
          <Alignment className="latest_order">최신순</Alignment>
          <Alignment className="low_cost_order">저가순</Alignment>
        </Alignments>
        <Filter className="filter">
          <FilterButton>
            <FilterIcon src="./filter_icon.svg" alt="" />
            필터
          </FilterButton>
        </Filter>
      </ProductFilterWrap>
    </ProductListHeader>
  );
}

const ProductListHeader = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`;

const ProductListTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 57px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px;
  text-align: center;
  margin: 0;
`;

const SearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const SearchResult = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin: 0;
`;

const ProductFilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Alignments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Bilnd = styled.span`
  height: 1px;
  margin: -1px;
  overflow: hidden;
  width: 1px;
`;

const Alignment = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  &:visited {
    color: #000;
  }
  &:hover {
    color: #000;
    text-decoration: underline;
  };
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FilterButton = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
const FilterIcon = styled.img`
  width: 15px;
  height: 15px;
`;


export default ProductHeader;