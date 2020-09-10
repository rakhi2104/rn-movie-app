import React from "react";
import { Text } from "react-native";
import { palette } from "../constants/theme";
import { getFontSizeByVariant } from "../utils/fns";

const TextView = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  variant,
  ...otherProps
}) => {
  const { size = 16, weight = "normal" } = getFontSizeByVariant(variant);

  return (
    <Text
      style={{
        color: color ? color : palette.fontColor,
        fontSize: fontSize || size,
        fontWeight: fontWeight || weight,
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default TextView;
