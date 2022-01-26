import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifications = (notificationListener) => {
	const registerForPushNotifications = async () => {
		try {
			const permission = await Notifications.requestPermissionsAsync();
			if (!permission.granted) return;
			const token = await Notifications.getExpoPushTokenAsync();
			// console.log(token);
			expoPushTokensApi.register(token);
		} catch (error) {
			console.log("Error getting push token", error);
		}
	};
	//(notification) => {
	// console.log(notification)
	//	navigation.navigate("Account");
	//}
	useEffect(() => {
		registerForPushNotifications();
		if (notificationListener)
			Notifications.addPushTokenListener(notificationListener);
	}, []);
};
