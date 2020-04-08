import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import Constants from "expo-constants"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchScreen from "./screens/SearchScreen"
import SettingsScreen from "./screens/SettingsScreen"
import MoviesDetailsScreen from "./screens/MoviesDetailsScreen"
import { Ionicons } from "@expo/vector-icons"


// Two Tabs, Search and Favorites
// Within Search, a Stack, to search and see details
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

// Red
const red = "#DC3333"

const App = () => {
  const MoviesStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={SearchScreen} 
          options={SearchScreen.navigationOptions} 
        />
        <Stack.Screen 
          name="Details" 
          component={MoviesDetailsScreen} 
          options={MoviesDetailsScreen.navigationOptions} 
        />
      </Stack.Navigator>
    )
  }

  return (
    
    <NavigationContainer style={styles.container}>
      <Tabs.Navigator 
        screenOptions={TabStyling} 
        tabBarOptions={{ activeTintColor: red, inactiveTintColor: 'gray', showLabel: false,}}>
        <Tabs.Screen name="Search" component={MoviesStack}></Tabs.Screen>
        <Tabs.Screen name="Settings" component={SettingsScreen}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

StatusBar.setBarStyle('dark-content', true)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

// Icons
const TabStyling = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Search') {
      iconName = focused
        ? 'ios-search'
        : 'ios-search';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})


export default App
