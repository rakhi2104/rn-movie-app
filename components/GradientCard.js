import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { sizes } from "../constants/theme";

const GradientCard = ({ gradient }) => {
  const { startColor, endColor, angle } = gradient;
  return (
    <LinearGradient
      colors={[startColor, endColor]}
      style={{
        width: 240,
        height: 240,
        margin: 12,
        borderRadius: sizes.borderRadius,
      }}
    />
  );
};

export default GradientCard;
