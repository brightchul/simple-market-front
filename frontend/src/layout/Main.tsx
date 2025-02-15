import Header from "./Header";
import Section from "./Section";
import styled from "@emotion/styled";

const MainWrapper = styled.div``;

const Main: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <Header />
      <Section>{children}</Section>
    </MainWrapper>
  );
};

export { Main };
export default Main;
