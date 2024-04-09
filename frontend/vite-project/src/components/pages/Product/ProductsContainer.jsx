import { React, useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import { ProductsWrap, Products } from './ProductsContainerStyle';
import Paginator from '../../Paginator';

function ProductsContainer() {
	const [products, setProducts] = useState([]);
	const [activePage, setActivePage] = useState(1);

	const totalItems = 100; // 더미
	const perPage = 20; // 더미

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiUrl = 'https://api.example.com/products';
				const res = await fetch(apiUrl);
				const data = await res.json();
				setProducts(data);
			} catch (err) {
				console.log('Error fetching data:', err);
			}
		};
		fetchData();
	}, []);

	const startIndex = (activePage - 1) * perPage;
	const endIndex = startIndex + perPage;
	const productsToShow = products.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setActivePage(pageNumber);
	};

	return (
		<>
			<ProductsWrap>
				<Products>
					<ProductCard />
					{productsToShow.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</Products>
			</ProductsWrap>
			<Paginator totalItems={totalItems} perPage={perPage} />
		</>
	);
}

export default ProductsContainer;
