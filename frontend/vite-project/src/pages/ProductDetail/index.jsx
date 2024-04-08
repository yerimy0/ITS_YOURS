import ProductDetailWrap from './ProductDetailStyle';
import ProductDetailHeader from '../../components/pages/ProductDetail/ProductDetailHeader';
import ProductsDetailContainer from '../../components/pages/ProductDetail/ProductDetailContainer';

function ProductDetail () {
  return (
    <ProductDetailWrap>
      <ProductDetailHeader />
      <ProductsDetailContainer />
    </ProductDetailWrap>
  )
}

export default ProductDetail;
