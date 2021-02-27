import { DefaultTheme } from "styled-components";

interface MyFontColor {
  primary700: string;
  primary500: string;
  gray000: string;
  gray600: string;
  gray900: string;
}

interface MyTheme extends DefaultTheme {
  color: MyFontColor;
}

const theme: MyTheme = {
  color: {
    primary700: "#1565C0",
    primary500: "#2196F3",
    gray000: "#FFFFFF",
    gray600: "#939FA5",
    gray900: "#323D45",
  },
};

export type { MyTheme, MyFontColor };
export { theme };
export default theme;
