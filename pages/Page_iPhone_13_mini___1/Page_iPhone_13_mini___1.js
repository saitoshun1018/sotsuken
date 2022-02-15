import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_unsplash_Te3JvTcls1I_link} from './assets/imageLinks.js'
import {image_unsplash_Te3JvTcls1I_2_link} from './assets/imageLinks.js'
import {image_unsplash_Te3JvTcls1I_3_link} from './assets/imageLinks.js'
import {image_image_link} from './assets/imageLinks.js'
import {image_image_2_link} from './assets/imageLinks.js'
import {image_image_3_link} from './assets/imageLinks.js'
import {image_image_4_link} from './assets/imageLinks.js'
const Page_iPhone_13_mini___1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._Rectangle_11}    >
			</View>
			<View style = {noneModeStyles._Inner}    >
				<View style = {noneModeStyles.______}    >
					<View style = {noneModeStyles._Hicon___Bold___Location}    >
						<View style = {noneModeStyles._Location}    >
							<View style = {noneModeStyles._layer_180909}    >
								<View style = {noneModeStyles._layer_8e94f9}   >
									<Svg style={{height: 18, width: 14}} viewBox = "0 0 14 18">
										<Path fill = {"#5893D8"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M9.23828 16.0248C11.2176 13.5009 13.7107 9.83394 13.7107 7.37696C13.7107 3.30278 10.6415 0 6.85536 0C3.06925 0 0 3.30278 0 7.37696C0 9.83394 2.49317 13.5009 4.47244 16.0248C5.50507 17.3416 6.02138 18 6.85536 18C7.68934 18 8.20566 17.3416 9.23828 16.0248ZM6.85536 10.283C5.43557 10.283 4.2846 9.13207 4.2846 7.71228C4.2846 6.29249 5.43557 5.14152 6.85536 5.14152C8.27515 5.14152 9.42612 6.29249 9.42612 7.71228C9.42612 9.13207 8.27515 10.283 6.85536 10.283Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
					<Text style = {noneModeStyles._Hakodate}   >
						Hakodate
					</Text>
				</View>
				<View style = {noneModeStyles._______}    >
					<Text style = {noneModeStyles.________}   >
						いま話題の場所
					</Text>
					<View style = {noneModeStyles.________2}    >
						<View style = {noneModeStyles._Frame_12}    >
							<View style = {noneModeStyles._unsplash_Te3JvTcls1I_container}    >
								<View style = {noneModeStyles._unsplash_Te3JvTcls1I}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_unsplash_Te3JvTcls1I_link}}/>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_7}    >
								<Text style = {noneModeStyles.__________}   >
									トラピスチヌ修道院
								</Text>
								<View style = {noneModeStyles._Hicon___Bold___Location_2}    >
									<View style = {noneModeStyles._Location_2}    >
										<View style = {noneModeStyles._layer_c8ea43}    >
											<View style = {noneModeStyles._layer_f8aedb}   >
												<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
													<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.4118 12.8566C8.99976 10.8316 11 7.8897 11 5.91848C11 2.64979 8.53757 0 5.5 0C2.46244 0 0 2.64979 0 5.91848C0 7.8897 2.00025 10.8316 3.58821 12.8566C4.41667 13.913 4.83091 14.4413 5.5 14.4413C6.1691 14.4413 6.58334 13.913 7.4118 12.8566ZM5.5 8.25001C4.36092 8.25001 3.4375 7.32659 3.4375 6.18751C3.4375 5.04842 4.36092 4.125 5.5 4.125C6.63909 4.125 7.56251 5.04842 7.56251 6.18751C7.56251 7.32659 6.63909 8.25001 5.5 8.25001Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
								<Text style = {noneModeStyles.___________2}   >
									上湯川町, 函館市
								</Text>
								<Text style = {noneModeStyles._2_2_Km}   >
									2.2 Km
								</Text>
								<View style = {noneModeStyles._Frame_8}    >
									<Text style = {noneModeStyles._____}   >
										くわしく
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_12_2}    >
								<View style = {noneModeStyles._Hicon___Bold___Heart_1}    >
									<View style = {noneModeStyles._Heart_1}    >
										<View style = {noneModeStyles._layer_7a281c}    >
											<View style = {noneModeStyles._layer_6fe310}   >
												<Svg style={{height: 12, width: 14}} viewBox = "0 0 14 12">
													<Path fill = {"white"}     d = "M12.2077 0.973809C10.6515 -0.61312 8.84956 0.05617 7.73379 0.763952C7.10333 1.16388 6.22999 1.16388 5.59953 0.763954C4.48376 0.0561784 2.68181 -0.613102 1.12569 0.973811C-2.56832 4.74091 3.76658 12 6.66668 12C9.56678 12 15.9017 4.74091 12.2077 0.973809Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_13}    >
							<View style = {noneModeStyles._unsplash_Te3JvTcls1I_container_2}    >
								<View style = {noneModeStyles._unsplash_Te3JvTcls1I_2}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_unsplash_Te3JvTcls1I_2_link}}/>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_12_3}    >
								<View style = {noneModeStyles._Hicon___Bold___Heart_1_2}    >
									<View style = {noneModeStyles._Heart_1_2}    >
										<View style = {noneModeStyles._layer_4f467d}    >
											<View style = {noneModeStyles._layer_13d5da}   >
												<Svg style={{height: 12, width: 14}} viewBox = "0 0 14 12">
													<Path fill = {"white"}     d = "M12.2077 0.973809C10.6515 -0.61312 8.84956 0.05617 7.73379 0.763952C7.10333 1.16388 6.22999 1.16388 5.59953 0.763954C4.48376 0.0561784 2.68181 -0.613102 1.12569 0.973811C-2.56832 4.74091 3.76658 12 6.66668 12C9.56678 12 15.9017 4.74091 12.2077 0.973809Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_13_2}    >
								<Text style = {noneModeStyles._________2}   >
									はこだて明治館
								</Text>
								<View style = {noneModeStyles._Hicon___Bold___Location_3}    >
									<View style = {noneModeStyles._Location_3}    >
										<View style = {noneModeStyles._layer_744507}    >
											<View style = {noneModeStyles._layer_31fe7f}   >
												<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
													<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.41179 12.8566C8.99975 10.8316 11 7.88969 11 5.91847C11 2.64979 8.53756 0 5.5 0C2.46243 0 0 2.64979 0 5.91847C0 7.88969 2.00025 10.8316 3.5882 12.8566C4.41667 13.913 4.8309 14.4413 5.5 14.4413C6.1691 14.4413 6.58333 13.913 7.41179 12.8566ZM5.5 8.25C4.36091 8.25 3.4375 7.32658 3.4375 6.1875C3.4375 5.04841 4.36091 4.125 5.5 4.125C6.63908 4.125 7.5625 5.04841 7.5625 6.1875C7.5625 7.32658 6.63908 8.25 5.5 8.25Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
								<Text style = {noneModeStyles._________}   >
									豊川町, 函館市
								</Text>
								<Text style = {noneModeStyles._7_6_Km}   >
									7.6 Km
								</Text>
								<View style = {noneModeStyles._Frame_8_2}    >
									<Text style = {noneModeStyles.______2}   >
										くわしく
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Frame_14}    >
							<View style = {noneModeStyles._unsplash_Te3JvTcls1I_container_3}    >
								<View style = {noneModeStyles._unsplash_Te3JvTcls1I_3}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_unsplash_Te3JvTcls1I_3_link}}/>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_12_4}    >
								<View style = {noneModeStyles._Hicon___Bold___Heart_1_3}    >
									<View style = {noneModeStyles._Heart_1_3}    >
										<View style = {noneModeStyles._layer_d47327}    >
											<View style = {noneModeStyles._layer_d9fa0f}   >
												<Svg style={{height: 12, width: 14}} viewBox = "0 0 14 12">
													<Path fill = {"white"}     d = "M12.2077 0.973809C10.6515 -0.61312 8.84956 0.05617 7.73379 0.763952C7.10333 1.16388 6.22999 1.16388 5.59953 0.763954C4.48376 0.0561784 2.68181 -0.613102 1.12569 0.973811C-2.56832 4.74091 3.76658 12 6.66668 12C9.56678 12 15.9017 4.74091 12.2077 0.973809Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_14_2}    >
								<Text style = {noneModeStyles.__________2}   >
									函館山山頂展望台
								</Text>
								<View style = {noneModeStyles._Hicon___Bold___Location_4}    >
									<View style = {noneModeStyles._Location_4}    >
										<View style = {noneModeStyles._layer_bf497e}    >
											<View style = {noneModeStyles._layer_bfdf56}   >
												<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
													<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.41179 12.8566C8.99975 10.8316 11 7.88969 11 5.91848C11 2.64979 8.53756 0 5.5 0C2.46243 0 0 2.64979 0 5.91848C0 7.88969 2.00025 10.8316 3.5882 12.8566C4.41667 13.913 4.8309 14.4413 5.5 14.4413C6.1691 14.4413 6.58333 13.913 7.41179 12.8566ZM5.5 8.25C4.36091 8.25 3.4375 7.32659 3.4375 6.1875C3.4375 5.04841 4.36091 4.125 5.5 4.125C6.63909 4.125 7.5625 5.04841 7.5625 6.1875C7.5625 7.32659 6.63909 8.25 5.5 8.25Z"/>
												</Svg>
											</View>
										</View>
									</View>
								</View>
								<Text style = {noneModeStyles.__________3}   >
									函館山, 函館市
								</Text>
								<Text style = {noneModeStyles._12_2_Km}   >
									12.2 Km
								</Text>
								<View style = {noneModeStyles._Frame_8_3}    >
									<Text style = {noneModeStyles.______3}   >
										くわしく
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_9}    >
						<Text style = {noneModeStyles._______2}   >
							もっとみる
						</Text>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Inner_bottom}    >
				<Text style = {noneModeStyles._______3}   >
					近くの場所
				</Text>
				<View style = {noneModeStyles._Frame_34260}    >
					<View style = {noneModeStyles._Frame_9_2}    >
						<View style = {noneModeStyles._Frame_10}    >
							<View style = {noneModeStyles._image_container}    >
								<View style = {noneModeStyles._image}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.______4}   >
							湯倉神社
						</Text>
						<View style = {noneModeStyles._Hicon___Bold___Location_5}    >
							<View style = {noneModeStyles._Location_5}    >
								<View style = {noneModeStyles._layer_8db7da}    >
									<View style = {noneModeStyles._layer_0784d8}   >
										<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
											<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.4118 12.8566C8.99976 10.8316 11 7.8897 11 5.91848C11 2.64979 8.53757 0 5.5 0C2.46244 0 0 2.64979 0 5.91848C0 7.8897 2.00025 10.8316 3.58821 12.8566C4.41667 13.913 4.83091 14.4413 5.5 14.4413C6.1691 14.4413 6.58334 13.913 7.4118 12.8566ZM5.5 8.25001C4.36092 8.25001 3.4375 7.32659 3.4375 6.18751C3.4375 5.04842 4.36092 4.125 5.5 4.125C6.63909 4.125 7.56251 5.04842 7.56251 6.18751C7.56251 7.32659 6.63909 8.25001 5.5 8.25001Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.__________4}   >
							湯川町, 函館市
						</Text>
						<Text style = {noneModeStyles._1_0_Km}   >
							1.0 Km
						</Text>
						<View style = {noneModeStyles._Frame_8_4}    >
							<Text style = {noneModeStyles.______5}   >
								くわしく
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_10_2}    >
						<View style = {noneModeStyles._Frame_10_3}    >
							<View style = {noneModeStyles._image_container_2}    >
								<View style = {noneModeStyles._image_2}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_2_link}}/>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.______6}   >
							湯倉神社
						</Text>
						<View style = {noneModeStyles._Hicon___Bold___Location_6}    >
							<View style = {noneModeStyles._Location_6}    >
								<View style = {noneModeStyles._layer_9ab93b}    >
									<View style = {noneModeStyles._layer_2d60da}   >
										<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
											<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.4118 12.8566C8.99976 10.8316 11 7.8897 11 5.91848C11 2.64979 8.53757 0 5.5 0C2.46244 0 0 2.64979 0 5.91848C0 7.8897 2.00025 10.8316 3.58821 12.8566C4.41667 13.913 4.83091 14.4413 5.5 14.4413C6.1691 14.4413 6.58334 13.913 7.4118 12.8566ZM5.5 8.25001C4.36092 8.25001 3.4375 7.32659 3.4375 6.18751C3.4375 5.04842 4.36092 4.125 5.5 4.125C6.63909 4.125 7.56251 5.04842 7.56251 6.18751C7.56251 7.32659 6.63909 8.25001 5.5 8.25001Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.__________5}   >
							湯川町, 函館市
						</Text>
						<Text style = {noneModeStyles._1_0_Km_2}   >
							1.0 Km
						</Text>
						<View style = {noneModeStyles._Frame_8_5}    >
							<Text style = {noneModeStyles.______7}   >
								くわしく
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_11}    >
						<View style = {noneModeStyles._Frame_10_4}    >
							<View style = {noneModeStyles._image_container_3}    >
								<View style = {noneModeStyles._image_3}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_3_link}}/>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.______8}   >
							湯倉神社
						</Text>
						<View style = {noneModeStyles._Hicon___Bold___Location_7}    >
							<View style = {noneModeStyles._Location_7}    >
								<View style = {noneModeStyles._layer_dd832a}    >
									<View style = {noneModeStyles._layer_649dd2}   >
										<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
											<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.4118 12.8566C8.99976 10.8316 11 7.8897 11 5.91848C11 2.64979 8.53757 0 5.5 0C2.46244 0 0 2.64979 0 5.91848C0 7.8897 2.00025 10.8316 3.58821 12.8566C4.41667 13.913 4.83091 14.4413 5.5 14.4413C6.1691 14.4413 6.58334 13.913 7.4118 12.8566ZM5.5 8.25001C4.36092 8.25001 3.4375 7.32659 3.4375 6.18751C3.4375 5.04842 4.36092 4.125 5.5 4.125C6.63909 4.125 7.56251 5.04842 7.56251 6.18751C7.56251 7.32659 6.63909 8.25001 5.5 8.25001Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.__________6}   >
							湯川町, 函館市
						</Text>
						<Text style = {noneModeStyles._1_0_Km_3}   >
							1.0 Km
						</Text>
						<View style = {noneModeStyles._Frame_8_6}    >
							<Text style = {noneModeStyles.______9}   >
								くわしく
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Frame_12_5}    >
						<View style = {noneModeStyles._Frame_10_5}    >
							<View style = {noneModeStyles._image_container_4}    >
								<View style = {noneModeStyles._image_4}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_4_link}}/>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.______10}   >
							湯倉神社
						</Text>
						<View style = {noneModeStyles._Hicon___Bold___Location_8}    >
							<View style = {noneModeStyles._Location_8}    >
								<View style = {noneModeStyles._layer_322b73}    >
									<View style = {noneModeStyles._layer_c96a8b}   >
										<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
											<Path fill = {"#BDBDBD"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.4118 12.8566C8.99976 10.8316 11 7.8897 11 5.91848C11 2.64979 8.53757 0 5.5 0C2.46244 0 0 2.64979 0 5.91848C0 7.8897 2.00025 10.8316 3.58821 12.8566C4.41667 13.913 4.83091 14.4413 5.5 14.4413C6.1691 14.4413 6.58334 13.913 7.4118 12.8566ZM5.5 8.25001C4.36092 8.25001 3.4375 7.32659 3.4375 6.18751C3.4375 5.04842 4.36092 4.125 5.5 4.125C6.63909 4.125 7.56251 5.04842 7.56251 6.18751C7.56251 7.32659 6.63909 8.25001 5.5 8.25001Z"/>
										</Svg>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.__________7}   >
							湯川町, 函館市
						</Text>
						<Text style = {noneModeStyles._1_0_Km_4}   >
							1.0 Km
						</Text>
						<View style = {noneModeStyles._Frame_8_7}    >
							<Text style = {noneModeStyles.______11}   >
								くわしく
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Frame_34253}    >
				<View style = {noneModeStyles._Group_6}    >
					<Text style = {noneModeStyles._Fire}   >
						Fire
					</Text>
					<View style = {noneModeStyles._Solid_Status_Fire}    >
						<View style = {noneModeStyles._layer_0231d8}    >
							<View style = {noneModeStyles._layer_24ee9a}   >
								<Svg style={{height: 20, width: 14}} viewBox = "0 0 14 20">
									<Path fill = {"#5893D8"}     d = "M7.06486 0.0616708C6.7645 -0.0700173 6.46867 0.0221079 6.27837 0.215917C6.09351 0.404181 6.00105 0.691516 6.06587 0.981216C6.16819 1.43849 6.22222 1.91423 6.22222 2.4029C6.22222 3.51859 5.94103 4.30001 5.4572 4.94779C4.96536 5.60629 4.25339 6.14239 3.35446 6.74728C3.34033 6.75679 3.32717 6.76767 3.31517 6.77976L3.2063 6.88947C1.27758 8.13552 0 10.3051 0 12.7733C0 16.6393 3.13401 19.7733 7 19.7733C10.866 19.7733 14 16.6393 14 12.7733C14 11.6382 13.7296 10.5655 13.2496 9.61678C13.2105 9.5396 13.1355 9.48698 13.0497 9.47649C12.9638 9.466 12.8784 9.49902 12.8219 9.56453C12.7488 9.64931 12.6772 9.73298 12.6066 9.81542C11.6958 10.8796 10.9607 11.7384 9.45379 12.122C9.38971 12.1384 9.3499 12.1262 9.32165 12.1086C9.2884 12.0878 9.25203 12.0463 9.22711 11.9801C9.17516 11.842 9.19745 11.666 9.30389 11.5506C10.1099 10.6768 10.6824 9.49063 10.887 7.80325C11.2702 4.64246 9.83369 1.27562 7.06486 0.0616708Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Solid_Interface_Cursor}    >
					<View style = {noneModeStyles._layer_ddf225}    >
						<View style = {noneModeStyles._layer_5f8022}   >
							<Svg style={{height: 19, width: 16}} viewBox = "0 0 16 19">
								<Path fill = {"#BDBDBD"}     d = "M2.21591 0.239036C1.27466 -0.389751 -0.096557 0.286915 0.00537092 1.51078L0.0350992 1.86773C0.488651 7.31359 1.44791 12.7087 2.90118 17.9877C3.24729 19.245 4.98676 19.3533 5.51485 18.188L7.70141 13.3632C7.91044 12.9019 8.418 12.6058 8.96878 12.6648L14.3785 13.2442C15.6202 13.3771 16.4977 11.861 15.5026 10.9003C11.508 7.04391 7.16299 3.54385 2.52038 0.442435L2.21591 0.239036Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Home_Indicator}    >
				<View style = {noneModeStyles._Line}    >
				</View>
			</View>
			<View style = {noneModeStyles._Status_Bar}    >
				<View style = {noneModeStyles._Notch}    >
					<View style = {noneModeStyles._layer_9a80dd}    >
						<View style = {noneModeStyles._layer_48cf8d}   >
							<Svg style={{height: 31, width: 164}} viewBox = "0 0 164 31">
								<Path fill = {"black"}     d = "M0 0H164C162.396 0.633367 161.327 2.16514 161.286 3.88899L161.242 5.74719C161.242 19.6939 149.936 31 135.989 31H28.0112C14.0644 31 2.75841 19.6939 2.75841 5.74719L2.71399 3.88899C2.67278 2.16514 1.60381 0.633367 0 0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Right_Side}    >
					<View style = {noneModeStyles._Battery}    >
						<View style = {noneModeStyles._layer_c6040f}    >
							<View style = {noneModeStyles._layer_34a80a}   >
								<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.5 2.66666C0.5 1.47005 1.47005 0.5 2.66667 0.5H19.3333C20.53 0.5 21.5 1.47005 21.5 2.66667V8.66667C21.5 9.86329 20.53 10.8333 19.3333 10.8333H2.66667C1.47005 10.8333 0.5 9.86328 0.5 8.66667V2.66666Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_36bc31}    >
							<View style = {noneModeStyles._layer_9bfd74}   >
								<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
									<Path fill = {"black"}     d = "M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_af12c5}    >
							<View style = {noneModeStyles._layer_e2da9e}   >
								<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
									<Path fill = {"black"}     d = "M0 1.1C0 0.492487 0.492487 0 1.1 0H16.9C17.5075 0 18 0.492487 18 1.1V6.23333C18 6.84085 17.5075 7.33333 16.9 7.33333H1.1C0.492488 7.33333 0 6.84085 0 6.23333V1.1Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._layer_6e1a59}    >
						<View style = {noneModeStyles._layer_6441ec}   >
							<Svg style={{height: 11, width: 16}} viewBox = "0 0 16 11">
								<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.66058 2.28448C9.88343 2.28457 12.0213 3.13868 13.6323 4.67028C13.7536 4.78852 13.9475 4.78703 14.067 4.66693L15.2266 3.4966C15.2871 3.43569 15.3208 3.35318 15.3203 3.26733C15.3198 3.18148 15.2851 3.09937 15.2239 3.03917C10.9956 -1.01306 4.3249 -1.01306 0.0965747 3.03917C0.0353245 3.09933 0.000571789 3.18141 6.99266e-06 3.26726C-0.000557804 3.35311 0.0331118 3.43565 0.0935653 3.4966L1.25353 4.66693C1.37293 4.78721 1.56698 4.7887 1.68822 4.67028C3.29942 3.13858 5.43751 2.28447 7.66058 2.28448ZM7.66058 6.09206C8.88189 6.09198 10.0596 6.54594 10.9649 7.36571C11.0874 7.48206 11.2803 7.47953 11.3996 7.36003L12.5579 6.1897C12.6189 6.12831 12.6527 6.04503 12.6519 5.9585C12.651 5.87196 12.6155 5.78939 12.5532 5.72926C9.7964 3.16485 5.5271 3.16485 2.77028 5.72926C2.708 5.78939 2.67247 5.872 2.67166 5.95857C2.67084 6.04513 2.7048 6.1284 2.76593 6.1897L3.92389 7.36003C4.04325 7.47953 4.23613 7.48206 4.35858 7.36571C5.26328 6.54648 6.44007 6.09256 7.66058 6.09206ZM9.98083 8.65389C9.98261 8.74067 9.94849 8.82434 9.88655 8.88513L7.88294 10.9071C7.82421 10.9666 7.74413 11 7.66058 11C7.57703 11 7.49695 10.9666 7.43822 10.9071L5.43428 8.88513C5.37237 8.82429 5.33832 8.7406 5.34015 8.65382C5.34199 8.56704 5.37955 8.48487 5.44398 8.4267C6.72355 7.34443 8.59761 7.34443 9.87718 8.4267C9.94156 8.48491 9.97906 8.56712 9.98083 8.65389Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._layer_00a3b8}    >
						<View style = {noneModeStyles._layer_9b78bc}   >
							<Svg style={{height: 11, width: 17}} viewBox = "0 0 17 11">
								<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M16 0H15C14.4477 0 14 0.447715 14 1V9.66667C14 10.219 14.4477 10.6667 15 10.6667H16C16.5523 10.6667 17 10.219 17 9.66667V1C17 0.447715 16.5523 0 16 0ZM10.3333 2.33333H11.3333C11.8856 2.33333 12.3333 2.78105 12.3333 3.33333V9.66667C12.3333 10.219 11.8856 10.6667 11.3333 10.6667H10.3333C9.78105 10.6667 9.33333 10.219 9.33333 9.66667V3.33333C9.33333 2.78105 9.78105 2.33333 10.3333 2.33333ZM6.66667 4.66667H5.66667C5.11438 4.66667 4.66667 5.11438 4.66667 5.66667V9.66667C4.66667 10.219 5.11438 10.6667 5.66667 10.6667H6.66667C7.21895 10.6667 7.66667 10.219 7.66667 9.66667V5.66667C7.66667 5.11438 7.21895 4.66667 6.66667 4.66667ZM2 6.66667H1C0.447715 6.66667 0 7.11438 0 7.66667V9.66667C0 10.219 0.447715 10.6667 1 10.6667H2C2.55228 10.6667 3 10.219 3 9.66667V7.66667C3 7.11438 2.55228 6.66667 2 6.66667Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Left_Side}    >
					<View style = {noneModeStyles.__Time}    >
						<Text style = {noneModeStyles._9_41}   >
							9:41
						</Text>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_mini___1

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 1010,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(246, 246, 249)",
	},
