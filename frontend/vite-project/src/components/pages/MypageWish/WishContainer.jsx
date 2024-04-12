import { React, useEffect, useState } from 'react';
import { WishsWrap, Wishs } from './WishContainerStyle';
import ProductCard from '../../ProductCard';
import Paginator from '../../Paginator';
import { useNavigate } from 'react-router-dom';
import WishHeader from './WishHeader';

function WishContainer() {
	const [userWishList, setUserWishList] = useState([]);
	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [sortedWishList, setSortedWishList] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserWishList = async () => {
			try {
				const res = await instance.get('/api/wishes/');
				setUserWishList(res.data);
				setTotalItems(res.data.length);
			} catch (error) {
				console.error('위시 상품 데이터를 불러오는 중 에러 발생:', error);
			}
		};
		fetchUserWishList();
	}, []);

	//정렬 옵션에 따른 제품 정렬
	const handleSortChange = sortOption => {
		let sorted = [...userWishList];
		if (sortOption === 'latest') {
			sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		} else if (sortOption === 'cheapest') {
			sorted.sort((a, b) => a.price - b.price);
		}
		setSortedWishList(sorted);
	};

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const userWishListToShow = sortedWishList.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	// 상품 ID를 사용하여 상세 페이지로 이동
	const handleProductClick = productId => {
		navigate(`/product/${productId}`);
	};

	return (
		<>
			<WishHeader onSortChange={handleSortChange} />
			<WishsWrap>
				<Wishs>
					{userWishListToShow.map(userWishList => (
						<ProductCard
							key={userWishList._id}
							imgUrls={userWishList.imgUrls}
							name={userWishList.name}
							price={userWishList.price}
							onClick={() => handleProductClick(userWishList._id)}
						/>
					))}
				</Wishs>
			</WishsWrap>
			<Paginator
				currentPage={currentPage}
				totalItems={totalItems}
				itemsCountPerPage={itemsPerPage}
				onChange={handlePageChange}
			/>
		</>
	);
}

export default WishContainer;
