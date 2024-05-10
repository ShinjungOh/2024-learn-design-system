import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import styleToken from "../styles/styleToken.css";

const VARIANT = {
  h1: { fontWeight: styleToken.font.weightBold, fontSize: "32px" },
  h2: { fontWeight: styleToken.font.weightBold, fontSize: "28px" },
  h3: { fontWeight: styleToken.font.weightBold, fontSize: "24px" },
  h4: { fontWeight: styleToken.font.weightBold, fontSize: "20px" },
  subtitle1: { fontWeight: styleToken.font.weightMedium, fontSize: "20px" },
  subtitle2: { fontWeight: styleToken.font.weightMedium, fontSize: "18px" },
  subtitle3: { fontWeight: styleToken.font.weightMedium, fontSize: "16px" },
  subtitle4: { fontWeight: styleToken.font.weightMedium, fontSize: "14px" },
  body1: { fontWeight: styleToken.font.weightRegular, fontSize: "18px" },
  body2: { fontWeight: styleToken.font.weightRegular, fontSize: "16px" },
  body3: { fontWeight: styleToken.font.weightRegular, fontSize: "14px" },
  body4: { fontWeight: styleToken.font.weightRegular, fontSize: "12px" },
} as const;

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "subtitle4"
  | "body1"
  | "body2"
  | "body3"
  | "body4";

type TypographyProps = {
  children: React.ReactNode;
  variant: TypographyVariant;
  size?: keyof typeof styleToken.size;
  colorScheme?: keyof typeof styleToken.color;
  fontWeight?: keyof typeof styleToken.font;
} & HTMLAttributes<HTMLSpanElement>;

export default function Typography({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) {
  return <TypographyContainer {...props}>{children}</TypographyContainer>;
}

const TypographyContainer = styled.span<TypographyProps>`
  letter-spacing: -0.3px;
  line-height: 1.4;
  white-space: pre-wrap;
  ${(props) => VARIANT[props.variant]};
  ${(props) => props.colorScheme && `color: ${props.colorScheme}`};
  ${(props) => props.size && `font-size: ${props.size}`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
`;
