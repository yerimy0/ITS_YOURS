import React, { useState } from 'react';
import { Form, Input, Button } from './UsersStyles';

const ProfileForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [university, setUniversity] = useState('');
  const [nickname, setNickname] = useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // onSubmit({
    //   userId,
    //   password,
    //   confirmPassword,
    //   name,
    //   email,
    //   phone,
    //   university,
    //   nickname,
    // });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input type="text" placeholder="*아이디를 입력해주세요" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <Input type="password" placeholder="*비밀번호를 입력해주세요" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input type="password" placeholder="*비밀번호를 다시 입력해주세요" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <Input type="text" placeholder="*이름을 입력해주세요" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" placeholder="*이메일을 입력해주세요" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="tel" placeholder="*휴대폰 번호를 입력해주세요" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Input type="text" placeholder="대학명을 입력해주세요" value={university} onChange={(e) => setUniversity(e.target.value)} />
      <Input type="text" placeholder="*닉네임을 입력해주세요" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <Button type="submit">회원가입하기</Button>
    </Form>
  );
};

export default ProfileForm;