_Rectangle_11: {
	width: 375,
	height: 457,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Inner: {
	width: 335,
	height: 357,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 20,
	top: 63,
	},
______: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 0,
	paddingTop: 12,
	paddingRight: 12,
	paddingBottom: 12,
	paddingLeft: 12,
	borderRadius: 16,
	},
_Hicon___Bold___Location: {
	width: 20,
	height: 20,
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 8,
	},
_Location: {
	width: 13.3333,
	height: 17.5045,
	position: "absolute",
	left: 3.33334,
	top: 0.833344,
	},
_layer_180909: {
	position: "absolute",
	},
_layer_8e94f9: {
	},
_Hakodate: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(79, 79, 79)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_______: {
	width: 335,
	height: 283,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 74,
	},
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 1,
	textAlign: "left",
	},
________2: {
	width: 335,
	height: 240,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 43,
	},
_Frame_12: {
	width: 180,
	height: 240,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	borderRadius: 16,
	},
_unsplash_Te3JvTcls1I_container: {
	width: 180,
	height: 240,
	position: "absolute",
	left: 0,
	top: 0,
	},
_unsplash_Te3JvTcls1I: {
	width: "100%",
	height: "100%",
	},
_Frame_7: {
	width: 164,
	height: 91,
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 141,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 4,
	},
