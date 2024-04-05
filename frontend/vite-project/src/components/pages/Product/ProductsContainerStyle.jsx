import styled from "styled-components"

const ProductsWrap = styled.section`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 50px;
  justify-content: space-evenly;
  margin: 60px 0 30px 0;
`;

export {ProductsWrap, Products};