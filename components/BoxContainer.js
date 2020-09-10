import React from "react";
import { View } from "react-native";
import { sizes } from "../constants/theme";

const BoxContainer = ({ children, ...otherProps }) => {
  return (
    <View
      style={{
        ...otherProps,
      }}
    >
      {children}
    </View>
  );
};

export default BoxContainer;
