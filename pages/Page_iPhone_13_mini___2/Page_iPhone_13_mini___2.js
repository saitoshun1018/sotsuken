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
import {image_Rectangle_12_link} from './assets/imageLinks.js'
const Page_iPhone_13_mini___2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._Rectangle_12_container}    >
					<View style = {noneModeStyles._Rectangle_12}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_12_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_34262}    >
					<View style = {noneModeStyles._Frame_34261}    >
						<View style = {noneModeStyles._Frame_34263}    >
							<Text style = {noneModeStyles.________}   >
								はこだて明治館
							</Text>
							<View style = {noneModeStyles._Hicon___Bold___Heart_2}    >
								<View style = {noneModeStyles._Heart_1}    >
									<View style = {noneModeStyles._layer_0734c1}    >
										<View style = {noneModeStyles._layer_4dbb7e}   >
											<Svg style={{height: 18, width: 20}} viewBox = "0 0 20 18">
												<Path fill = {"white"}     d = "M18.3115 1.46071C15.9773 -0.91968 13.2743 0.084255 11.6007 1.14593C10.655 1.74582 9.34498 1.74582 8.39929 1.14593C6.72564 0.0842676 4.02272 -0.919653 1.68853 1.46072C-3.85249 7.11136 5.64988 18 10 18C14.3502 18 23.8525 7.11136 18.3115 1.46071Z"/>
											</Svg>
										</View>
									</View>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles.___44__1911_________37__1962___________________________________________}   >
							明治44年（1911）に建てられ、昭和37年（1962）まで函館郵便局として使用されていたものを再利用したショッピングモール＆ミュージアム。
						</Text>
					</View>
					<View style = {noneModeStyles._Frame_34268}    >
						<View style = {noneModeStyles._Line_1}    >
						</View>
						<View style = {noneModeStyles._Frame_34267}    >
							<View style = {noneModeStyles._Frame_34267_2}    >
								<View style = {noneModeStyles._Outline_Status_Info_triangle}    >
									<View style = {noneModeStyles._layer_23e3f7}    >
										<View style = {noneModeStyles._layer_689e07}   >
											<Svg style={{height: 25, width: 27}} viewBox = "0 0 27 25">
												<Path fill = {"white"}     d = "M14.7704 8.37331C14.7704 9.11852 14.1663 9.72262 13.4211 9.72262C12.6759 9.72262 12.0717 9.11852 12.0717 8.37331C12.0717 7.62811 12.6759 7.024 13.4211 7.024C14.1663 7.024 14.7704 7.62811 14.7704 8.37331Z"/>
												<Path fill = {"white"}     d = "M13.4211 12.0839C13.98 12.0839 14.433 12.537 14.433 13.0959V19.8425C14.433 20.4014 13.98 20.8544 13.4211 20.8544C12.8622 20.8544 12.4091 20.4014 12.4091 19.8425V13.0959C12.4091 12.537 12.8622 12.0839 13.4211 12.0839Z"/>
												<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M16.4845 1.61681C15.0111 -0.538933 11.831 -0.538942 10.3576 1.61681L9.7748 2.4695C6.1235 7.81172 2.98641 13.4878 0.405538 19.4216L0.28381 19.7015C-0.625701 21.7926 0.74839 24.167 3.01462 24.4203C9.93069 25.1932 16.9114 25.1932 23.8274 24.4203C26.0937 24.167 27.4678 21.7926 26.5582 19.7015L26.4365 19.4216C23.8556 13.4878 20.7186 7.81173 17.0673 2.46951L16.4845 1.61681ZM12.0286 2.75888C12.6983 1.779 14.1438 1.779 14.8135 2.75888L15.3963 3.61158C18.9755 8.84828 22.0506 14.4122 24.5805 20.2288L24.7022 20.5087C25.0685 21.3507 24.5152 22.3068 23.6026 22.4088C16.836 23.1651 10.0061 23.1651 3.23943 22.4088C2.32689 22.3068 1.77359 21.3507 2.13982 20.5087L2.26155 20.2289C4.79144 14.4122 7.86658 8.84828 11.4458 3.61157L12.0286 2.75888Z"/>
											</Svg>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Frame_34266}    >
									<Text style = {noneModeStyles.___________}   >
										現在込み合っています
									</Text>
									<Text style = {noneModeStyles._NaN______}   >
										NaN分の待ち時間
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_34265}    >
								<View style = {noneModeStyles._Outline_Status_Shield}    >
									<View style = {noneModeStyles._layer_89293f}    >
										<View style = {noneModeStyles._layer_176b63}   >
											<Svg style={{height: 23, width: 21}} viewBox = "0 0 21 23">
												<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M11.3736 2.27498C10.8362 1.95135 10.1638 1.95135 9.62638 2.27498L8.92687 2.69619C7.05553 3.82302 4.95468 4.51448 2.7799 4.71937L2.3392 4.76089C2.16521 4.77729 2.03226 4.92335 2.03226 5.09811V7.32531C2.03226 10.7226 3.41152 13.9744 5.85409 16.3356L10.2646 20.5993C10.3959 20.7262 10.6041 20.7262 10.7354 20.5993L15.1459 16.3356C17.5885 13.9744 18.9677 10.7226 18.9677 7.32531V5.09811C18.9677 4.92335 18.8348 4.77729 18.6608 4.76089L18.2201 4.71937C16.0453 4.51448 13.9445 3.82302 12.0731 2.69619L11.3736 2.27498ZM8.57804 0.533986C9.76044 -0.177995 11.2396 -0.177996 12.422 0.533985L13.1215 0.955194C14.7317 1.92479 16.5394 2.51977 18.4107 2.69608L18.8514 2.7376C20.0693 2.85234 21 3.87482 21 5.09811V7.32531C21 11.2735 19.3971 15.0526 16.5584 17.7968L12.1479 22.0605C11.2289 22.9489 9.77108 22.9489 8.85208 22.0605L4.44159 17.7968C1.60293 15.0526 0 11.2735 0 7.32531V5.09811C0 3.87482 0.930674 2.85234 2.14857 2.7376L2.58928 2.69608C4.4606 2.51977 6.26831 1.92479 7.87853 0.955195L8.57804 0.533986Z"/>
											</Svg>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Frame_34266_2}    >
									<Text style = {noneModeStyles.____________2}   >
										安全にご利用できます
									</Text>
									<Text style = {noneModeStyles.____________________________}   >
										このスポットは１時間に１回の消毒・清掃を行っています。
									</Text>
								</View>
							</View>
							<View style = {noneModeStyles._Frame_34266_3}    >
								<View style = {noneModeStyles._Outline_Devices_Mobile_phone}    >
									<View style = {noneModeStyles._layer_c2f7cc}    >
										<View style = {noneModeStyles._layer_372741}   >
											<Svg style={{height: 29, width: 18}} viewBox = "0 0 18 29">
												<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M18 12.0928L17.9913 12.4166L18 12.7595L17.9918 13.0838L18 13.4261L17.9921 13.7526L17.9999 14.0927L17.7834 23.563C17.7321 25.81 16.0231 27.6708 13.7886 27.9128C10.6055 28.2575 7.39451 28.2575 4.2114 27.9128C1.97694 27.6708 0.267987 25.81 0.216619 23.5631L0.000118909 14.0927L0.00794611 13.7504L0.000143096 13.4261L0.00834864 13.0851L7.70055e-05 12.7595L0.00874856 12.4181L0 12.0928L0.218665 3.96258C0.221716 3.84915 0.229688 3.73689 0.242383 3.62603L0.247355 3.57915L0.2513 3.54136C0.358776 2.4426 0.967659 1.4843 1.85499 0.909211C1.92119 0.865185 1.98894 0.823258 2.05816 0.783528C2.12587 0.74346 2.19497 0.705458 2.2654 0.669612C2.70084 0.439802 3.18682 0.29085 3.70413 0.243231C7.22726 -0.0810773 10.7727 -0.0810771 14.2959 0.243232C14.8124 0.290775 15.2976 0.439328 15.7325 0.668513C15.803 0.704307 15.8721 0.742257 15.9398 0.782273C16.0112 0.823192 16.081 0.866448 16.1492 0.911934C17.0319 1.48573 17.6381 2.43907 17.7478 3.53229L17.7582 3.63136C17.7706 3.74049 17.7783 3.85097 17.7813 3.96259L18 12.0928ZM15.7654 3.85408L15.9747 13.0093L15.8051 19.316C15.767 20.7337 14.6749 21.8991 13.2626 22.0291C10.4268 22.2902 7.57315 22.2902 4.73744 22.0291C3.32514 21.8991 2.23304 20.7337 2.19491 19.316L2.02531 13.0101L2.23463 3.85408C2.23508 3.83438 2.2359 3.81477 2.23708 3.79525C2.31639 3.25889 2.62721 2.79592 3.06793 2.51478C3.23488 2.42774 3.42013 2.37002 3.61718 2.34868C7.19528 1.96119 10.8048 1.96119 14.3829 2.34868C14.5798 2.37001 14.765 2.42769 14.9319 2.51467C15.3728 2.79588 15.6838 3.25908 15.763 3.79569C15.7642 3.81506 15.765 3.83453 15.7654 3.85408ZM9.00005 27.0256C10.1046 27.0256 11 26.1302 11 25.0257C11 23.9211 10.1046 23.0257 9.00005 23.0257C7.89552 23.0257 7.00013 23.9211 7.00013 25.0257C7.00013 26.1302 7.89552 27.0256 9.00005 27.0256Z"/>
											</Svg>
										</View>
									</View>
								</View>
								<View style = {noneModeStyles._Frame_34266_4}    >
									<Text style = {noneModeStyles.____Wi_Fi}   >
										シティWi-Fi
									</Text>
									<Text style = {noneModeStyles.________Wi_Fi___________}   >
										函館市のシティWi-Fiをご利用いただけます。
									</Text>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._Line_2}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_34253}    >
					<Text style = {noneModeStyles.____________3}   >
						このスポットへ向かう
					</Text>
				</View>
				<View style = {noneModeStyles._Frame_34264}    >
					<View style = {noneModeStyles._Ellipse_1}    >
					</View>
					<View style = {noneModeStyles._Outline_Interface_Arrow_left}    >
						<View style = {noneModeStyles._layer_529455}    >
							<View style = {noneModeStyles._layer_a093a7}   >
								<Svg style={{height: 10, width: 13}} viewBox = "0 0 13 10">
									<Path fill = {"black"}     d = "M5.28033 1.28033C5.57322 0.987437 5.57322 0.512563 5.28033 0.21967C4.98744 -0.0732233 4.51256 -0.0732233 4.21967 0.21967L0.21967 4.21967C0.0732233 4.36612 0 4.55806 0 4.75C0 4.85169 0.0202391 4.94866 0.0569091 5.03709C0.0935089 5.12555 0.147763 5.20842 0.21967 5.28033L4.21967 9.28033C4.51256 9.57322 4.98744 9.57322 5.28033 9.28033C5.57322 8.98744 5.57322 8.51256 5.28033 8.21967L2.56066 5.5H12.25C12.6642 5.5 13 5.16421 13 4.75C13 4.33579 12.6642 4 12.25 4H2.56066L5.28033 1.28033Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Status_Bar}    >
					<View style = {noneModeStyles._Notch}    >
						<View style = {noneModeStyles._layer_9692a6}    >
							<View style = {noneModeStyles._layer_f9d580}   >
								<Svg style={{height: 31, width: 164}} viewBox = "0 0 164 31">
									<Path fill = {"black"}     d = "M0 0H164C162.396 0.633367 161.327 2.16514 161.286 3.88899L161.242 5.74719C161.242 19.6939 149.936 31 135.989 31H28.0112C14.0644 31 2.75841 19.6939 2.75841 5.74719L2.71399 3.88899C2.67278 2.16514 1.60381 0.633367 0 0Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Right_Side}    >
						<View style = {noneModeStyles._Battery}    >
							<View style = {noneModeStyles._layer_e816df}    >
								<View style = {noneModeStyles._layer_3f110a}   >
									<Svg style={{height: 12, width: 22}} viewBox = "0 0 22 12">
										<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 2.66666C0.5 1.47005 1.47005 0.5 2.66667 0.5H19.3333C20.53 0.5 21.5 1.47005 21.5 2.66667V8.66667C21.5 9.86329 20.53 10.8333 19.3333 10.8333H2.66667C1.47005 10.8333 0.5 9.86328 0.5 8.66667V2.66666Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_0d6658}    >
								<View style = {noneModeStyles._layer_e312bf}   >
									<Svg style={{height: 4, width: 2}} viewBox = "0 0 2 4">
										<Path fill = {"white"}     d = "M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z"/>
									</Svg>
								</View>
							</View>
							<View style = {noneModeStyles._layer_51e81e}    >
								<View style = {noneModeStyles._layer_ba3b74}   >
									<Svg style={{height: 8, width: 18}} viewBox = "0 0 18 8">
										<Path fill = {"white"}     d = "M0 1.1C0 0.492487 0.492487 0 1.1 0H16.9C17.5075 0 18 0.492487 18 1.1V6.23333C18 6.84085 17.5075 7.33333 16.9 7.33333H1.1C0.492488 7.33333 0 6.84085 0 6.23333V1.1Z"/>
									</Svg>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._layer_b01364}    >
							<View style = {noneModeStyles._layer_c8a949}   >
								<Svg style={{height: 11, width: 16}} viewBox = "0 0 16 11">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.66058 2.28448C9.88343 2.28457 12.0213 3.13868 13.6323 4.67028C13.7536 4.78852 13.9475 4.78703 14.067 4.66693L15.2266 3.4966C15.2871 3.43569 15.3208 3.35318 15.3203 3.26733C15.3198 3.18148 15.2851 3.09937 15.2239 3.03917C10.9956 -1.01306 4.3249 -1.01306 0.0965747 3.03917C0.0353245 3.09933 0.000571789 3.18141 6.99267e-06 3.26726C-0.000557804 3.35311 0.0331118 3.43565 0.0935653 3.4966L1.25353 4.66693C1.37293 4.78721 1.56698 4.7887 1.68822 4.67028C3.29942 3.13858 5.43751 2.28447 7.66058 2.28448ZM7.66058 6.09206C8.88189 6.09198 10.0596 6.54594 10.9649 7.36571C11.0874 7.48206 11.2803 7.47953 11.3996 7.36003L12.5579 6.1897C12.6189 6.12831 12.6527 6.04503 12.6519 5.9585C12.651 5.87196 12.6155 5.78939 12.5532 5.72926C9.7964 3.16485 5.5271 3.16485 2.77028 5.72926C2.708 5.78939 2.67247 5.872 2.67166 5.95857C2.67084 6.04513 2.7048 6.1284 2.76593 6.1897L3.92389 7.36003C4.04325 7.47953 4.23613 7.48206 4.35858 7.36571C5.26328 6.54648 6.44007 6.09256 7.66058 6.09206ZM9.98083 8.65389C9.98261 8.74067 9.94849 8.82434 9.88655 8.88513L7.88294 10.9071C7.82421 10.9666 7.74413 11 7.66058 11C7.57703 11 7.49695 10.9666 7.43822 10.9071L5.43428 8.88513C5.37237 8.82429 5.33832 8.7406 5.34015 8.65382C5.34199 8.56704 5.37955 8.48487 5.44398 8.4267C6.72355 7.34443 8.59761 7.34443 9.87718 8.4267C9.94156 8.48491 9.97906 8.56712 9.98083 8.65389Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_0172c9}    >
							<View style = {noneModeStyles._layer_8d590f}   >
								<Svg style={{height: 11, width: 17}} viewBox = "0 0 17 11">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M16 0H15C14.4477 0 14 0.447715 14 1V9.66667C14 10.219 14.4477 10.6667 15 10.6667H16C16.5523 10.6667 17 10.219 17 9.66667V1C17 0.447715 16.5523 0 16 0ZM10.3333 2.33333H11.3333C11.8856 2.33333 12.3333 2.78105 12.3333 3.33333V9.66667C12.3333 10.219 11.8856 10.6667 11.3333 10.6667H10.3333C9.78105 10.6667 9.33333 10.219 9.33333 9.66667V3.33333C9.33333 2.78105 9.78105 2.33333 10.3333 2.33333ZM6.66667 4.66667H5.66667C5.11438 4.66667 4.66667 5.11438 4.66667 5.66667V9.66667C4.66667 10.219 5.11438 10.6667 5.66667 10.6667H6.66667C7.21895 10.6667 7.66667 10.219 7.66667 9.66667V5.66667C7.66667 5.11438 7.21895 4.66667 6.66667 4.66667ZM2 6.66667H1C0.447715 6.66667 0 7.11438 0 7.66667V9.66667C0 10.219 0.447715 10.6667 1 10.6667H2C2.55228 10.6667 3 10.219 3 9.66667V7.66667C3 7.11438 2.55228 6.66667 2 6.66667Z"/>
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
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_mini___2

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_12_container: {
	width: 375,
	height: 339,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_12: {
	width: "100%",
	height: "100%",
	},
_Frame_34262: {
	width: "auto",
	height: 473,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 0,
	top: 339,
	paddingTop: 22,
	paddingRight: 20,
	paddingBottom: 22,
	paddingLeft: 20,
	},
_Frame_34261: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 32,
	},
