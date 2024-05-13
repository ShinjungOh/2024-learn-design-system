import { ChangeEvent, PropsWithChildren } from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  value,
  onChange,
  ...props
}: PropsWithChildren<InputProps>) {
  return <InputContainer value={value} onChange={onChange} {...props} />;
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
`;
