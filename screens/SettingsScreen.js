import React from "react";
import TextView from "../components/TextView";
import SafeView from "../components/SafeView";
import BoxContainer from "../components/BoxContainer";
import { sizes } from "../constants/theme";

const SettingsScreen = () => {
  return (
    <SafeView>
      <BoxContainer paddingHorizontal={sizes.sm}>
        <TextView variant="lg">Settings Screen</TextView>
      </BoxContainer>
    </SafeView>
  );
};

export default SettingsScreen;
