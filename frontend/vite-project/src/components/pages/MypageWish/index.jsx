import React, { useEffect, useState } from 'react';
import { WishsWrap, WishTitle, Wishs } from './WishStyle';
import ProductCard from '../../ProductCard';
import Paginator from '../../Paginator';
import { useNavigate } from 'react-router-dom';
import instance from '../../../apis/axiosInstance';

function WishContainer() {
	const navigate = useNavigate();
	const [userWishList, setUserWishList] = useState([]);
	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	// 유저 아이디 어떻게 가지고와야할지 몰라서 일단 그냥 넣어놨음
	useEffect(() => {
		const fetchUserWishList = async () => {
			try {
				const res = await instance.get('/wishes/realTest123');
				const wishData = res.data;
				setUserWishList(wishData);
				setTotalItems(wishData.length);
			} catch (error) {
				console.error('위시 상품 데이터를 불러오는 중 에러 발생:', error);
			}
		};
		fetchUserWishList();
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const userWishListToShow = userWishList.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	const handleProductClick = productId => {
		navigate(`/product/${productId}`);
	};

	return (
		<>
			<WishsWrap>
				<WishTitle>찜목록</WishTitle>
				<Wishs>
					{userWishListToShow.map(wishItem => {
						if (!wishItem.productId) {
							return null;
						}
						return (
							<ProductCard
								key={wishItem.productId._id}
								productId={wishItem.productId._id}
								imgUrls={wishItem.productId.imgUrls}
								name={wishItem.productId.name}
								price={wishItem.productId.price}
								onClick={() => handleProductClick(wishItem.productId._id)}
							/>
						);
					})}
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
