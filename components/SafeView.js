import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const SafeView = ({ children, style }) => {
  return (
    <ScrollView
      style={{
        paddingTop: 48,
        paddingBottom: 96,
        ...style,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default SafeView;
