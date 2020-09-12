import React from "react";
import BoxContainer from "../components/BoxContainer";
import SafeView from "../components/SafeView";
import TextView from "../components/TextView";
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
