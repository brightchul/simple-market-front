import styled from "styled-components";
import React from "react";

interface MyCardProps {
  height?: string;
  width?: string;
  border?: string;
  hoverShadow?: string;
}

const CustomCard = styled.div`
  box-shadow: none;
  width: inherit;
  height: inherit;
`;
const CardWrapper = styled.div<MyCardProps>`
  border-radius: 4px;
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  &:hover {
    box-shadow: ${({ hoverShadow }) => hoverShadow};
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const MyCard: React.FC<MyCardProps> = ({ children, ...props }) => {
  return (
    <CardWrapper {...props}>
      <CustomCard>{children}</CustomCard>
    </CardWrapper>
  );
};

export { MyCard };
export default MyCard;
