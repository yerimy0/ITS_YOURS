import ProductHeader from "../../components/pages/Product/ProductHeader";
import ProductsContainer from "../../components/pages/Product/ProductsContainer";
import ProductWrap from "./ProductStyle";

function Product() {
  return (
    <ProductWrap>
      <ProductHeader />
      <ProductsContainer />
    </ProductWrap>
  );
}

export default Product;
