import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../Modal';

function OnSaleCard({ imgUrls, price, name, sellDate, like, chat, onDelete }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	const openDeleteModal = () => {
		setIsModalOpen(true);
	};

	const closeDeleteModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirmDelete = () => {
		onDelete();
		closeDeleteModal();
	};

	return (
		<>
			<ProductCardWrap>
				<ImageBox>
					<ForSalesListImage src={imgUrls} alt="" />
				</ImageBox>
				<SalesInfo>
					<Title>{name}</Title>
					<Price>{price}</Price>
					<Won>원</Won>
					<Stats>
						<Icon src="heart.svg" alt="Wish" />
						<Status>{like}</Status>
						<Icon src="chat_bubble_oval.svg" alt="Chat" />
						<Status>{chat}</Status>
					</Stats>
					<Date>{sellDate}</Date>
				</SalesInfo>
				<ButtonBox>
					<EdditBtn onClick={() => navigate(`/product/edit/${id}`)}>수정</EdditBtn>
					<DeleteBtn onClick={openDeleteModal}>삭제</DeleteBtn>
				</ButtonBox>
			</ProductCardWrap>
			<Modal
				isOpen={isModalOpen}
				onClose={closeDeleteModal}
				title="정말 삭제하시겠습니까?"
				content="삭제된 데이터는 복구할 수 없습니다."
				confirmText="확인"
				onConfirm={handleConfirmDelete}
			/>
		</>
	);
}

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

const Won = styled.div`
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
