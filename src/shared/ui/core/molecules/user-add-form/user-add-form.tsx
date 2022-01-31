import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TUser } from "../../../../types/User";

type TStyle = {
  isError?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentForm = styled.div`
  border-radius: 8px;
  border: 2px solid #f3f3f3;

  margin-bottom: 10px;

  padding: 20px 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 3px;
`;

const Input = styled.input<TStyle>`
  width: 40%;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ isError }) => (isError ? "#D91313" : "#d8d8d8")};
  box-sizing: border-box;

  padding: 5px 10px;

  font-size: 12px;
  line-height: 14px;
`;

const TextArea = styled.textarea`
  resize: none;

  width: 60%;
  border-radius: 5px;
  border: 2px solid #d8d8d8;
  box-sizing: border-box;
`;

const ButtonSubmit = styled.input`
  display: block;
  margin-left: auto;

  border: none;
  border-radius: 5px;
  padding: 5px 6px 5px 15px;

  background-color: #52cf4f;

  color: #fff;
  font-size: 14px;
  line-height: 16px;

  cursor: pointer;
`;

type TProps = {
  onSubmitForm: (data: { [key: string]: string }) => void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitAddUserForm: (data: { [key: string]: string }) => void;
};

type TFormData = {
  [key: string]: string;
};

export const UserAddForm: React.FC<TProps> = ({
  onSubmitForm,
  setActive,
  onSubmitAddUserForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit = (data: TFormData) => {
    onSubmitAddUserForm(data);
    setActive(false);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentForm>
          <InputWrapper>
            <Label>Name</Label>
            <Input
              {...register(`name`, { required: true })}
              isError={!!errors.name}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>User name</Label>
            <Input
              {...register(`username`, { required: true })}
              isError={!!errors.username}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>E-mail</Label>
            <Input
              {...register(`email`, { required: true })}
              isError={!!errors.email}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Street</Label>
            <Input
              {...register(`street`, { required: true })}
              isError={!!errors.street}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>City</Label>
            <Input
              {...register(`city`, { required: true })}
              isError={!!errors.city}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Zip code</Label>
            <Input
              {...register(`zipcode`, { required: true })}
              isError={!!errors.zipcode}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Phone</Label>
            <Input
              {...register(`phone`, { required: true })}
              isError={!!errors.phone}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Website</Label>
            <Input
              {...register(`website`, { required: true })}
              isError={!!errors.website}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Comment</Label>
            <TextArea
              {...register(`comment`)}
              defaultValue={""}
              rows={3}
              cols={10}
            />
          </InputWrapper>
        </ContentForm>

        <ButtonSubmit type="submit" value="Добавить" />
      </form>
    </Wrapper>
  );
};
