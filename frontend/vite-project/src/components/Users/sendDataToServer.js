const sendDataToServer = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('서버 통신 실패');
      }
  
      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error('Error sending data to server:', error);
      return false;
    }
  };
  
  export default sendDataToServer;
  
//api 통신 같은 경우 axios를 통해서 할 예정입니다. 해당 코드는 test용으로만 놔두시고, 추후 변경 건에 대해서 적용할 수 있도록 준비해주세요.
//추가적으로 여기 있는 코드는 UI를 렌더링하는 코드가 아닙니다. 확장자명은 .js로 바꿔주세요.