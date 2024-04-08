import React, { useState } from 'react';
import ProfileImageUploader from '../../Users/ProfileImageUploader';
import { Form, Input, Button } from '../../Users/UsersStyles'; 

function ProfileEditForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [university, setUniversity] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    if (password) { // 비밀번호 변경 여부 체크
      formData.append('password', password);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('university', university);
    formData.append('nickname', nickname);

    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    
    // 서버에 개인정보 수정 요청을 보내는 코드를 여기에 추가하세요.
    console.log('개인정보 수정 로직을 구현하세요.');
    // 예: const response = await fetch('YOUR_API_UPDATE_ENDPOINT', { method: 'POST', body: formData, credentials: 'include' });
    // 응답 처리 로직
  };

  return (
    <>
      <ProfileImageUploader onImageSelected={setProfileImage} />
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="아이디" value={userId} onChange={(e) => setUserId(e.target.value)} disabled />
        <Input type="password" placeholder="비밀번호 (변경할 경우만 입력)" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="tel" placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input type="text" placeholder="대학명" value={university} onChange={(e) => setUniversity(e.target.value)} />
        <Input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <Button type="submit">수정하기</Button>
      </Form>
    </>
  );
};

export default ProfileEditForm;
