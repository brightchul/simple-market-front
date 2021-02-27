import styled from "styled-components";

interface FontProps {
  fontFamily: string;
  fontweight: string;
  fontStyle?: string;
  fontSize: string;
  lineHeight: string;
}

interface ThemeFont {
  "12pt-400": FontProps;
  "12pt-500": FontProps;

  "14pt-400": FontProps;
  "14pt-500": FontProps;
  "14pt-600": FontProps;

  "16pt-400": FontProps;
  "16pt-600": FontProps;

  "20pt-600": FontProps;

  "roboto-12-500": FontProps;
}

export const myFontStyle: ThemeFont = {
  "12pt-400": {
    fontFamily: "Noto Sans KR",
    fontweight: "400",
    fontSize: "12px",
    lineHeight: "20px",
  },
  "12pt-500": {
    fontFamily: "Noto Sans KR",
    fontweight: "500",
    fontSize: "12px",
    lineHeight: "20px",
  },

  "14pt-400": {
    fontFamily: "Noto Sans KR",
    fontweight: "400",
    fontSize: "14px",
    lineHeight: "20px",
  },
  "14pt-500": {
    fontFamily: "Noto Sans KR",
    fontweight: "500",
    fontSize: "14px",
    lineHeight: "20px",
  },
  "14pt-600": {
    fontFamily: "Noto Sans KR",
    fontweight: "600",
    fontSize: "14px",
    lineHeight: "20px",
  },

  "16pt-400": {
    fontFamily: "Noto Sans KR",
    fontweight: "400",
    fontSize: "16px",
    lineHeight: "24px",
  },
  "16pt-600": {
    fontFamily: "Noto Sans KR",
    fontweight: "600",
    fontSize: "16px",
    lineHeight: "24px",
  },

  "20pt-600": {
    fontFamily: "Noto Sans KR",
    fontweight: "600",
    fontSize: "20px",
    lineHeight: "32px",
  },

  "roboto-12-500": {
    fontFamily: "Roboto",
    fontweight: "500",
    fontSize: "12px",
    lineHeight: "14.06px",
  },
};

interface MyTextProps {
  myfont: keyof ThemeFont;
}

const MyText = styled.div<MyTextProps>`
  font-family: ${({ myfont }) => myFontStyle[myfont].fontFamily};
  font-weight: ${({ myfont }) => myFontStyle[myfont].fontweight};
  font-size: ${({ myfont }) => myFontStyle[myfont].fontSize};
  line-height: ${({ myfont }) => myFontStyle[myfont].lineHeight};
`;

export { MyText };
export default MyText;
