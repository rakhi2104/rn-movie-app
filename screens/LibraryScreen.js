import React from "react";
import TextView from "../components/TextView";
import SafeView from "../components/SafeView";
import BoxContainer from "../components/BoxContainer";
import { sizes } from "../constants/theme";

const LibraryScreen = () => {
  return (
    <SafeView>
      <BoxContainer paddingHorizontal={sizes.sm}>
        <TextView variant="lg">Library Screen</TextView>
      </BoxContainer>
    </SafeView>
  );
};

export default LibraryScreen;
