import { ProductDetail } from './ProductDetailContainerStyle';
import LocationDistanceWrap from './LocationDistanceWrap';
import RecommendedProductsWrap from './RecommendedProductsWrap';

function ProductDetailContainer() {
	return (
		<ProductDetail>
			<LocationDistanceWrap />
			<RecommendedProductsWrap />
		</ProductDetail>
	);
}

export default ProductDetailContainer;
