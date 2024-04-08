import React from 'react';
import {ProductDetail, BookCover, BookImg, ProductContent, SalesInfo, BookContainer, ChatButton} from './ProductDetailHeaderStyle';
import BookInfoWrap from './BookInfoWrap';
import ProductInfoWrap from './ProductInfoWrap';
import SellerProfileWrap from './SellerProfileWrap';


function ProductDetailHeader () {

  return (
    <ProductDetail>
      <BookCover>
        <BookImg src='/book_cover.jpg' />
      </BookCover>
      <ProductContent>
        <SalesInfo>
          <SellerProfileWrap />
          <ProductInfoWrap />
        </SalesInfo>
        <BookContainer>
          <BookInfoWrap />
          <ChatButton>채팅하기</ChatButton>
        </BookContainer>
      </ProductContent>
    </ProductDetail>
  );
}

export default ProductDetailHeader;