__________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_2: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 12,
	top: 30,
	},
_Location_2: {
	width: 10.6667,
	height: 14.0036,
	position: "absolute",
	left: 2.66666,
	top: 0.666668,
	},
_layer_c8ea43: {
	position: "absolute",
	},
_layer_f8aedb: {
	},
___________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 33,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_2_2_Km: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 61,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 96,
	top: 55,
	borderRadius: 8,
	},
_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_12_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 148,
	top: 8,
	},
_Hicon___Bold___Heart_1: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 4,
	top: 4,
	},
_Heart_1: {
	width: 13.3333,
	height: 12,
	position: "absolute",
	left: 1.33334,
	top: 2,
	},
_layer_7a281c: {
	position: "absolute",
	},
_layer_6fe310: {
	},
_Frame_13: {
	width: 180,
	height: 240,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	borderRadius: 16,
	},
_unsplash_Te3JvTcls1I_container_2: {
	width: 180,
	height: 240,
	position: "absolute",
	left: 0,
	top: 0,
	},
_unsplash_Te3JvTcls1I_2: {
	width: "100%",
	height: "100%",
	},
_Frame_12_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 148,
	top: 8,
	},
_Hicon___Bold___Heart_1_2: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 4,
	top: 4,
	},
_Heart_1_2: {
	width: 13.3333,
	height: 12,
	position: "absolute",
	left: 1.33334,
	top: 2,
	},
