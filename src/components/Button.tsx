import { PropsWithChildren } from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

export type ButtonProps = {
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
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({ size }) =>
    size ? `font-size: ${styleToken.size[size]}` : "font-size: 20px"};
  ${({ colorScheme }) =>
    colorScheme
      ? `color: ${styleToken.colorScheme[colorScheme].color}`
      : "color: white"};
  ${({ colorScheme }) =>
    colorScheme
      ? `background-color: ${styleToken.colorScheme[colorScheme].backgroundColor}`
      : "background-color: pink"};
  ${({ color }) =>
    color ? `color: ${styleToken.color[color]}` : "color: white"};
  ${({ backgroundColor }) =>
    backgroundColor
      ? `background-color: ${styleToken.color[backgroundColor]}`
      : "background-color: pink"};
`;
