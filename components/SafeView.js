import { View } from "react-native";
import React from "react";
import { palette } from "../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const SafeView = ({ children }) => {
  return (
    <ScrollView
      style={{
        paddingTop: 48,
        paddingBottom: 96,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default SafeView;
