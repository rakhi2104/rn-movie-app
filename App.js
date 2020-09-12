import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { palette } from "./constants/theme";
import HomeScreen from "./screens/HomeScreen";
import LibraryScreen from "./screens/LibraryScreen";
import MovieDetailScreen from "./screens/MovieDetailScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: palette.bgColor,
    card: palette.bgColor,
    notification: palette.secondaryColor,
    primary: palette.primaryColor,
    text: palette.fontColor,
  },
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: palette.primaryColor,
        inactiveTintColor: palette.fontPlaceholderColor,
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          elevation: 5,
          borderTopWidth: 2,
          borderTopColor: palette.bgCardColor,
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
  );
}

const NavStack = createSharedElementStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <NavStack.Navigator initialRouteName="Home" headerMode="none">
        <NavStack.Screen name="Home" component={MyTabs} />
        <NavStack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={() => ({
            cardStyleInterpolator: ({ current: { progress } }) => {
              return { cardStyle: { opacity: progress } };
            },
          })}
          sharedElementsConfig={({ params }) => {
            const { movie } = params;
            return [
              {
                id: `item-movie-${movie.id}-home-poster`,
                animation: "move",
                resize: "none",
                align: "center-center",
              },
              {
                id: `item-movie-${movie.id}-home-title`,
                animation: "fade",
                resize: "none",
                align: "center-center",
              },
              {
                id: `item-movie-${movie.id}-home-rating`,
                animation: "fade",
                resize: "none",
                align: "center-center",
              },
            ];
          }}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
