import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { AppLoading } from "expo";
import { Button } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import * as Notifications from "expo-notifications";

export default function App() {
	const [user, setUser] = useState();
	// const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	useEffect(() => {
		restoreUser();
	}, []);

	// if (!isReady)
	// 	return (
	// 		<AppLoading
	// 			startAsync={restoreUser}
	// 			onFinish={() => setIsReady(false)}
	// 		/>
	// 	);

	// const handleNotification = () => {
	// 	Notifications.scheduleNotificationAsync({
	// 		content: {
	// 			title: "Time's up!",
	// 			body: "Change sides!",
	// 		},
	// 		trigger: {
	// 			seconds: 1,
	// 		},
	// 	});
	// };
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />
			<NavigationContainer ref={navigationRef} theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
				{/* <Button title="click here" onPress={handleNotification} /> */}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
