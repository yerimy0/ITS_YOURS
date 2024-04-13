import React, { useEffect, useState } from 'react';
import {
	ProductDetail,
	BookCover,
	BookImg,
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
import { useParams } from 'react-router-dom';
import instance from '../../../apis/axiosInstance';

function ProductDetailHeader() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			if (id) {
				// 상품 ID가 존재할 때만 데이터를 가져옵니다.
				try {
					const res = await instance.get(`/products/${id}`);
					setProduct(res.data);
				} catch (error) {
					console.error('상품 데이터를 불러오는 중 에러 발생:', error);
				}
			} else {
				console.error('올바르지 않은 상품 ID:', id);
			}
		};
		fetchProduct();
	}, [id]);
	return (
		<ProductDetail>
			<BookCover>
				<BookImg src={product.imgUrls} alt={product.name} />
			</BookCover>
			<ProductContent>
				<SalesInfo>
					<SellerProfileWrap sellerId={product.sellerId} />
					<ProductInfoWrap productId={product._id} name={product.name} price={product.price} />
				</SalesInfo>
				<BookContainer>
					<BookInfoWrap
						author={product.author}
						publisher={product.publisher}
						condition={product.condition}
					/>
					<ChatButton>채팅하기</ChatButton>
				</BookContainer>
			</ProductContent>
			<ProductInfoTextWrap>
				<Title>상품 정보</Title>
				<ProductInfoText>{product.description}</ProductInfoText>
			</ProductInfoTextWrap>
		</ProductDetail>
	);
}

export default ProductDetailHeader;
