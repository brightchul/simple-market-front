import styled from "styled-components";
import { MyColor, MyFont } from "../../asset/style";

interface MyTextProps {
  myColor?: keyof MyColor;
  myFont: keyof MyFont;
}

const MyText = styled.div<MyTextProps>`
  color: ${({ theme, myColor = "gray900" }) => theme.color[myColor]};
  font-family: ${({ theme, myFont }) => theme.font[myFont].fontFamily};
  font-weight: ${({ theme, myFont }) => theme.font[myFont].fontweight};
  font-size: ${({ theme, myFont }) => theme.font[myFont].fontSize};
  line-height: ${({ theme, myFont }) => theme.font[myFont].lineHeight};
`;

export { MyText };
export default MyText;
