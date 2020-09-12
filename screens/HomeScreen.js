import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import TouchableScale from "react-native-touchable-scale";
import BoxContainer from "../components/BoxContainer";
import MovieCard from "../components/MovieCard";
import SafeView from "../components/SafeView";
import TextView from "../components/TextView";
import { genres } from "../constants/genres";
import { palette, sizes } from "../constants/theme";
import { getData } from "../service/apiService";

const transformMoviesList = (moviesList) => {
  return moviesList.map((movie) => ({
    background: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
    id: movie.id,
    rating: movie.vote_average,
    ratings_count: movie.vote_count,
    title: movie.title,
    genres: movie.genre_ids.map((x) => genres[x]),
    overview: movie.overview,
  }));
};

const HomeScreen = ({ navigation }) => {
  const [value, onChangeText] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function init() {
      setLoading(true);
      const moviesList = await getData("movie/now_playing");
      setMovies(transformMoviesList(moviesList));
      setLoading(false);
    }
    init();
  }, []);

  return loading ? (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextView color={palette.fontPlaceholderColor}>
        Fetching Movies from TMDB ...
      </TextView>
    </View>
  ) : (
    <SafeView>
      <StatusBar animated style="light" backgroundColor={palette.bgColor} />
      <BoxContainer paddingHorizontal={sizes.xs} alignItems="center">
        <TextView variant="h1">Movies</TextView>
        <ScrollView style={{ marginVertical: sizes.md }} horizontal>
          <FlatList
            style={{ paddingTop: sizes.sm, margin: 0 }}
            data={movies}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableScale
                activeScale={0.9}
                tension={50}
                friction={7}
                useNativeDriver
                onPress={() =>
                  navigation.navigate("MovieDetail", { movie: item })
                }
              >
                <MovieCard movie={item} />
              </TouchableScale>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </BoxContainer>
      <Divider
        style={{
          backgroundColor: palette.fontPlaceholderColor,
          marginTop: sizes.xl,
        }}
      />
      <View
        style={{
          marginBottom: 120,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextView
          fontSize={sizes.sm}
          style={{
            alignContent: "center",
            display: "flex",
            flex: 1,
            marginVertical: sizes.md,
          }}
        >
          Powered By:
        </TextView>
        <Image source={require("../assets/tmdb.png")} />
      </View>
    </SafeView>
  );
};

export default HomeScreen;
