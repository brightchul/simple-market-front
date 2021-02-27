import { Card } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const CustomCard = styled(Card)``;
const CardWrapper = styled.div``;

const MyCard: React.FC = () => {
  return (
    <CardWrapper>
      <CustomCard>test</CustomCard>
    </CardWrapper>
  );
};

export { MyCard };
export default MyCard;
