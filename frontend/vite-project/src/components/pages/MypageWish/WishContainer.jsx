import { React, useEffect, useState } from 'react';
import { WishsWrap, Wishs } from './WishContainerStyle';
import ProductCard from '../../ProductCard';
import Paginator from '../../Paginator';

function WishContainer() {
	const [userWishList, setUserWishList] = useState([]);
	const [activePage, setActivePage] = useState(1);
	const itemsCountPerPage = 20;
	const totalItemsCount = 100; //서버에서 받아올 예정

	useEffect(() => {
		// 유저의 찜한 상품 목록 호출
		const fetchUserWishList = async () => {
			try {
				const apiUrl = 'https://api.example.com/wishList';
				const res = await fetch(apiUrl);
				const data = await res.json();
				setUserWishList(data);
			} catch (err) {
				console.log('Error fetching wishlist data:', err);
			}
		};
		fetchUserWishList();
	}, []);

	const startIndex = (activePage - 1) * itemsCountPerPage;
	const endIndex = startIndex + itemsCountPerPage;
	const productsToShow = userWishList.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setActivePage(pageNumber);
	};

	return (
		<>
			<WishsWrap>
				<Wishs>
					<ProductCard />
					{productsToShow.map(productId => (
						<ProductCard key={productId} productId={productId} />
					))}
				</Wishs>
			</WishsWrap>
			<Paginator />
		</>
	);
}

export default WishContainer;
