import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_iPhone_13_mini___3 from "./pages/Page_iPhone_13_mini___3/Page_iPhone_13_mini___3.js";
import Page_iPhone_13_mini___2 from "./pages/Page_iPhone_13_mini___2/Page_iPhone_13_mini___2.js";
import Page_iPhone_13_mini___5 from "./pages/Page_iPhone_13_mini___5/Page_iPhone_13_mini___5.js";
import Page_iPhone_13_mini___1 from "./pages/Page_iPhone_13_mini___1/Page_iPhone_13_mini___1.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
	return (
		<Page_first_pageStackNavigator.Navigator>
			<Page_first_pageStackNavigator.Screen
				name = "Page_first_page"
				component = {Page_first_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_first_pageStackNavigator.Navigator>
	)
};
const Page_iPhone_13_mini___3StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_13_mini___3 = () => {
	return (
		<Page_iPhone_13_mini___3StackNavigator.Navigator>
			<Page_iPhone_13_mini___3StackNavigator.Screen
				name = "Page_iPhone_13_mini___3"
				component = {Page_iPhone_13_mini___3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_13_mini___3StackNavigator.Navigator>
	)
};
const Page_iPhone_13_mini___2StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_13_mini___2 = () => {
	return (
		<Page_iPhone_13_mini___2StackNavigator.Navigator>
			<Page_iPhone_13_mini___2StackNavigator.Screen
				name = "Page_iPhone_13_mini___2"
				component = {Page_iPhone_13_mini___2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_13_mini___2StackNavigator.Navigator>
	)
};
const Page_iPhone_13_mini___5StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_13_mini___5 = () => {
	return (
		<Page_iPhone_13_mini___5StackNavigator.Navigator>
			<Page_iPhone_13_mini___5StackNavigator.Screen
				name = "Page_iPhone_13_mini___5"
				component = {Page_iPhone_13_mini___5}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_13_mini___5StackNavigator.Navigator>
	)
};
const Page_iPhone_13_mini___1StackNavigator = createStackNavigator();
const ScreenForPage_iPhone_13_mini___1 = () => {
	return (
		<Page_iPhone_13_mini___1StackNavigator.Navigator>
			<Page_iPhone_13_mini___1StackNavigator.Screen
				name = "Page_iPhone_13_mini___1"
				component = {Page_iPhone_13_mini___1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_iPhone_13_mini___1StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_first_page"
							component = {ScreenForPage_first_page}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_13_mini___3"
							component = {ScreenForPage_iPhone_13_mini___3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_13_mini___2"
							component = {ScreenForPage_iPhone_13_mini___2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_13_mini___5"
							component = {ScreenForPage_iPhone_13_mini___5}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_iPhone_13_mini___1"
							component = {ScreenForPage_iPhone_13_mini___1}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

