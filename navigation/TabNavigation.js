import React from "react";
import {Platform} from "react-native";

import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import {BG_COLOR} from "../constants/Colors";
import TabBarIcon from "../Components/TabBarIcon";

const TabNavigation = createBottomTabNavigator(
    {
        Movie: {
            screen: MoviesScreen,
            navigationOptions: {
                tabBarOptions: ({focused}) => (
                    <TabBarIcon 
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }
        },
        TV: {
            screen: TVScreen,
            navigationOptions: {
                tabBarOptions: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                    />
                )
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                tabBarOptions: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);