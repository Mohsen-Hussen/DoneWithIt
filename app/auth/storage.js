import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

const key = "authtoken";

const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log("Error store the authtoken", error);
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log("Error getting the authtoken", error);
	}
};

const getUser = async () => {
	const token = await getToken();
	return token ? jwt_decode(token) : null;
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log("Error removing the authtoken", error);
	}
};

export default {
	storeToken,
	getUser,
	removeToken,
	getToken,
};
