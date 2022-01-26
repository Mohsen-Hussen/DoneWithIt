import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	SafeAreaView,
	Button,
	Alert,
	Platform,
} from "react-native";

const Basics = () => {
	const handlePress = () => {
		console.log("pressed");
	};
	return (
		<SafeAreaView style={styles.container}>
			{/* <Text>Hello React Native From VS Code Again</Text>

			<TouchableOpacity onPress={() => console.log("img pressed")}>
				<Image source={require("./assets/alahly.png")} />
			</TouchableOpacity>

			<Image
				source={{
					width: 200,
					height: 300,
					uri: "https://picsum.photos/200/300",
				}}
			/> */}

			{/* <Button
				onPress={() =>
					Alert.alert("Title", "Msg", [
						{ text: "Yes", onPress: () => handlePress() },
						{ text: "No", onPress: () => handlePress() },
					])
				}
				title="Click Me"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>

			<Button
				onPress={() =>
					Alert.prompt("Title", "Msg", (text) => console.log(text))
				}
				title="Click Me"
				color="red"
				accessibilityLabel="Learn more about this purple button"
			/> */}
			<View style={{ backgroundColor: "red", width: "50%", height: 70 }}></View>

			{/* <StatusBar style="auto" /> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		// alignItems: "center",
		// justifyContent: "center",
	},
});

export default Basics;

// physical pixels = DIPs * scale factor
