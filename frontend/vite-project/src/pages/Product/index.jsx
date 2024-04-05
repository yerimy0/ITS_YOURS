import styled from 'styled-components';
import ProductHeader from '../../components/pages/Product/ProductHeader';
import ProductsContainer from '../../components/pages/Product/ProductsContainer';


function Product () {
  return (
    <ProductWrap>
      <ProductHeader />
      <ProductsContainer />
    </ProductWrap>
  )
}

export default Product;

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;