_layer_4f467d: {
	position: "absolute",
	},
_layer_13d5da: {
	},
_Frame_13_2: {
	width: 164,
	height: 91,
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 141,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 4,
	},
_________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_3: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 12,
	top: 30,
	},
_Location_3: {
	width: 10.6667,
	height: 14.0036,
	position: "absolute",
	left: 2.66667,
	top: 0.666668,
	},
_layer_744507: {
	position: "absolute",
	},
_layer_31fe7f: {
	},
_________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 33,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_7_6_Km: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 61,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8_2: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 96,
	top: 55,
	borderRadius: 8,
	},
______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_14: {
	width: 180,
	height: 240,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	borderRadius: 16,
	},
_unsplash_Te3JvTcls1I_container_3: {
	width: 180,
	height: 240,
	position: "absolute",
	left: 0,
	top: 0,
	},
_unsplash_Te3JvTcls1I_3: {
	width: "100%",
	height: "100%",
	},
_Frame_12_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 148,
	top: 8,
	},
_Hicon___Bold___Heart_1_3: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 4,
	top: 4,
	},
_Heart_1_3: {
	width: 13.3333,
	height: 12,
	position: "absolute",
	left: 1.33334,
	top: 2,
	},
_layer_d47327: {
	position: "absolute",
	},
