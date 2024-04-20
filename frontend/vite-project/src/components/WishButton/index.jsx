import React, { useState, useEffect, useContext } from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import UserIdContext from '../../context/UserIdContext';
import { fetchUserWishList, toggleWishlist } from '../../apis/service/WishApi';
import styled from 'styled-components';

// WishButton 컴포넌트
function WishButton({ productId }) {
	const [isWishAdd, setIsWishAdd] = useState(false);
	const { id } = useContext(UserIdContext);
	const navigate = useNavigate();

	// 사용자가 상품을 찜했는지 확인
	useEffect(() => {
		const fetchStatus = async () => {
			if (!id) {
				return; // 로그인하지 않은 상태라면 함수 종료
			}

			try {
				const wishData = await fetchUserWishList(id);
				const isProductInWishlist = wishData.some(wish => wish.productId._id === productId);
				setIsWishAdd(isProductInWishlist);
			} catch (error) {
				console.error('Error fetching wish status:', error);
			}
		};

		fetchStatus();
	}, [productId, id]);

	// 찜 버튼 상태 토글 함수
	const wishCountHandler = async () => {
		if (!id) {
			navigate('/login'); // 사용자가 로그인하지 않은 상태라면 로그인 페이지로 이동
			return;
		}

		const newIsWishAdd = !isWishAdd;

		try {
			const res = await toggleWishlist(productId);
			if (res.status === 200) {
				setIsWishAdd(newIsWishAdd);
			} else {
				console.error('Error toggling wishlist:', res);
			}
		} catch (error) {
			console.error('API 요청 에러:', error);
		}
	};

	// 아이콘 렌더링
	const WishIcon = isWishAdd ? (
		<IoIosHeart size="24" color="#FECCBE" />
	) : (
		<IoIosHeartEmpty size="24" />
	);

	return <WishBtn onClick={wishCountHandler}>{WishIcon}</WishBtn>;
}

const WishBtn = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: none;
	border: 0;
	padding: 0;
	cursor: pointer;
`;

export default WishButton;
