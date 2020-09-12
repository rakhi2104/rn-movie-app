import React from "react";
import { View } from "react-native";

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
