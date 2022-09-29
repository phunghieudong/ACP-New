import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = 'ACCESS_TOKEN';
const USER = 'USER';

const LocalStorage = {
	async setToken(params: any) {
		await AsyncStorage.setItem(TOKEN, params);
	},
	async getToken() { // cho này
		const response = await AsyncStorage.getItem(TOKEN);
		return response == null ? null : response;
	
		
	},
	async deleteToken() {
		await AsyncStorage.removeItem(TOKEN);
	},
	async logout() {
		await AsyncStorage.multiRemove([USER, TOKEN]);
	},
	
};

export {LocalStorage};
