import React from "react";
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from "../screens/Search";
import Transaction from "../screens/Transaction";
import { Ionicons } from '@expo/vector-icons'; 
import { Rajdhani_300Light } from "@expo-google-fonts/rajdhani";

const Tab = createBottomTabNavigator()
export default class BottomTabNavigator extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator  screenOptions={({ route }) => ({ 
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "black",
                    tabBarLabelStyle:{fontFamily:  'Rajdhani_300Light'},
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name == 'Transaction') {
                            iconName = 'book-sharp'
                        } else if(route.name == 'Search') {
                            iconName = 'md-search-sharp'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}>
                    <Tab.Screen name="Search" component={Search} />
                    <Tab.Screen name="Transaction" component={Transaction} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}