_Frame_34263: {
	width: 335,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	flexShrink: 0,
	marginBottom: 14,
	},
________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 26,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 1.3,
	textAlign: "left",
	},
_Hicon___Bold___Heart_2: {
	width: 24,
	height: 24,
	overflow: "hidden",
	position: "absolute",
	left: 311,
	top: 0,
	},
_Heart_1: {
	width: 20,
	height: 18,
	position: "absolute",
	left: 2,
	top: 3,
	},
_layer_0734c1: {
	position: "absolute",
	},
_layer_4dbb7e: {
	},
___44__1911_________37__1962___________________________________________: {
	width: 335,
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Frame_34268: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	},
_Line_1: {
	width: 335,
	height: 0,
	flexShrink: 0,
	marginBottom: 24,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Frame_34267: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 24,
	},
_Frame_34267_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 16,
	},
_Outline_Status_Info_triangle: {
	width: 32,
	height: 32,
	flexShrink: 0,
	marginRight: 10,
	},
_layer_23e3f7: {
	position: "absolute",
	transform: [
		{translateX: 2.73787},
		{translateY: 3.72585},
	],
	},
_layer_689e07: {
	},
_Frame_34266: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	},
___________: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 6,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.8,
	textAlign: "left",
	},
_NaN______: {
	width: 293,
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Frame_34265: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	marginBottom: 16,
	},
