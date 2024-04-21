import {DefaultChatRoomWrap, ImgContainer, Img, Text} from './DefaultChatRoomStyle';

function DefaultChatRoom() {
  return (
    <DefaultChatRoomWrap>
      <ImgContainer>
        <Img src='./main_character.png' />
      </ImgContainer>
      <Text>누구와 대화하고 싶으신가요?</Text>
    </DefaultChatRoomWrap>
  )
}

export default DefaultChatRoom;