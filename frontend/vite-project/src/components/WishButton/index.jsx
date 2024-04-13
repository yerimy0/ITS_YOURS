import React, { useState, useEffect, useContext } from 'react';
import WishBtn from './WishButtonStyle';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/axiosInstance';
import UserIdContext from '../../context/UserIdContext';

// WishButton 컴포넌트
function WishButton({ productId }) {
	const [isWishAdd, setIsWishAdd] = useState(false);
	const { id } = useContext(UserIdContext);
	const navigate = useNavigate();

	// 사용자가 상품을 찜했는지 확인
	useEffect(() => {
		const fetchWishStatus = async () => {
			if (!id) {
				return; // 로그인하지 않은 상태라면 함수 종료
			}

			try {
				// API를 통해 사용자의 찜 목록을 조회
				const res = await instance.get(`/wishes/${id}`);

				if (res.status === 200 && Array.isArray(res.data)) {
					// 찜 목록에 현재 상품이 있는지 확인
					const isProductInWishlist = res.data.some(wish => wish.productId._id === productId);
					// 상태 업데이트
					setIsWishAdd(isProductInWishlist);
				} else {
					setIsWishAdd(false);
				}
			} catch (error) {
				console.error('API 요청 에러:', error);
			}
		};

		fetchWishStatus();
	}, [productId, id]);

	// 찜 버튼 상태 토글 함수
	const wishCountHandler = async () => {
		if (!id) {
			// 사용자가 로그인하지 않은 상태라면 로그인 페이지로 이동
			navigate('/login');
			return;
		}

		// 상태 토글
		const newIsWishAdd = !isWishAdd;

		try {
			// 찜 목록을 토글하는 API 요청
			const res = await instance.post('/wishes/toggle', { productId });

			// 요청이 성공하면 상태 업데이트
			if (res.status === 200) {
				setIsWishAdd(newIsWishAdd);
			} else {
				console.error('찜 목록 토글 실패:', res);
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

	return (
		// 찜 버튼 클릭 시 `wishCountHandler` 함수 실행
		<WishBtn onClick={wishCountHandler}>{WishIcon}</WishBtn>
	);
}

export default WishButton;
