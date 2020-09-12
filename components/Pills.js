import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { palette, sizes } from "../constants/theme";
import TextView from "./TextView";

const Pills = ({ data }) => {
  if (data) {
    const pillColor = palette.bgCardColorDarker;
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingVertical: sizes.xs,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((text, index) => {
          return (
            <TouchableOpacity key={index}>
              <View
                style={{
                  paddingVertical: sizes.xs / 4,
                  paddingHorizontal: sizes.sm,
                  marginHorizontal: sizes.xs / 2,
                  marginVertical: sizes.xs / 2,
                  borderWidth: 1,
                  borderColor: pillColor,
                  borderRadius: sizes.sm,
                  backgroundColor: pillColor,
                  elevation: 5,
                }}
              >
                <TextView
                  fontSize={sizes.sm * 0.75}
                  numberOfLines={1}
                  color={palette.fontColor}
                >
                  {text}
                </TextView>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return <View />;
};

export default Pills;
