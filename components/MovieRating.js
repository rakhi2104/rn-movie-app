import React from "react";
import { View } from "react-native";
import { Rating } from "react-native-elements";
import { palette, sizes } from "../constants/theme";
import TextView from "./TextView";

const MovieRating = ({
  rating,
  ratingsCount,
  style,
  tintColor,
  showRatingInfo,
  imageSize,
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      <Rating
        fractions={10}
        readonly
        imageSize={imageSize || sizes.md}
        ratingCount={5}
        startingValue={rating / 2}
        type="custom"
        ratingBackgroundColor={palette.bgColorDarker}
        tintColor={tintColor || palette.bgCardColor}
        ratingColor={palette.secondaryColor}
      />
      {showRatingInfo && (
        <TextView style={{ paddingHorizontal: sizes.md }} fontSize={sizes.xs}>
          {rating &&
            ratingsCount &&
            `${rating}/10 from ${ratingsCount} ratings`}
          {!ratingsCount && `${rating}/10`}
        </TextView>
      )}
    </View>
  );
};

export default MovieRating;
