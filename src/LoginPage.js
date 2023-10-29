import React from "react";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #3494e6, #ec6ead);
`;

const LoginForm = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 340px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const LoginTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3494e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2b83c5;
  }

  &:active {
    background-color: darkblue;
  }
`;

const LinksBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Links = styled.a`
  color: #3494e6;
  opacity: .8;
  text-decoration: underline;
  font-size: 14px;
  margin: 5px 0;

  &:hover{
    opacity: 1;
  }
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm>
        <LoginTitle>Login</LoginTitle>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton>Submit</SubmitButton>
        <LinksBlock>
          <Links href="#">Forgot Password</Links>
          <Links href="#">Signup</Links>
        </LinksBlock>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
