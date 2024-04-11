import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios import 추가
import ProductCard from '../../ProductCard';
import { ProductsWrap, Products } from './ProductsContainerStyle';
import Paginator from '../../Paginator';
// import instance from '../../../utils/api';

function ProductsContainer() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activePage, setActivePage] = useState(1);
	const totalItems = 100; // Dummy
	const perPage = 20; // Dummy

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await instance.get('/api/products/list');
				console.log(response.data);
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching product data:', error);
				setError('Error fetching product data. Please try again later.');
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	// const startIndex = (activePage - 1) * perPage;
	// const endIndex = startIndex + perPage;
	// const productsToShow = loading ? [] : products.slice(startIndex, endIndex);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
				<ProductsWrap>
					<Products>
						{/* {productsToShow.map(product => (
                     <ProductCard
                        key={product._id}
                        imgUrls={product.imgUrls}
                        name={product.name}
                        price={product.price}
                     />
                  ))} */}
					</Products>
				</ProductsWrap>
			)}
			<Paginator totalItems={totalItems} perPage={perPage} />
		</>
	);
}

export default ProductsContainer;
