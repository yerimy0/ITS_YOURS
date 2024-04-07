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
  width: 24px;
  height: 24px;
  background-image: url('/pencil.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const LikeAndBookmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const Button = styled.button`
  padding: 20px 30px;
  margin-top: 30px;
  width: 100%;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 1px solid #009DFF;
    color: #000;
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
  width: 24px;
  height: 24px;
  color: currentColor;
`;

const ArrowIcon = () => (
  <StyledArrowIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </StyledArrowIcon>
);

const InfoBox = styled.div`
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: ${(props) => props.border || 'none'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

const InfoBoxItem = ({ backgroundImage, text, border, width, height }) => (
  <InfoBox
    style={{ backgroundImage: `url(${backgroundImage})` }}
    border={border}
    width={width}
    height={height}
  >
    {text}
  </InfoBox>
);

const ProfileImage = styled.div`
  flex-shrink: 0;
  width: 290px;
  height: auto;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: blue;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  margin-left: auto;
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

const NavigationButton = ({ children, href }) => (
  <StyledButton onClick={() => window.location.href = href}>
    <ButtonContent>{children}</ButtonContent>
    <ArrowIcon />
  </StyledButton>
);

const Mypage = ({ userName, likes, bookmarks, profilePictureUrl }) => {
  return (
    <PageContainer>
      <ProfileSection>
        <LeftSection>
          <Greeting>안녕하세요 <NameBadge>{userName}<GreyCircle />님</NameBadge></Greeting>
          <LikeAndBookmark>
            <InfoBoxItem 
              backgroundImage="/thumbsup.png" 
              text={`좋아요 ${likes}`} 
              border="1px solid #DED8E1" 
              width="80px" 
              height="80px" 
            />
            <InfoBoxItem 
              backgroundImage="/wishheart.png" 
              text={`찜 ${bookmarks}`} 
              border="1px solid #DED8E1" 
              width="80px" 
              height="80px"
            />
          </LikeAndBookmark>
        </LeftSection>
        <RightSection>
          <ProfileImage imageUrl={profilePictureUrl} />
        </RightSection>
      </ProfileSection>
      <FlexColumn>
        <NavigationButton href="/mypage/saleslist">💰 판매내역</NavigationButton>
        <NavigationButton href="/mypage/purchaseslist">📘 구매내역</NavigationButton>
        <NavigationButton href="/mypage/faq">❓ 자주 묻는 질문</NavigationButton>
      </FlexColumn>
    </PageContainer>
  );
}

export default Mypage;