_layer_d9fa0f: {
	},
_Frame_14_2: {
	width: 164,
	height: 91,
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 141,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 4,
	},
__________2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_4: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 12,
	top: 30,
	},
_Location_4: {
	width: 10.6667,
	height: 14.0036,
	position: "absolute",
	left: 2.66667,
	top: 0.666668,
	},
_layer_bf497e: {
	position: "absolute",
	},
_layer_bfdf56: {
	},
__________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 33,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_12_2_Km: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 61,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8_3: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 96,
	top: 55,
	borderRadius: 8,
	},
______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_9: {
	width: 66,
	height: 21,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 269,
	top: 0,
	borderRadius: 8,
	},
_______2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 5,
	color: "rgb(88, 147, 216)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Inner_bottom: {
	width: 335,
	height: 401,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 20,
	top: 490,
	},
_______3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(51, 51, 51)",
	fontSize: 16,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.8,
	textAlign: "left",
	},
_Frame_34260: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 45,
	},
_Frame_9_2: {
	width: 335,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	flexShrink: 0,
	marginBottom: 12,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 17,
	},
_Frame_10: {
	width: 64,
	height: 64,
	backgroundColor: "rgb(242, 242, 242)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 8,
	borderRadius: 8,
	},
_image_container: {
	width: 112,
	height: 64,
	position: "absolute",
	left: -24,
	top: 0,
	},
