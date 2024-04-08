import styled from 'styled-components';

const ProductDetail = styled.section`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 55px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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

const ProductContent = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
`;



export {ProductDetail, ProductInfo, Title, ProductContent};