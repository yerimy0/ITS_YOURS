import React, { useState, useMemo } from 'react';
import WishBtn from './WishButtonStyle';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import instance from '../../apis/axiosInstance';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WishButton({ productId }) {
	const [isWishAdd, setIsWishAdd] = useState(false);
	const navigate = useNavigate();

	const toggleWishAdd = async () => {
		try {
			const res = await instance.post('api/wishes/toggle', {
				product_id: productId,
			});

			if (res.status === 200) {
				// 성공적으로 토글된 경우
				setIsWishAdd(res.data.isWishAdd);
			} else if (res.status === 401) {
				// 401 에러는 인증되지 않은 상태를 나타냅니다.
				navigate('/login'); // 로그인 페이지로 리디렉션
			}
		} catch (error) {
			console.error('찜 목록을 업데이트하는 중 에러가 발생했습니다:', error);
			// 에러 처리를 추가할 수 있습니다.
		}
	};

	const WishIcon = useMemo(() => {
		return isWishAdd ? <IoIosHeart size="24" color="#FECCBE" /> : <IoIosHeartEmpty size="24" />;
	}, [isWishAdd]);

	return <WishBtn onClick={toggleWishAdd}>{WishIcon}</WishBtn>;
}

export default WishButton;
