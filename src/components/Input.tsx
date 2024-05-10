import { PropsWithChildren, useState } from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

type InputProps = {
  size?: keyof typeof styleToken.size;
  placeholder?: string;
  isDisabled?: boolean;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  size,
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
      size={size}
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
  font-size: ${({ size }) =>
    size ? `${styleToken.size[size]}` : `${styleToken.size.md}`};
`;