_Outline_Status_Shield: {
	width: 32,
	height: 32,
	flexShrink: 0,
	marginRight: 10,
	},
_layer_89293f: {
	position: "absolute",
	transform: [
		{translateX: 5.66667},
		{translateY: 4.77946},
	],
	},
_layer_176b63: {
	},
_Frame_34266_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	},
____________2: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 6,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.8,
	textAlign: "left",
	},
____________________________: {
	width: 293,
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Frame_34266_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	},
_Outline_Devices_Mobile_phone: {
	width: 32,
	height: 32,
	flexShrink: 0,
	marginRight: 10,
	},
_layer_c2f7cc: {
	position: "absolute",
	transform: [
		{translateX: 6.99959},
		{translateY: 1.90678},
	],
	},
_layer_372741: {
	},
_Frame_34266_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	},
____Wi_Fi: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 6,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.8,
	textAlign: "left",
	},
________Wi_Fi___________: {
	width: 293,
	height: "auto",
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.6,
	textAlign: "left",
	},
_Line_2: {
	width: 335,
	height: 0,
	flexShrink: 0,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	},
_Frame_34253: {
	width: 335,
	height: 58.9983,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 20,
	bottom: 30.0017,
	borderRadius: 70,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 34,
	},
____________3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 73,
	top: 18,
	color: "rgb(88, 147, 216)",
	fontSize: 18,
	fontWeight: "700",
	fontFamily: "Noto Sans JP",
	letterSpacing: 0.9,
	textAlign: "left",
	},
