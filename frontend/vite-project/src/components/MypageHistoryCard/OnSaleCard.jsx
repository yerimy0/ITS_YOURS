import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../Modal';
import DateSlicer from '../../utils/dateSlicer';

function OnSaleCard({ id, imgUrl, price, name, createdAt, wishescount, onDelete }) {
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
					<ForSalesListImage src={imgUrl} alt="" onClick={() => navigate(`/product/${id}`)} />
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
					<Date>{DateSlicer(createdAt)}</Date>
				</SalesInfo>
				<ButtonBox>
					<EditBtn onClick={() => navigate(`/product/edit/${id}`)}>수정</EditBtn>
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
	align-items: center;
	/* padding: 10px; */
`;

const ImageBox = styled.div`
	border: 1px solid #ded8e1;

	&:hover {
		cursor: pointer;
	}
`;

const ForSalesListImage = styled.img`
	width: 100px;
	height: 150px;
`;

const SalesInfo = styled.div`
	margin-left: 10px;
	/* display: flex; */
	/* flex-direction: column; */
`;

const Title = styled.div`
	font-size: 20px;
	margin-bottom: 5px;

	@media (max-width: 800px) {
		font-size: 16px;
		width: 95%;
	}
`;

const PriceWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Price = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;

	@media (max-width: 800px) {
		margin-bottom: 0;
		font-size: 18px;
		font-weight: 500;
	}
`;

const Won = styled.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	margin-top: 5px;
	margin-left: 5px;

	@media (max-width: 800px) {
		margin: 0 0 0 4px;
		font-size: 14px;
		font-weight: 500;
	}
`;

const Stats = styled.div`
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	width: 22px;
	height: 22px;
	margin-right: 5px;

	@media (max-width: 800px) {
		width: 20px;
		height: 20px;
		margin-right: 3px;
	}
`;

const Status = styled.span`
	font-size: 18px;

	@media (max-width: 800px) {
		font-size: 16px;
	}
`;

const Date = styled.span`
	font-size: 16px;

	@media (max-width: 800px) {
		font-size: 14px;
	}
`;

const ButtonBox = styled.div`
	margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
	display: flex;

	@media (max-width: 800px) {
		flex-direction: column;
		gap: 10px;
	}
`;

const EditBtn = styled.button`
	border-radius: 5px;
	border: 1px solid #009dff;
	padding: 10px 0;
	width: 100px;
	color: #009dff;
	font-size: 16px;
	font-weight: 500;
	margin-right: 10px;

	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}

	@media (max-width: 800px) {
		width: 70px;
		margin: 0;
		padding: 5px 0;
	}
`;

const DeleteBtn = styled.button`
	border-radius: 5px;
	border: 1px solid #ded8e1;
	padding: 10px 0;
	width: 100px;
	font-size: 16px;
	font-weight: 500;

	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}

	@media (max-width: 800px) {
		width: 70px;
		margin: 0;
		padding: 5px 0;
	}
`;
