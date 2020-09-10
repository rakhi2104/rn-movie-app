import React from "react";
import { Image, View } from "react-native";
import TextView from "./TextView";
import { sizes, POSTER_SIZES } from "../constants/theme";

const MovieCard = ({ movie }) => {
  const { background, title } = movie;
  return (
    <View
      style={{
        display: "flex",
        paddingHorizontal: 12,
      }}
    >
      <Image
        source={{ uri: background }}
        style={{
          borderRadius: sizes.borderRadius,
          height: POSTER_SIZES.regular.height,
          width: POSTER_SIZES.regular.width,
          borderWidth: 2,
          //   borderColor: palette.bgCardColor,
        }}
      />
      <View style={{ maxWidth: 150, paddingVertical: 6 }}>
        <TextView numberOfLines={2} fontSize={sizes.sm}>
          {title}
        </TextView>
      </View>
    </View>
  );
};

export default MovieCard;
