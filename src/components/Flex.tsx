import { CSSProperties, PropsWithChildren } from "react";
import styled from "@emotion/styled";

type FlexProps = {
  direction?: CSSProperties["flexDirection"];
} & React.HTMLAttributes<HTMLDivElement>;

export default function Flex({
  children,
  direction,
  ...props
}: PropsWithChildren<FlexProps>) {
  return (
    <FlexContainer direction={direction} {...props}>
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  padding: 10px;
  flex-wrap: wrap;
`;
