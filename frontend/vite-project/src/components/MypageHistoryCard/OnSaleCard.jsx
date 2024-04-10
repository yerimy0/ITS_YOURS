import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const OnSaleCard = ({ itemId, onDelete, onEdit }) => {
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
		onDelete(itemId);
		closeDeleteModal();
	};

	return (
		<>
			{itemData ? (
				<ProductCardWrap>
					<ImageBox>
						<ForSalesListImage src={itemData.image} alt={itemData.title} />
					</ImageBox>
					<SalesInfo>
						<Title>{itemData.title}</Title>
						<Price>{`${itemData.price}원`}</Price>
						<Stats>
							<Icon src="heart.svg" alt="Wish" />
							<Status>{itemData.like}</Status>
							<Icon src="chat_bubble_oval.svg" alt="Chat" />
							<Status>{itemData.chat}</Status>
						</Stats>
						<Date>{itemData.Date}</Date>
					</SalesInfo>
					<ButtonBox>
						<EdditBtn onClick={() => onEdit(itemId)}>수정</EdditBtn>
						<DeleteBtn onClick={openDeleteModal}>삭제</DeleteBtn>
					</ButtonBox>
				</ProductCardWrap>
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

export default OnSaleCard;

const ProductCardWrap = styled.div`
	display: flex;
	padding: 10px;
	&:hover {
		cursor: pointer;
	}
`;

const ImageBox = styled.div`
	border: 1px solid #ded8e1;
	padding: 10px;
`;

const ForSalesListImage = styled.img`
	width: 100px;
	height: 150px;
`;

const SalesInfo = styled.div`
	margin-left: 10px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: 20px;
	font-weight: 300;
	font-family: SUIT;
`;

const Price = styled.span`
	font-size: 24px;
	font-weight: 700;
	font-family: SUIT;
`;

const Stats = styled.div`
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	width: 22px;
	height: 22px;
	margin-right: 5px;
`;

const Status = styled.span`
	font-size: 20px;
	margin-right: 10px;
`;

const Date = styled.span`
	font-size: 18px;
`;

const ButtonBox = styled.div`
	margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
	display: flex;
	padding-top: 50px;
`;

const EdditBtn = styled.button`
	border-radius: 20px;
	border: 1px solid #009dff;
	background: #fff;
	width: 66px;
	height: 53px;
	color: #009dff;
	font-family: SUIT;
	font-size: 16px;
	font-weight: 700;
	margin: 3px;
	&:hover {
		cursor: pointer;
	}
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
