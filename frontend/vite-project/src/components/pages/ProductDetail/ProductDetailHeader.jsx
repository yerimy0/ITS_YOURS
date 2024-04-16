import React, { useEffect, useState } from 'react';
import {
	ProductDetail,
	BookCover,
	ProductContent,
	SalesInfo,
	BookContainer,
	ChatButton,
	ProductInfoTextWrap,
	Title,
	ProductInfoText,
} from './ProductDetailHeaderStyle';
import BookInfoWrap from './BookInfoWrap';
import ProductInfoWrap from './ProductInfoWrap';
import SellerProfileWrap from './SellerProfileWrap';
import { useParams, useNavigate } from 'react-router-dom';
import { GetDetail } from '../../../apis/service/product.api';
import ProductDetailContainer from './ProductDetailContainer';
import BookImgSlider from '../../BookImgSlider';

function ProductDetailHeader() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const loadProductData = async () => {
			if (id) {
				// 상품 ID가 존재할 때만 데이터를 가져옵니다.
				try {
					const productData = await GetDetail(id);
					setProduct(productData);
				} catch (error) {
					console.error('상품 데이터를 불러오는 중 에러 발생:', error);
				}
			} else {
				console.error('올바르지 않은 상품 ID:', id);
			}
		};
		loadProductData();
	}, [id]);

	// 채팅하기 버튼 클릭 시 채팅 화면으로 이동
	const handleChatButtonClick = () => {
		navigate(`/chat`); // 채팅 화면으로 이동
	};

	return (
		<ProductDetail>
			<BookCover>{product.imgUrls && <BookImgSlider images={product.imgUrls} />}</BookCover>
			<ProductContent>
				<SalesInfo>
					{product.sellerId && <SellerProfileWrap id={product.sellerId} />}
					<ProductInfoWrap productId={product._id} name={product.name} price={product.price} />
				</SalesInfo>
				<BookContainer>
					<BookInfoWrap
						author={product.author}
						publisher={product.publisher}
						condition={product.condition}
					/>
					<ChatButton onClick={handleChatButtonClick}>채팅하기</ChatButton>
				</BookContainer>
			</ProductContent>
			<ProductInfoTextWrap>
				<Title>상품 정보</Title>
				<ProductInfoText>{product.description}</ProductInfoText>
			</ProductInfoTextWrap>
			<ProductDetailContainer product={product} />
		</ProductDetail>
	);
}

export default ProductDetailHeader;
