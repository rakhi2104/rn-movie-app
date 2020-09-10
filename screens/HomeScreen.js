import React, { useState, useEffect } from "react";
import { ScrollView, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tinycolor from "tinycolor2";
import BoxContainer from "../components/BoxContainer";
import GradientCard from "../components/GradientCard";
import MovieCard from "../components/MovieCard";
import PopularMovieCard from "../components/PopularMovieCard";
import SafeView from "../components/SafeView";
import TextView from "../components/TextView";
import { palette, sizes } from "../constants/theme";

const dummyData = [
  {
    background:
      "https://image.tmdb.org/t/p/w500/zVncJzXzwIO15YM1WilqYn30r54.jpg",
    id: 718444,
    rating: 5.9,
    ratings_count: 161,
    title: "Rogue",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
    id: 605116,
    rating: 6.7,
    ratings_count: 1112,
    title: "Project Power",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
    id: 581392,
    rating: 7.2,
    ratings_count: 352,
    title: "반도",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/tM4hht0LdY06UbuxGR4LjK6adCD.jpg",
    id: 613504,
    rating: 7.2,
    ratings_count: 153,
    title: "After We Collided",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
    id: 606234,
    rating: 6,
    ratings_count: 56,
    title: "Archive",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg",
    id: 539885,
    rating: 6.1,
    ratings_count: 221,
    title: "Ava",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/5pe30v0z4ucVgwh5nR439cCzwwO.jpg",
    id: 632618,
    rating: 6.9,
    ratings_count: 71,
    title: "Crímenes de familia",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/bhNHCeJDFDaB00A46AoCw2mggdE.jpg",
    id: 601165,
    rating: 6,
    ratings_count: 67,
    title: "Legacy of Lies",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
    id: 385103,
    rating: 7.4,
    ratings_count: 580,
    title: "Scoob!",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/aVbqhqYtlxwEGihTEhewZAgDOCX.jpg",
    id: 489326,
    rating: 6.9,
    ratings_count: 125,
    title: "Mortal",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg",
    id: 531499,
    rating: 6,
    ratings_count: 125,
    title: "The Tax Collector",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",
    id: 501979,
    rating: 6.5,
    ratings_count: 121,
    title: "Bill & Ted Face the Music",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/xqbQtMffXwa3oprse4jiHBMBvdW.jpg",
    id: 601844,
    rating: 4.9,
    ratings_count: 39,
    title: "Becky",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    id: 454626,
    rating: 7.5,
    ratings_count: 5568,
    title: "Sonic the Hedgehog",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/45FNxAIooJFqjsVaCJts9YJHXS4.jpg",
    id: 340102,
    rating: 6.2,
    ratings_count: 175,
    title: "The New Mutants",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    id: 508439,
    rating: 7.9,
    ratings_count: 3041,
    title: "Onward",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    id: 577922,
    rating: 7.5,
    ratings_count: 1251,
    title: "Tenet",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    id: 530915,
    rating: 7.9,
    ratings_count: 6380,
    title: "1917",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/dxFqZiO5MqqVoFZuWOjTdjmDh6d.jpg",
    id: 315064,
    rating: 6.4,
    ratings_count: 65,
    title: "Animal Crackers",
  },
  {
    background:
      "https://image.tmdb.org/t/p/w500/1PHkDuVYkuuOdcNDRJT3g7LfNXi.jpg",
    id: 550412,
    rating: 6.8,
    ratings_count: 4,
    title: "The Legend of Halloween Jack",
  },
];

const HomeScreen = () => {
  const [value, onChangeText] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <SafeView>
      <BoxContainer paddingHorizontal={sizes.xs}>
        <TextView variant="h1">Movies</TextView>
        <BoxContainer paddingVertical={sizes.md}>
          <TextInput
            style={{
              height: 48,
              backgroundColor: tinycolor(palette.bgCardColor).setAlpha("0.5"),
              padding: 4,
              paddingHorizontal: 12,
              color: palette.fontColor,
              borderRadius: sizes.borderRadius,
            }}
            placeholder="Search"
            placeholderTextColor={palette.fontPlaceholderColor}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </BoxContainer>
        <BoxContainer
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextView fontWeight="bold">Now Playing</TextView>
          <TextView fontSize={sizes.sm}>See All</TextView>
        </BoxContainer>
      </BoxContainer>
      <ScrollView style={{ marginBottom: 12 }}>
        <FlatList
          style={{ paddingTop: 16, margin: 0 }}
          data={dummyData}
          horizontal
          showsHorizontalScrollIndicator={false}
          // snapToInterval={POSTER_SIZES.regular.width}
          // snapToAlignment="start"
          // decelerationRate={0}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      <BoxContainer paddingHorizontal={sizes.xs} paddingVertical={sizes.sm}>
        <TextView fontWeight="bold">Popular</TextView>
        <ScrollView horizontal={true}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              flexBasis: 1,
              display: "flex",
            }}
            style={{ paddingBottom: 48, paddingTop: 12 }}
            data={dummyData.slice(0, 5)}
            renderItem={({ item }) => <PopularMovieCard movie={item} />}
            keyExtractor={(item) => item.id + "-popular"}
          />
        </ScrollView>
      </BoxContainer>
    </SafeView>
  );
};

export default HomeScreen;
