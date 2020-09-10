import React from "react";
import { Image, View } from "react-native";
import TextView from "./TextView";
import { sizes, POSTER_SIZES, palette } from "../constants/theme";
import { Divider } from "react-native-elements";

const PopularMovieCard = ({ movie }) => {
  const { background, title, rating } = movie;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: sizes.md,
        paddingLeft: sizes.xs,
        paddingBottom: sizes.xs,
        marginVertical: sizes.sm,
        elevation: 5,
        backgroundColor: palette.bgCardColor,
        minHeight: POSTER_SIZES.regular.height * 0.75,
        borderRadius: sizes.borderRadius,
      }}
    >
      <Image
        source={{ uri: background }}
        style={{
          borderRadius: sizes.borderRadius,
          height: POSTER_SIZES.regular.height * 0.75,
          width: POSTER_SIZES.regular.width * 0.75,
          marginTop: POSTER_SIZES.regular.height * -0.15,
        }}
      />
      <View
        style={{
          paddingVertical: sizes.xs / 2,
          paddingHorizontal: sizes.xs,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View style={{ flex: 3 }}>
          <TextView numberOfLines={2} fontSize={sizes.sm} fontWeight={"bold"}>
            {title}
          </TextView>
          <TextView
            numberOfLines={2}
            fontSize={sizes.sm}
            color={palette.fontSecondaryColor}
          >
            Director: Seth Rogen
          </TextView>
        </View>
        <View style={{ flex: 1 }}>
          <Divider style={{ marginVertical: 12 }} />
          <TextView numberOfLines={2} fontSize={sizes.xs}>
            Rating: {rating}
          </TextView>
        </View>
      </View>
    </View>
  );
};

export default PopularMovieCard;
