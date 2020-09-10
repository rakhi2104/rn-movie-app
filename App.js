import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Feather";
import { palette, sizes } from "./constants/theme";
import HomeScreen from "./screens/HomeScreen";
import LibraryScreen from "./screens/LibraryScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import tinycolor from "tinycolor2";

const Tab = createBottomTabNavigator();
const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: palette.bgColor,
    border: "rgb(39, 39, 41)",
    card: palette.bgColor,
    notification: palette.secondaryColor,
    primary: palette.primaryColor,
    text: palette.fontColor,
  },
};

function MyTabs() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={MyDarkTheme}>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: palette.primaryColor,
            inactiveTintColor: palette.fontPlaceholderColor,
            keyboardHidesTabBar: true,
            showLabel: false,
            style: {
              elevation: 5,
              // paddingBottom: sizes.lg / 2,
              // paddingTop: sizes.lg / 4,
              // minHeight: 64,
              borderTopWidth: 2,
              borderTopColor: tinycolor(palette.bgCardColor).lighten(0.8),
            },
            tabStyle: {
              // paddingVertical: 8,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color, size }) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={LibraryScreen}
            options={{
              tabBarLabel: "Library",
              tabBarIcon: ({ color, size }) => (
                <Icon name="film" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
export default MyTabs;