_image: {
	width: "100%",
	height: "100%",
	},
______4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_5: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 88,
	top: 30,
	},
_Location_5: {
	width: 10.6667,
	height: 14.0036,
	position: "absolute",
	left: 2.66666,
	top: 0.666672,
	},
_layer_8db7da: {
	position: "absolute",
	},
_layer_0784d8: {
	},
__________4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 109,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_1_0_Km: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 56,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8_4: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 270,
	top: 28,
	borderRadius: 8,
	},
______5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_10_2: {
	width: 335,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	flexShrink: 0,
	marginBottom: 12,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 17,
	},
_Frame_10_3: {
	width: 64,
	height: 64,
	backgroundColor: "rgb(242, 242, 242)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 8,
	borderRadius: 8,
	},
_image_container_2: {
	width: 112,
	height: 64,
	position: "absolute",
	left: -24,
	top: 0,
	},
_image_2: {
	width: "100%",
	height: "100%",
	},
______6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_6: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 88,
	top: 30,
	},
_Location_6: {
	width: 10.6667,
	height: 14.0037,
	position: "absolute",
	left: 2.66666,
	top: 0.666656,
	},
_layer_9ab93b: {
	position: "absolute",
	},
_layer_2d60da: {
	},
__________5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 109,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_1_0_Km_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 56,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8_5: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 270,
	top: 28,
	borderRadius: 8,
	},
