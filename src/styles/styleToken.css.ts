const COLOR_PROPERTIES = {
  black: "#000000",
  white: "#ffffff",
  pink: "#FFB6C1",
  blue: "#ADD8E6",
  gray: "#5b5b5b",
  lightGray: "#d2d2d2",
};

const COLOR_SCHEME = {
  primary: {
    color: COLOR_PROPERTIES.black,
    backgroundColor: COLOR_PROPERTIES.pink,
  },
  secondary: {
    color: COLOR_PROPERTIES.white,
    backgroundColor: COLOR_PROPERTIES.blue,
  },
};

const SIZE_PROPERTIES = {
  sm: "10px",
  md: "20px",
  lg: "30px",
};

const FONT_PROPERTIES = {
  weightBold: 600,
  weightMedium: 500,
  weightRegular: 400,
  weightLight: 300,
};

const styleToken = {
  color: COLOR_PROPERTIES,
  colorScheme: COLOR_SCHEME,
  size: SIZE_PROPERTIES,
  font: FONT_PROPERTIES,
};

export default styleToken;
