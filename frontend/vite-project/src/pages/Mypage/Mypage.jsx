import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 100px 300px;
`;

const Greeting = styled.h1`
  font-size: 54px;
  margin-bottom: 20px;
`;

const NameBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 64px;
`;

const GreyCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  border-radius: 50%;
  padding: 8px;
  width: 24px; /* SVG 이미지 크기에 맞게 조정 */
  height: 24px; /* SVG 이미지 크기에 맞게 조정 */
  background-image: url('/pencil.svg'); /* public 폴더 내의 SVG 파일을 배경 이미지로 설정 */
  background-repeat: no-repeat;
  background-position: center;
  font-size: 64px;
`;

const LikeAndBookmark = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: flex-start; /* 내용을 왼쪽으로 정렬 */
  gap: 20px; /* 요소 간 간격 조정 */
`;

const Button = styled.button`
  padding: 20px 30px;
  margin-top: 30px;
  width: 100%;
  color : #000;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff; 
  border: 1px solid #000; 
  border-radius: 20px; 
  cursor: pointer; 

  &:hover {
    background-color: #fff; /* 마우스 호버 시 배경색 유지 */
    border: 1px solid #009DFF; /* 마우스 호버 시 테두리 색상을 #009DFF로 변경 */
    color: #000; /* 마우스 호버 시 글자색을 검정색으로 유지 (필요에 따라 변경 가능) */
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContent = styled.span`
  flex: 1;
  text-align: left;
`;

const StyledArrowIcon = styled.svg`
  width: 24px; /* 원하는 너비로 설정 */
  height: 24px; /* 원하는 높이로 설정 */
  color: currentColor; /* SVG의 색상을 부모 요소의 글자 색상으로 설정 */
`;

const ArrowIcon = () => (
  <StyledArrowIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </StyledArrowIcon>
);

const InfoBox = styled.div`
  padding: 10px 20px;
  margin: 10px 0; /* 상하 간격 조정 */
  border-radius: 10px; /* 둥근 모서리 */
  background-size: cover; /* 배경 이미지가 박스 크기에 맞게 조절되도록 설정 */
  background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
  display: flex;
  align-items: center; /* 내용을 수직 중앙 정렬 */
  justify-content: center; /* 내용을 수평 중앙 정렬 */
  color: #fff; /* 텍스트 색상 */
`;

const LikesBox = styled(InfoBox)`
  background-image: url('/thumbsup.png'); /* "좋아요" 박스의 배경 이미지 */
  border: 1px solid #DED8E1; /* "좋아요" 박스의 테두리 색상과 스타일 */
  width: 80px;
  height: 80px;
`;

const BookmarksBox = styled(InfoBox)`
  background-image: url('/wishheart.png'); /* "찜" 박스의 배경 이미지 */
  border: 1px solid #DED8E1; /* "찜" 박스의 테두리 색상과 스타일 */
  width: 80px;
  height: 80px;
`;

const ProfileImage = styled.div`
  flex-shrink: 0; /* 이 속성은 컴포넌트가 축소되지 않도록 보장합니다. */
  width: 290px;
  height: auto; /* 자동 높이 조절 */
  aspect-ratio: 1 / 1; /* 1:1 비율 유지 */
  border-radius: 50%;
  background-color: blue;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  margin-left: auto; /* 우측으로 이동 */
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div``;

const Mypage = ({ userName, likes, bookmarks, profilePictureUrl }) => {
  return (
    <PageContainer>
      <ProfileSection>
        <LeftSection>
          <Greeting>안녕하세요 <NameBadge>{userName}<GreyCircle />님</NameBadge></Greeting>
          <LikeAndBookmark>
            <LikesBox>좋아요 {likes}</LikesBox>
            <BookmarksBox>찜 {bookmarks}</BookmarksBox>
          </LikeAndBookmark>
        </LeftSection>
        <RightSection>
          <ProfileImage imageUrl={profilePictureUrl} />
        </RightSection>
      </ProfileSection>
      {/* 네비게이션 섹션 */}
      <FlexColumn>
        <StyledButton onClick={() => window.location.href = '/mypage/saleslist'}>
          <ButtonContent>💰 판매내역</ButtonContent>
          <ArrowIcon />
        </StyledButton>
        <StyledButton onClick={() => window.location.href = '/mypage/purchaseslist'}>
          <ButtonContent>📘 구매내역</ButtonContent>
          <ArrowIcon />
        </StyledButton>
        <StyledButton onClick={() => window.location.href = '/mypage/faq'}>
          <ButtonContent>❓ 자주 묻는 질문</ButtonContent>
          <ArrowIcon />
        </StyledButton>
      </FlexColumn>
    </PageContainer>
  );
}

export default Mypage;
