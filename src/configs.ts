import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const appConfig = {
    hostURL: "https://duaachau.acp.com.vn",
    // https://acp.monamedia.net
    oneSignalID: "35e269e5-b9d5-4402-bdf2-1b4b4d320d06",
    appVersion: "1.0.0",
    showBottomSheet: false,

    sizes: {
        dW: width,
        dH: height,
    },
    fonts: {
        Bold: "SVN-Biennale-Bold",
        SemiBold: "SVN-Biennale-SemiBold",
        Regular: "SVN-Biennale-Book",
    },
};

export { width, height };
