import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import BoxContainer from "../components/BoxContainer";
import MovieRating from "../components/MovieRating";
import Pills from "../components/Pills";
import SafeView from "../components/SafeView";
import TextView from "../components/TextView";
import { IMAGE_SIZES, palette, sizes } from "../constants/theme";

const MovieDetailScreen = (props) => {
  const { movie } = props.route.params;
  const { navigation } = props;
  return (
    <View>
      <StatusBar style="light" />
      <SafeView style={{ paddingTop: 0, paddingBottom: sizes.xxl }}>
        <View
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            elevation: 10,
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
              height: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              marginBottom: sizes.xxl,
            }}
            blurRadius={2}
            source={{
              uri: movie.background,
            }}
          >
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              style={{
                position: "absolute",
                width: "100%",
                height: 120,
                top: 0,
              }}
            />
            <LinearGradient
              colors={["transparent", palette.bgColor]}
              style={{
                position: "absolute",
                width: "100%",
                height: sizes.xxl * 5,
                bottom: 0,
              }}
            />
            <SharedElement id={`item-movie-${movie.id}-home-poster`}>
              <Image
                style={{
                  borderWidth: 1,
                  width: IMAGE_SIZES.regular.width * 1.25,
                  height: IMAGE_SIZES.regular.height * 1.25,
                  borderRadius: sizes.xs,
                  marginBottom: sizes.xxl * -2,
                  marginTop: sizes.xxl * 2,
                  bottom: 0,
                  zIndex: 999,
                }}
                source={{
                  uri: movie.background,
                }}
              />
            </SharedElement>
          </ImageBackground>
        </View>
        <BoxContainer paddingHorizontal={sizes.sm}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              paddingHorizontal: sizes.md,
              backgroundColor: palette.bgCardColor,
              paddingTop: sizes.xxl,
              borderRadius: sizes.xs,
              marginBottom: sizes.xxl,
            }}
          >
            <SharedElement id={`item-movie-${movie.id}-home-title`}>
              <TextView
                numberOfLines={1}
                fontSize={sizes.xl}
                style={{ marginTop: sizes.sm, fontWeight: "bold" }}
              >
                {movie.title}
              </TextView>
            </SharedElement>
            <SharedElement id={`item-movie-${movie.id}-home-rating`}>
              <MovieRating
                rating={movie.rating}
                ratingsCount={movie.ratings_count}
                showRatingInfo
              />
            </SharedElement>
            <Pills data={movie.genres} />
            <TextView fontSize={sizes.sm} style={{ textAlign: "justify" }}>
              {movie.overview}
            </TextView>
            <TouchableOpacity
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: sizes.xl,
                marginBottom: -sizes.xl,
              }}
              activeOpacity={0.8}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon
                name="x"
                raised
                type="feather"
                color={palette.bgCardColor}
                style={{
                  borderRadius: 36,
                  elevation: 5,
                }}
              />
            </TouchableOpacity>
          </View>
        </BoxContainer>
      </SafeView>
    </View>
  );
};

export default MovieDetailScreen;
