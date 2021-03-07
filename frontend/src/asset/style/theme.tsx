import { DefaultTheme } from "styled-components";

interface MyColor {
  primary700: string;
  primary500: string;
  gray000: string;
  gray600: string;
  gray900: string;
  warning: string;
}

interface FontProps {
  fontFamily: string;
  fontweight: string;
  fontStyle?: string;
  fontSize: string;
  lineHeight: string;
}

interface MyFont {
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

interface MyTheme extends DefaultTheme {
  color: MyColor;
  font: MyFont;
}

const theme: MyTheme = {
  color: {
    primary700: "#1565C0",
    primary500: "#2196F3",
    gray000: "#FFFFFF",
    gray600: "#939FA5",
    gray900: "#323D45",
    warning: "#FFA000",
  },
  font: {
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
  },
};

export type { MyTheme, MyColor, MyFont };
export { theme };
export default theme;
