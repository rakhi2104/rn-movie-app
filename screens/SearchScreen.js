import React from "react";
import TextView from "../components/TextView";
import SafeView from "../components/SafeView";
import BoxContainer from "../components/BoxContainer";
import { sizes } from "../constants/theme";

const SearchScreen = () => {
  return (
    <SafeView>
      <BoxContainer paddingHorizontal={sizes.sm}>
        <TextView variant="lg">Search Screen</TextView>
      </BoxContainer>
    </SafeView>
  );
};

export default SearchScreen;
