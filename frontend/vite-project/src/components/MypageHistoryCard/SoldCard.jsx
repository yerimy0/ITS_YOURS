import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

function SoldCard({ isCompleted, imgUrls, price, name, wishescount, onDelete }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openDeleteModal = () => {
		setIsModalOpen(true);
	};

	const closeDeleteModal = () => {
		setIsModalOpen(false);
	};

	const handleSoldDelete = () => {
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
					<PriceWrapper>
						<Price>{Number(price).toLocaleString()}</Price>
						<Won>원</Won>
					</PriceWrapper>
					<Stats>
						<Icon src="/heart.svg" alt="Wish" />
						<Status>{wishescount}</Status>
					</Stats>
					{isCompleted && <SoldCompleteDiv>판매완료</SoldCompleteDiv>}
				</SalesInfo>
				<ButtonBox>
					<DeleteBtn onClick={openDeleteModal}>삭제</DeleteBtn>
				</ButtonBox>
			</ProductCardWrap>
			<Modal
				isOpen={isModalOpen}
				onClose={closeDeleteModal}
				title="정말 삭제하시겠습니까?"
				content="삭제된 데이터는 복구할 수 없습니다."
				confirmText="확인"
				onConfirm={handleSoldDelete}
			/>
		</>
	);
}

export default SoldCard;

const ProductCardWrap = styled.div`
	display: flex;
	align-items: center;
`;

const ImageBox = styled.div`
	border: 1px solid #ded8e1;
	padding: 10px;
`;

const ForSalesListImage = styled.img`
	width: 100px;
	height: 150px;
	object-fit: cover;
`;

const SalesInfo = styled.div`
	margin-left: 10px;
`;

const Title = styled.div`
	font-size: 20px;
	margin-bottom: 5px;
`;

const PriceWrapper = styled.div`
	display: flex;
	align-items: baseline;
`;

const Price = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;
`;

const Won = styled.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	margin-left: 5px;
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
	font-size: 18px;
`;

const ButtonBox = styled.div`
	margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
	display: flex;
	padding-top: 50px;
`;

const DeleteBtn = styled.button`
	width: 100px;
	padding: 10px 0;
	border-radius: 5px;
	border: 1px solid #ded8e1;
	background: #fff;
	font-size: 16px;
	font-weight: 500;

	&:hover {
		border: 1px solid #606060;
		background-color: #606060;
		color: #fff;
		transition: all 0.5s;
	}
`;

const SoldCompleteDiv = styled.div`
	font-size: 16px;
	border: 1px solid #666;
	background: #666666;
	color: #ffffff;
	border-radius: 5px;
	width: 100px;
	margin-top: 5px;
	padding: 5px 0;
	text-align: center;
`;
