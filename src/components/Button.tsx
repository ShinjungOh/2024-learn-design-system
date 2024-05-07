import {PropsWithChildren} from "react";
import styleToken from "../styles/styleToken.css";
import styled from "@emotion/styled";

export type ButtonProps = {
    children?: React.ReactNode;
    color?: keyof typeof styleToken.color | string;
    backgroundColor?: keyof typeof styleToken.color | string;
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
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${({color}) => color ? `color: ${color}` : 'color: white'};
    ${({size}) => size ? `font-size: ${styleToken.size[size]}` : 'font-size: 20px'};
    ${({colorScheme}) => colorScheme ? `color: ${styleToken.colorScheme[colorScheme].color}` : 'color: white'};
    ${({colorScheme}) => colorScheme ? `background-color: ${styleToken.colorScheme[colorScheme].backgroundColor}` : 'background-color: pink'};
`;
