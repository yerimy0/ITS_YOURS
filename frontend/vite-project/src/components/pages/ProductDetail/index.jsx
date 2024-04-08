import ProductDetailWrap from './ProductDetailStyle';
import ProductDetailHeader from '../../components/pages/ProductDetail/ProductDetailHeader';
import ProductDetailContainer from '../../components/pages/ProductDetail/ProductDetailContainer';


function ProductDetail () {
  return (
    <ProductDetailWrap>
      <ProductDetailHeader />
      <ProductDetailContainer />
    </ProductDetailWrap>
  )
}

export default ProductDetail;