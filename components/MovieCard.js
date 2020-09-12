import React from "react";
import { Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { IMAGE_SIZES, palette, sizes } from "../constants/theme";
import MovieRating from "./MovieRating";
import TextView from "./TextView";

const MovieCard = (props) => {
  const { background, title, id, rating, ratings_count } = props.movie;
  return (
    <View
      style={{
        display: "flex",
        marginBottom: sizes.md,
        marginHorizontal: sizes.md,
      }}
    >
      <SharedElement id={`item-movie-${id}-home-poster`}>
        <Image
          source={{ uri: background }}
          style={{
            borderRadius: sizes.borderRadius,
            height: IMAGE_SIZES.regular.height,
            width: IMAGE_SIZES.regular.width,
            borderWidth: 2,
          }}
        />
      </SharedElement>
      <View
        style={{
          maxWidth: IMAGE_SIZES.regular.width,
          paddingVertical: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SharedElement id={`item-movie-${id}-home-title`}>
          <TextView numberOfLines={1} fontSize={sizes.sm}>
            {title}
          </TextView>
        </SharedElement>
        <SharedElement id={`item-movie-${id}-home-rating`}>
          <MovieRating
            rating={rating}
            tintColor={palette.bgColor}
            imageSize={sizes.sm}
            style={{ alignItems: "flex-start", paddingTop: sizes.xs / 2 }}
          />
        </SharedElement>
      </View>
    </View>
  );
};

export default MovieCard;
