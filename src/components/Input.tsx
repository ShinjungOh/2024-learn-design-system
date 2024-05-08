import { PropsWithChildren, useState } from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

type InputProps = {
  fontSize?: keyof typeof styleToken.size;
  placeholder?: string;
  isDisabled?: boolean;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  fontSize,
  placeholder,
  isDisabled,
  required,
  ...props
}: PropsWithChildren<InputProps>) {
  const [input, setInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <InputContainer
      fontSize={fontSize}
      placeholder={placeholder}
      disabled={isDisabled}
      value={input}
      required={required}
      onChange={onChange}
      {...props}
    />
  );
}

const InputContainer = styled.input<InputProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  margin: 8px 0;
  outline: none;
  border: 1px solid ${styleToken.color.lightGray};
  border-radius: 4px;
  color: ${styleToken.color.gray};
  font-size: ${({ fontSize }) =>
    fontSize ? `${styleToken.size[fontSize]}` : `${styleToken.size.m}`};
`;
