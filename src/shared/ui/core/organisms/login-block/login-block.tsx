import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "../../../../fonts/index.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #e5e5e5;

  font-family: "LexendDeca";

  width: 30%;
`;

const TopTypography = styled.div`
  margin-bottom: 36px;
`;

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 80px;
  line-height: 96px;
  padding: 0 24px;

  color: #224957;
`;

const Subtitle = styled.div`
  font-size: 24px;
  line-height: 36px;

  color: #224957;
`;

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 60%;

  padding: 0 48px;
`;

const Input = styled.input`
  padding: 18px 24px;
  border: 1px solid #224957;
  border-radius: 15px;

  background-color: #224957;

  color: #fff;
  font-family: "LexendDeca";

  font-size: 18px;

  &::placeholder {
    color: #fff;
  }
  &:focus {
    outline: none;
  }

  & + & {
    margin-top: 32px;
  }
`;

const Button = styled.input`\
  margin-top : 24px;
  background : #20df7f;
  padding : 13px 0;


  border : none;
  border-radius : 10px;

  color : #224957;
  font-family : 'LexendDeca';
  font-size : 18px;
  line-height : 24px;

  &:focus{
    outline : none;
  }
`;

type TProps = {
  onSubmitAuth: (data: TFormData) => void;
};

type TFormData = {
  [key: string]: string;
};

export const LoginBlock: React.FC<TProps> = ({ onSubmitAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  return (
    <Wrapper>
      <TopTypography>
        <Title>Sign in</Title>
        <Subtitle>Sign in and start managing your candidates!</Subtitle>
      </TopTypography>
      <Form onSubmit={handleSubmit(onSubmitAuth)}>
        <Input {...register("login", { required: true })} placeholder="Login" />
        <Input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        <Button type="submit" value="Login" />
      </Form>
    </Wrapper>
  );
};
