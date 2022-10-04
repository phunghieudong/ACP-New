//@ts-nocheck
import { Alert, Clipboard, Linking, Platform } from "react-native";
import moment from "moment";
import { check, requestMultiple, PERMISSIONS } from "react-native-permissions";

export const isIOS = () => {
  return Platform.OS === "ios" ? true : false;
};

export const isAndroid = () => {
  return Platform.OS === "android" ? true : false;
};

export const openLink = (url: string) => {
  Linking.openURL(url);
};

export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
};

export const getStoragePermission = () => {
  requestMultiple([PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]).then(
    (statuses) => {
      console.log(
        "PERMISSIONS - READ_STORAGE: ",
        statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]
      );
    }
  );
};

export const checkStoragePermission = async () => {
  const res = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  return res == "granted" ? true : false;
};

export const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const timeOutToken = (props: any) => {
  const { onPress, error } = props;

  if (
    error.message == "Phiên đăng nhập đã hết hiệu lực" ||
    error.message == "Không tìm thấy token"
  ) {
    Alert.alert(
      "Phiên đăng nhập đã hết hiệu lực",
      "Đăng nhập lại để tiếp tục",
      [{ text: "OK", onPress: () => onPress() }]
    );
  }
};

export const getTime = (date: any) => {
  return moment(date).format("hh:mm");
};

export const getStrDate = (date: any) => {
  return moment(date).format("DD/MM/yyy");
};

export const getIndex = (data: any, item: any) => {
  return data.indexOf(item);
};

export const parseToMoney = (value: any) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
