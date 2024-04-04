import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Logo = styled.img`
  max-width: auto;
  max-height: 60px;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.7rem;
  border: 1px solid #009DFF;
  border-radius: 20px;
  color: #79747E;
`;

export const Button = styled.button`
  padding: 0.7rem;
  font-size: 14px;
  background-color: #009DFF;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #002D7A;
  }
`;

export const FrameGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 2rem 0;
`;

export const Wrapper = styled.div`
  cursor: pointer;
`;

export const Div1 = styled.div`
  font-size: 1rem;
  color: #79747E;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div2 = styled.div`
  font-size: 1rem;
  color: #79747E;
  padding: 0 10px;
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SocialLoginTitle = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #79747E;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialButton = styled.button`
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: #fff;

  img {
    width: 45px;
    height: auto;
  }
`;
