import { sizes } from "../constants/theme";

const getFontSizeByVariant = (variant) => {
  switch (variant) {
    case "h1":
      return { weight: "bold", size: sizes["xxl"] };
    case "h2":
      return { weight: "bold", size: sizes["xl"] };
    case "h3":
      return { weight: "bold", size: sizes["lg"] };
    case "h4":
      return { weight: "bold", size: sizes["md"] };
    case "h5":
      return { weight: "normal", size: sizes["sm"] };
    case "h6":
      return { weight: "normal", size: sizes["xs"] };
    default:
      return { weight: "normal", size: sizes["md"] };
  }
};

export { getFontSizeByVariant };
