// SoldContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SalesHistoryWrap, ForSalesList, SoldVoid } from './SoldContainerStyle';
import SoldCard from '../../../MypageHistoryCard/SoldCard';
import { fetchSoldItems, deleteSaleItem } from './SoldApi'; // API 함수 가져오기

const SoldContainer = () => {
	const [soldItems, setSoldItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			fetchSoldItems(id)
				.then(data => {
					// isCompleted가 true이고, deletedAt이 null인 항목만 필터링
					const validItems = data.filter(
						item => item.isCompleted === true && item.deletedAt == null,
					);
					setSoldItems(validItems);
				})
				.catch(error => {
					console.error('판매 완료 목록을 가져오는데 실패했습니다:', error);
					alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
				});
		}
	}, [id]);

	const handleDelete = async prodId => {
		try {
			const response = await deleteSaleItem(id, prodId);
			if (response.status === 200) {
				const newItems = soldItems.filter(item => item._id !== prodId);
				setSoldItems(newItems); // 서버에서 삭제 성공 후 상태 업데이트
			} else {
				throw new Error('서버에서 아이템 삭제 실패');
			}
		} catch (error) {
			console.error('아이템 삭제 실패:', error);
			alert('아이템을 삭제하는 도중 문제가 발생했습니다. 나중에 다시 시도해 주세요.');
		}
	};

	return (
		<SalesHistoryWrap>
			{soldItems.length > 0 ? (
				soldItems.map(sold => (
					<ForSalesList key={sold._id}>
						<SoldCard
							imgUrls={sold.imgUrls}
							price={sold.price}
							name={sold.name}
							sellDate={sold.sellDate}
							like={sold.like}
							chat={sold.chat}
							onDelete={() => handleDelete(sold._id)}
							id={sold._id}
							createdAt={sold.createdAt}
						/>
					</ForSalesList>
				))
			) : (
				<SoldVoid>판매완료 상품이 없습니다.</SoldVoid>
			)}
		</SalesHistoryWrap>
	);
};

export default SoldContainer;