______7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_11: {
	width: 335,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	flexShrink: 0,
	marginBottom: 12,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 17,
	},
_Frame_10_4: {
	width: 64,
	height: 64,
	backgroundColor: "rgb(242, 242, 242)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 8,
	borderRadius: 8,
	},
_image_container_3: {
	width: 112,
	height: 64,
	position: "absolute",
	left: -24,
	top: 0,
	},
_image_3: {
	width: "100%",
	height: "100%",
	},
______8: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_7: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 88,
	top: 30,
	},
_Location_7: {
	width: 10.6667,
	height: 14.0037,
	position: "absolute",
	left: 2.66666,
	top: 0.666656,
	},
_layer_dd832a: {
	position: "absolute",
	},
_layer_649dd2: {
	},
__________6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 109,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_1_0_Km_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 56,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8_6: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 270,
	top: 28,
	borderRadius: 8,
	},
______9: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_12_5: {
	width: 335,
	height: 80,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	flexShrink: 0,
	borderRadius: 16,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 17,
	},
_Frame_10_5: {
	width: 64,
	height: 64,
	backgroundColor: "rgb(242, 242, 242)",
	overflow: "hidden",
	position: "absolute",
	left: 8,
	top: 8,
	borderRadius: 8,
	},
_image_container_4: {
	width: 112,
	height: 64,
	position: "absolute",
	left: -24,
	top: 0,
	},
