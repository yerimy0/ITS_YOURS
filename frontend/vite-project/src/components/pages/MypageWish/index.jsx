import React, { useState, useEffect, useContext } from 'react';
import { WishsWrap, WishTitle, NoWishText, Wishs } from './WishStyle';
import ProductCard from '../../ProductCard';
import Paginator from '../../Paginator';
import { useNavigate } from 'react-router-dom';
import { fetchUserWishList } from '../../../apis/service/WishApi';
import UserIdContext from '../../../context/UserIdContext';

function WishContainer() {
	const navigate = useNavigate();
	const [userWishList, setUserWishList] = useState([]);
	const itemsPerPage = 20;
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const { id } = useContext(UserIdContext);

	// 사용자의 찜 목록을 가져오는 useEffect
	useEffect(() => {
		const loadUserWishList = async () => {
			if (!id) {
				return; // 로그인하지 않은 상태라면 함수 종료
			}
			try {
				const wishData = await fetchUserWishList(id);
				setUserWishList(wishData);
				setTotalItems(wishData.length);
			} catch (error) {
				console.error('위시 상품 데이터를 불러오는 중 에러 발생:', error);
			}
		};

		loadUserWishList();
	}, [id]);

	// 페이지네이션 로직
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
				{userWishListToShow.length === 0 ? ( // 찜한 상품이 없을 때
					<NoWishText>찜한 상품이 없습니다.</NoWishText>
				) : (
					// 찜한 상품이 있을 때
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
				)}
			</WishsWrap>
			{userWishListToShow.length !== 0 && ( // 찜한 상품이 있을 때만 페이지네이션 표시
				<Paginator
					currentPage={currentPage}
					totalItems={totalItems}
					itemsCountPerPage={itemsPerPage}
					onChange={handlePageChange}
				/>
			)}
		</>
	);
}

export default WishContainer;
