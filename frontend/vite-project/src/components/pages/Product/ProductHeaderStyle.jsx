import styled from 'styled-components';

const ProductListHeader = styled.section`
  max-width: 1200px;
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
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
  max-width: 1200px;
  width: 100%;
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
  position: relative;
`;


export {ProductListHeader, ProductListTitle, SearchResultContainer, SearchResult, 
  ProductFilterWrap, Alignments, Bilnd, Alignment, Filter,};