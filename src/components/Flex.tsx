import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import styleToken from "../styles/styleToken.css.ts";

type FlexProps = {
  children?: React.ReactNode;
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  width?: number;
  height?: string;
  fontSize?: keyof typeof styleToken.size;
  color?: keyof typeof styleToken.color;
  backgroundColor?: keyof typeof styleToken.color;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Flex({
  children,
  direction,
  width,
  height,
  color,
  backgroundColor,
  fontSize,
}: PropsWithChildren<FlexProps>) {
  return (
    <FlexContainer
      direction={direction}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  padding: 10px;
  flex-wrap: wrap;
  border: 1px solid transparent;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}` : "auto")};
  font-size: ${({ fontSize }) =>
    fontSize ? `${styleToken.size[fontSize]}` : `${styleToken.size.m}`};
  color: ${({ color }) =>
    color ? `${styleToken.color[color]}` : `${styleToken.color.black}`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor
      ? `${styleToken.color[backgroundColor]}`
      : `${styleToken.color.lightGray}`};
`;
