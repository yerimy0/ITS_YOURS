import { React, useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import { ProductsWrap, Products } from './ProductsContainerStyle';
import PaginationBar from '../../PaginationBar';

function ProductsContainer() {
	const [products, setProducts] = useState([]);
	const [activePage, setActivePage] = useState(1);
	const itemsCountPerPage = 20;
	const totalItemsCount = 100; //서버에서 받아올 예정

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

	const startIndex = (activePage - 1) * itemsCountPerPage;
	const endIndex = startIndex + itemsCountPerPage;
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
			<PaginationBar
				activePage={activePage}
				itemsCountPerPage={itemsCountPerPage}
				totalItemsCount={totalItemsCount}
				onChange={handlePageChange}
			/>
		</>
	);
}

export default ProductsContainer;
