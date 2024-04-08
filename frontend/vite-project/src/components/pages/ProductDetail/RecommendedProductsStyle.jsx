import styled from 'styled-components';

const RecommendedProducts = styled.div`
  margin-top: 10px;
  border-top: 2px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  margin: 10px 0;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: 213px;
  flex-wrap: wrap;
`;

export {RecommendedProducts, Title, ProductContainer};