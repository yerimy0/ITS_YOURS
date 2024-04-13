import styled from "styled-components" 

const DefaultChatRoomWrap = styled.section`
  display: flex;
  width: 600px;
  height: 750px;
  padding: 10px 10px 15px 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ImgContainer = styled.div`
  top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 40%;
  height: auto;
`;
const Text = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export {DefaultChatRoomWrap, ImgContainer, Img, Text};