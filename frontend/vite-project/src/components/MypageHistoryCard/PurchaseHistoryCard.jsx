import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const PurchaseHistoryCard = ({ itemId, onDelete }) => {
	const [itemData, setItemData] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const fetchItemData = async () => {
			try {
				const response = await fetch(`https://api.example.com/items/${itemId}`);
				const data = await response.json();
				setItemData(data);
			} catch (error) {
				console.error('item 데이터를 가져오는데 실패했습니다.', error);
			}
		};

		fetchItemData();
	}, [itemId]);

	const openDeleteModal = () => {
		setIsModalOpen(true);
	};

	const closeDeleteModal = () => {
		setIsModalOpen(false);
	};

	const handleDelete = () => {
		console.log('삭제처리', itemId);
		onDelete(itemId);
		closeDeleteModal(false);
	};

	return (
		<>
			{itemData ? (
				<PurchaseCardWrap>
					<ImageBox>
						<ForPurchaseListImage src={itemData.image} alt="" />
					</ImageBox>
					<PurchaseListTitle>
						{itemData.title}
						<PurchaseListPrice>
							<PurchaseListPriceNum>{itemData.price}</PurchaseListPriceNum>
							<PurchaseListWon>원</PurchaseListWon>
						</PurchaseListPrice>
						<PurchaseListSeller>{itemData.seller}</PurchaseListSeller>
					</PurchaseListTitle>
					<PurchaseListBtnBox>
						<DeleteBtnBox>
							<DeleteBtn onClick={openDeleteModal}>삭제</DeleteBtn>
						</DeleteBtnBox>
					</PurchaseListBtnBox>
				</PurchaseCardWrap>
			) : (
				<div>데이터 로딩중...</div>
			)}
			<Modal
				isOpen={isModalOpen}
				onClose={closeDeleteModal}
				title="정말 삭제하시겠습니까?"
				content="삭제된 데이터는 복구할 수 없습니다."
				confirmText="확인"
				onConfirm={handleDelete}
			/>
		</>
	);
};
export default PurchaseHistoryCard;

const PurchaseCardWrap = styled.div`
	display: flex;
	margin-left: 50px;
	&:hover {
		cursor: pointer;
	}
`;

const ImageBox = styled.div`
	width: auto;
	border: 1px solid #ded8e1;
	padding: 10px;
	margin: 5px;
	display: inline-block;
`;

const ForPurchaseListImage = styled.img`
	display: flex;
	width: 100px;
	height: 150px;
	display: inline-block;
`;

const PurchaseListTitle = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 20px;
	font-style: normal;
	font-weight: 300;
	letter-spacing: 0.15px;
	margin-top: 40px;
	margin-left: 10px;
`;

const PurchaseListPrice = styled.div`
	display: flex;
`;

const PurchaseListPriceNum = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	display: inline-block;
	margin: 0px;
`;

const PurchaseListWon = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	margin: 0px;
	flex-direction: column-reverse;
`;

const PurchaseListSeller = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	margin: 0px;
	flex-direction: column-reverse;
`;

const PurchaseListBtnBox = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-left: 1000px;
	margin-top: 100px;
`;

const DeleteBtnBox = styled.div`
	margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
`;
const DeleteBtn = styled.button`
	width: 66px;
	height: 53px;
	border-radius: 20px;
	border: 1px solid #ded8e1;
	background: #fff;
	color: #000;
	font-family: SUIT;
	font-size: 16px;
	font-weight: 700;
	margin: 3px;
	&:hover {
		cursor: pointer;
	}
`;
