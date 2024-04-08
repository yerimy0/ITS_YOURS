import ChatWrap from "./ChatStyle";
import ChatList from "../../components/pages/Chat/ChatList";
import DefaultChatRoom from "../../components/pages/Chat/DefaultChatRoom";
import ChatRoom from "../../components/pages/Chat/ChatRoom";

function Chat() {
  return (
    <ChatWrap>
      <ChatList />
      {/* <DefaultChatRoom /> */}
      <ChatRoom />
    </ChatWrap>
  );
}

export default Chat;
