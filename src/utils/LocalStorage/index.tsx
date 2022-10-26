import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN = "ACCESS_TOKEN";
const USER = "USER";
const WELCOME = "WELCOME";
const LocalStorage = {
    async setToken(params: any) {
        await AsyncStorage.setItem(TOKEN, params);
    },
    async getToken() {
        // cho này
        const response = await AsyncStorage.getItem(TOKEN);
        return response == null ? null : response;
    },
    async deleteToken() {
        await AsyncStorage.removeItem(TOKEN);
    },
    async logout() {
        await AsyncStorage.multiRemove([USER, TOKEN]);
    },
    async setWelcome() {
        await AsyncStorage.setItem(WELCOME, "true");
    },
    async getWelcome() {
        const response = await AsyncStorage.getItem(WELCOME);
        return response == null ? null : response;
    },
};

export { LocalStorage };
