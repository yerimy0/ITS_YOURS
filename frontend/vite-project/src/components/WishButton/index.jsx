import React, { useState, useMemo } from 'react';
import WishBtn from './WishButtonStyle';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import instance from '../../apis/axiosInstance';
import { useNavigate } from 'react-router-dom';

function WishButton({ userId, productId }) {
	const [isWishAdd, setIsWishAdd] = useState(false);
	const navigate = useNavigate();

	// 찜 목록에 상품을 추가하는 API 호출 함수
	const callAddWishAPI = async () => {
		try {
			// 요청 본문에 userId와 productId를 포함하여 POST 요청을 보냅니다.
			const res = await instance.post(`/api/wishes/toggle`, {
				userId: userId,
				productId: productId,
			});

			// 요청이 성공했을 때
			if (res.status === 200) {
				const data = res.data;
				if (data.success) {
					console.log('상품이 찜 목록에 추가되었습니다:', data);
					return data; // 응답 데이터를 반환
				} else {
					console.error('찜 목록에 추가하는 중 문제가 발생했습니다:', data);
				}
			} else {
				console.error('찜 목록에 추가하는 중 에러가 발생했습니다:', res);
			}
		} catch (error) {
			// 요청 중 에러가 발생한 경우
			console.error('찜 목록에 추가하는 중 에러가 발생했습니다:', error);
		}
	};

	// 찜 목록에서 상품을 제거하는 API 호출 함수
	const callRemoveWishAPI = async () => {
		try {
			// 요청 본문에 userId와 productId를 포함하여 POST 요청을 보냅니다.
			const res = await instance.post(`/api/wishes/toggle`, {
				userId: userId,
				productId: productId,
			});

			// 요청이 성공했을 때
			if (res.status === 200) {
				const data = res.data;
				if (data.success) {
					console.log('상품이 찜 목록에서 제거되었습니다:', data);
					return data; // 응답 데이터를 반환
				} else {
					console.error('찜 목록에서 제거하는 중 문제가 발생했습니다:', data);
				}
			} else {
				console.error('찜 목록에서 제거하는 중 에러가 발생했습니다:', res);
			}
		} catch (error) {
			console.error('찜 목록에서 제거하는 중 에러가 발생했습니다:', error);
		}
	};

	// 찜 버튼을 토글하는 함수
	const toggleWishAdd = async () => {
		if (isWishAdd) {
			// 찜 버튼이 활성화된 상태라면, 찜 목록에서 제거
			const response = await callRemoveWishAPI();
			if (response) {
				setIsWishAdd(false);
			}
		} else {
			// 찜 버튼이 비활성화된 상태라면, 찜 목록에 추가
			const response = await callAddWishAPI();
			if (response) {
				setIsWishAdd(true);
			}
		}
	};

	// 찜 아이콘을 조건에 따라 반환
	const WishIcon = useMemo(() => {
		return isWishAdd ? <IoIosHeart size="24" color="#FECCBE" /> : <IoIosHeartEmpty size="24" />;
	}, [isWishAdd]);

	return <WishBtn onClick={toggleWishAdd}>{WishIcon}</WishBtn>;
}

export default WishButton;
