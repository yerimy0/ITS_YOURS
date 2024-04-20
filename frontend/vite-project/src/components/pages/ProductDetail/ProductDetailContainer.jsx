import { ProductDetail } from './ProductDetailContainerStyle';
import LocationDistanceWrap from './LocationDistanceWrap';
import RecommendedProductsWrap from './RecommendedProductsWrap';

function ProductDetailContainer({ product }) {
	return (
		<ProductDetail>
			<LocationDistanceWrap />
			<RecommendedProductsWrap product={product} />
		</ProductDetail>
	);
}

export default ProductDetailContainer;