_Frame_34264: {
	width: 32,
	height: 32,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 20,
	top: 52,
	shadowOffset: {
		width: 0,
		height: 0
	},
	shadowRadius: 8,
	},
_Ellipse_1: {
	width: 32,
	height: 32,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Outline_Interface_Arrow_left: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 4,
	top: 4,
	},
_layer_529455: {
	position: "absolute",
	transform: [
		{translateX: 5.75},
		{translateY: 7.25},
	],
	},
_layer_a093a7: {
	},
_Status_Bar: {
	width: 375,
	height: 44,
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
_layer_9692a6: {
	width: 164,
	height: 31,
	position: "absolute",
	left: "50%",
	top: 0,
	transform: [
		{translateX: -82},
	],
	},
_layer_f9d580: {
	},
_Right_Side: {
	width: 66.6612,
	height: 11.3359,
	position: "absolute",
	left: 293.667,
	top: 17.3308,
	},
_Battery: {
	width: 24.3281,
	height: 11.3333,
	position: "absolute",
	transform: [
		{translateX: 42.3332},
		{translateY: 0.00256348},
	],
	},
_layer_e816df: {
	width: 22,
	height: 11.3333,
	position: "absolute",
	top: 0,
	right: 2.32806,
	},
_layer_3f110a: {
	},
_layer_0d6658: {
	width: 1.32806,
	height: 4,
	position: "absolute",
	top: 3.66666,
	right: 0,
	},
_layer_e312bf: {
	},
_layer_51e81e: {
	width: 18,
	height: 7.33334,
	position: "absolute",
	top: 2,
	right: 4.32806,
	},
_layer_ba3b74: {
	},
_layer_b01364: {
	width: 15.2724,
	height: 10.9656,
	position: "absolute",
	top: 0,
	right: 29.3618,
	},
_layer_c8a949: {
	},
_layer_0172c9: {
	width: 17,
	height: 10.6667,
	position: "absolute",
	top: 0.335938,
	right: 49.6612,
	},
_layer_8d590f: {
	},
_Left_Side: {
	width: 54,
	height: 21,
	position: "absolute",
	left: 21,
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
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "600",
	lineHeight: 20,
	fontFamily: "SF Pro Text",
	letterSpacing: -0.5,
	textAlign: "center",
	},
})