_image_4: {
	width: "100%",
	height: "100%",
	},
______10: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 12,
	color: "rgb(51, 51, 51)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Hicon___Bold___Location_8: {
	width: 16,
	height: 16,
	overflow: "hidden",
	position: "absolute",
	left: 88,
	top: 30,
	},
_Location_8: {
	width: 10.6667,
	height: 14.0037,
	position: "absolute",
	left: 2.66666,
	top: 0.666656,
	},
_layer_322b73: {
	position: "absolute",
	},
_layer_c96a8b: {
	},
__________7: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 109,
	top: 33,
	color: "rgb(130, 130, 130)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_1_0_Km_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 56,
	color: "rgb(130, 130, 130)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Nunito",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_8_7: {
	width: 56,
	height: 24,
	backgroundColor: "rgb(88, 147, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 270,
	top: 28,
	borderRadius: 8,
	},
______11: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0,
	textAlign: "left",
	},
_Frame_34253: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 105,
	bottom: 34.0017,
	paddingTop: 10,
	paddingRight: 28,
	paddingBottom: 10,
	paddingLeft: 28,
	borderRadius: 70,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 34,
	},
_Group_6: {
	width: 24,
	height: 38.9983,
	flexShrink: 0,
	marginRight: 60,
	},
_Fire: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 1,
	top: 24.9983,
	color: "rgb(88, 147, 216)",
	fontSize: 12,
	fontWeight: "700",
	fontFamily: "Roboto",
	letterSpacing: 0.36,
	textAlign: "center",
	},
_Solid_Status_Fire: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 0,
	top: 0,
	},
_layer_0231d8: {
	position: "absolute",
	transform: [
		{translateX: 5.25},
		{translateY: 2.00549},
	],
	},
_layer_24ee9a: {
	},
_Solid_Interface_Cursor: {
	width: 24,
	height: 24,
	flexShrink: 0,
	},
_layer_ddf225: {
	position: "absolute",
	transform: [
		{translateX: 5.24957},
		{translateY: 2.25317},
	],
	},
_layer_5f8022: {
	},
_Home_Indicator: {
	width: 375,
	height: 34,
	position: "absolute",
	left: 0,
	bottom: 0,
	},
_Line: {
	width: 135,
	height: 5,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	left: "50%",
	bottom: 8,
	transform: [
		{translateX: -67.5},
	],
	borderRadius: 100,
	},
_Status_Bar: {
	width: 375,
	height: 44,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Notch: {
	width: 164,
	height: 31,
	position: "absolute",
	left: 106,
	top: -2,
	},
_layer_9a80dd: {
	width: 164,
	height: 31,
	position: "absolute",
	left: "50%",
	top: 0,
	transform: [
		{translateX: -82},
	],
	},
_layer_48cf8d: {
	},
_Right_Side: {
	width: 66.6612,
	height: 11.336,
	position: "absolute",
	left: 293.667,
	top: 17.3306,
	},
_Battery: {
	width: 24.328,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 42.3332},
		{translateY: 0.00268555},
	],
	},
_layer_c6040f: {
	width: 22,
	height: 11.3333,
	position: "absolute",
	top: 0,
	right: 2.32803,
	},
_layer_34a80a: {
	},
_layer_36bc31: {
	width: 1.32804,
	height: 4,
	position: "absolute",
	top: 3.66666,
	right: -0.00000762939,
	},
_layer_9bfd74: {
	},
_layer_af12c5: {
	width: 18,
	height: 7.33334,
	position: "absolute",
	top: 2,
	right: 4.32803,
	},
_layer_e2da9e: {
	},
_layer_6e1a59: {
	width: 15.2724,
	height: 10.9656,
	position: "absolute",
	top: 0,
	right: 29.3618,
	},
_layer_6441ec: {
	},
_layer_00a3b8: {
	width: 17,
	height: 10.6667,
	position: "absolute",
	top: 0.335938,
	right: 49.6612,
	},
_layer_9b78bc: {
	},
_Left_Side: {
	width: 54,
	height: 21,
	position: "absolute",
	left: 24,
	top: 12,
	},
__Time: {
	width: 54,
	height: 21,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 24,
	},
_9_41: {
	width: 54,
	height: 20,
	position: "absolute",
	left: 0,
	top: 1,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	lineHeight: 20,
	fontFamily: "SF Pro Text",
	letterSpacing: -0.5,
	textAlign: "center",
	},
})

