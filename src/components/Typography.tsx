import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import styleToken from "../styles/styleToken.css.ts";

type TypographyProps = {
  children: React.ReactNode;
  fontSize?: keyof typeof styleToken.size;
  color?: keyof typeof styleToken.color;
  fontWeight?: keyof typeof styleToken.font;
} & HTMLAttributes<HTMLSpanElement>;

export default function Typography({
  children,
  color,
  fontWeight,
  fontSize,
}: PropsWithChildren<TypographyProps>) {
  return (
    <TypographyContainer
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
    >
      {children}
    </TypographyContainer>
  );
}

const TypographyContainer = styled.span<TypographyProps>`
  letter-spacing: -0.3px;
  line-height: 1.4;
  white-space: pre-wrap;
  color: ${({ color }) =>
    color ? `${styleToken.color[color]}` : `${styleToken.color.black}`};
  font-size: ${({ fontSize }) =>
    fontSize ? `${styleToken.size[fontSize]}` : `${styleToken.size.m}`};
  font-weight: ${({ fontWeight }) =>
    fontWeight
      ? `${styleToken.font[fontWeight]}`
      : `${styleToken.font.weightRegular}`};
`;
