import styled from "styled-components"
import ProductCard from "../../ProductCard";

const ProductsContainer = () => {
  return (
    <ProductsWrap>
    <Products>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </Products>
    </ProductsWrap>
  )
}
const ProductsWrap = styled.section`
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

export default ProductsContainer;