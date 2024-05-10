import { PropsWithChildren } from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

type ButtonProps = {
  children?: React.ReactNode;
  color?: keyof typeof styleToken.color;
  backgroundColor?: keyof typeof styleToken.color;
  colorScheme?: keyof typeof styleToken.colorScheme;
  size?: keyof typeof styleToken.size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  color,
  backgroundColor,
  colorScheme,
  size,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      colorScheme={colorScheme}
      size={size}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) =>
    size ? `${styleToken.size[size]}` : `${styleToken.size.md}`};
  ${({ colorScheme }) =>
    colorScheme
      ? `color: ${styleToken.colorScheme[colorScheme].color}`
      : `color: ${styleToken.color.white}`};
  ${({ colorScheme }) =>
    colorScheme
      ? `background-color: ${styleToken.colorScheme[colorScheme].backgroundColor}`
      : `background-color: ${styleToken.color.lightGray}`};
  color: ${({ color }) =>
    color ? `${styleToken.color[color]}` : `${styleToken.color.white}`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor
      ? `${styleToken.color[backgroundColor]}`
      : `${styleToken.color.lightGray}`};
  :hover {
    opacity: 0.8;
    border-color: transparent;
  }
`;
