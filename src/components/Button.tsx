import { CSSProperties, PropsWithChildren } from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

type ButtonProps = {
  color?: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
  colorScheme?: keyof typeof styleToken.colorScheme;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  color,
  backgroundColor,
  colorScheme,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      colorScheme={colorScheme}
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
  ${({ colorScheme }) =>
    colorScheme
      ? `color: ${styleToken.colorScheme[colorScheme].color}`
      : `color: ${styleToken.color.white}`};
  ${({ colorScheme }) =>
    colorScheme
      ? `background-color: ${styleToken.colorScheme[colorScheme].backgroundColor}`
      : `background-color: ${styleToken.color.lightGray}`};
  color: ${({ color }) => color && `${color}`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && `${backgroundColor}`};
  :hover {
    opacity: 0.8;
    border-color: transparent;
  }
`;
