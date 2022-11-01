//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Pressable,
} from "react-native";
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import ErrorText from "../../../../components/More/error-text";
import { ChangePassword } from "../../../../api/ChangePassword";
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from "buffer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const UpdateAccountScreen = () => {
    const [oldPassword, setoldPassword] = useState<string>("");
    const [newPassword, setnewPassword] = useState<string>("");
    const [hidePass, setHidePass] = useState(true);
    const [hidePass1, setHidePass1] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);
    const [confirmNewPassword, setconfirmNewPassword] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");
    const [user, setUser] = useState({});
    const ChangePasswordPut = () => {
        // console.log("phunghieudong", username)
        setErrorText("");
        if (!!!oldPassword) {
            setErrorText("Vui lòng nhập mật khẩu cũ ");
        } else if (!!!newPassword) {
            setErrorText("Vui lòng nhập mật khẩu mới ");
        } else if (!!!confirmNewPassword) {
            setErrorText("Vui lòng xác nhận mật khẩu mới ");
        } else {
            UserNamePutAPI({
                oldPassword: oldPassword,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword,
            });
        }
    };

    const UserNamePutAPI = async (data: any) => {
        const accessToken = await LocalStorage.getToken();
        const userx = await JSON.parse(Object.values(parseJwt(accessToken))[0]);
        try {
            const params = { providerId: userx.userId };
            const res = await ChangePassword.Password(params, data);
            if (res.data.ResultCode === 200) {
                console.log("2000");
                navigation.navigate("SigninScreen");
            }
        } catch (error) {
            console.log("error", error.ResultMessage);
            setErrorText(error.ResultMessage);
            // setErrorText(error?.ResultMessage);
            // console.log("ResultMessage", ResultMessage);
        }
    };

    const navigation = useNavigation();

    useEffect(() => {
        DemoToken();
    }, []);

    const DemoToken = async () => {
        const accessToken = await LocalStorage.getToken();
        !!accessToken &&
            setUser(JSON.parse(Object.values(parseJwt(accessToken))[0]));
    };

    function parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            Buffer.from(base64, "base64").toString()
        );
        return JSON.parse(jsonPayload) || {};
    }
    // console.log("oldPassword", oldPassword)
    // console.log("newPassword", newPassword)
    // console.log("confirmNewPassword", confirmNewPassword)
    // console.log("ChangePassword", user);
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: "#A5C63F",
                    width: "100%",
                    height: insets.top,
                }}
            ></View>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#A5C63F",
                    width: "100%",
                    // paddingTop: insets.top,
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "10%",
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View
                        style={{
                            flexDirection: "row",
                            width: 30,
                            height: 30,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={require("../../../../assets/images/goback.png")}
                            style={{ width: 7.17, height: 14 }}
                        />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "white",
                        }}
                    >
                        Đổi mật khẩu
                    </Text>
                </View>
                {/* <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../../../assets/images/find.png')}
            style={{ width: 24, height: 24, marginRight: 16 }}
          />
        </TouchableOpacity> */}
                <View
                    style={{
                        backgroundColor: "#A5C63F",
                        height: 24,
                        width: 24,
                    }}
                ></View>
            </View>
            <View style={styles.container}>
                <View style={{ marginHorizontal: 20, marginTop: 32 }}>
                    <Text
                        style={{
                            marginTop: 16,
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Mật khẩu cũ
                    </Text>
                    <View
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16,
                            borderRadius: 6,
                            borderWidth: 1,
                            borderColor: "#999999",
                        }}
                    >
                        <TextInput
                            value={oldPassword}
                            placeholder="Mật khẩu cũ"
                            secureTextEntry={hidePass ? true : false}
                            onChangeText={(e: string) => setoldPassword(e)}
                            style={{
                                width: "90%",
                                height: 40,
                                borderRadius: 6,
                                paddingHorizontal: 16,
                            }}
                        />
                        <Icon
                            name={hidePass ? "eye" : "eye-slash"}
                            size={15}
                            color="grey"
                            onPress={() => setHidePass(!hidePass)}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: 16,
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Mật khẩu mới
                    </Text>
                    <View
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16,
                            borderRadius: 6,
                            borderWidth: 1,
                            borderColor: "#999999",
                        }}
                    >
                        <TextInput
                            value={newPassword}
                            secureTextEntry={hidePass1 ? true : false}
                            placeholder="Mật khẩu mới"
                            onChangeText={(e: string) => setnewPassword(e)}
                            style={{
                                width: "90%",
                                height: 40,
                                borderRadius: 6,
                                paddingHorizontal: 16,
                            }}
                        />
                        <Icon
                            name={hidePass1 ? "eye" : "eye-slash"}
                            size={15}
                            color="grey"
                            onPress={() => setHidePass1(!hidePass1)}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: 16,
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Nhập lại mật khẩu mới
                    </Text>

                    <View
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16,
                            borderRadius: 6,
                            borderWidth: 1,
                            borderColor: "#999999",
                        }}
                    >
                        <TextInput
                            secureTextEntry={hidePass2 ? true : false}
                            value={confirmNewPassword}
                            placeholder="Xác nhận mật khẩu"
                            onChangeText={(e: string) =>
                                setconfirmNewPassword(e)
                            }
                            style={{
                                width: "90%",
                                height: 40,
                                borderRadius: 6,
                                paddingHorizontal: 16,
                            }}
                        />
                        <Icon
                            name={hidePass2 ? "eye" : "eye-slash"}
                            size={15}
                            color="grey"
                            onPress={() => setHidePass2(!hidePass2)}
                        />
                    </View>
                    <ErrorText content={errorText} />
                    <TouchableOpacity onPress={ChangePasswordPut}>
                        <View
                            style={{
                                marginTop: 32,
                                backgroundColor: "#9CBD44",
                                height: 44,
                                width: "100%",
                                borderRadius: 6,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: "#ffffff",
                                    fontWeight: "600",
                                }}
                            >
                                ĐỔI MẬT KHẨU
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        padding: 20,
        color: "#fff",
        borderRadius: 12,
    },
});
export default UpdateAccountScreen;
