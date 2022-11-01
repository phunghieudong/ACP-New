//@ts-nocheck
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
    Pressable,
} from "react-native";
// import { ViewProps } from '../../../navigators/types/navigation';
import { FontAwesome } from "@expo/vector-icons";
import { accountApi } from "../../../api/Auth";
import ErrorText from "../../../components/More/error-text";
import { PutPassword } from "../../../api/Demo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
function ForgotPasswordScreen() {
    const [username, setusername] = useState<any>("");
    const [errorText, setErrorText] = useState<string>("");
    const UserNamePut = () => {
        console.log("phunghieudong", username);
        setErrorText("");
        if (!!!username) {
            setErrorText("Vui lòng Username ");
        } else {
            UserNamePutAPI({
                username: username,
            });
            console.log("phunghieudong123", username);
        }
    };
    const UserNamePutAPI = async (data: any) => {
        try {
            const res = await PutPassword.Password(data);
            if (res.data.ResultCode === 200) {
                console.log("ressssssssssssssssssssssss", res);
                navigation.navigate("OTP");
            } else {
                console.log("ressssssssssssssssssssssss", res);
            }
        } catch (error: any) {
            setErrorText("Username không tồn tại ! ");
        }
    };
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
            }}
        >
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
                            source={require("../../../assets/images/goback.png")}
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
                        Quên mật khẩu
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
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Text
                        style={{
                            fontSize: 36,
                            fontWeight: "600",
                            marginTop: 15,
                        }}
                    >
                        Quên mật khẩu
                    </Text>
                    <Text
                        style={{
                            color: "#666666",
                            fontSize: 15,
                            width: 400,
                            textAlign: "center",
                            marginTop: 30,
                            paddingHorizontal: 20,
                        }}
                    >
                        Vui lòng nhập UserName của bạn. Chúng tôi sẽ gửi bạn mật
                        khẩu thông qua Email !
                    </Text>
                </View>
                <View
                    style={{
                        width: 343,
                        marginTop: 58,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "center",
                            elevation: 10,
                            borderRadius: 6,
                        }}
                    >
                        <TextInput
                            value={username}
                            placeholder="username"
                            onChangeText={(e: any) => setusername(e)}
                            style={{
                                width: "90%",
                                height: 40,
                                borderRadius: 6,
                                paddingHorizontal: 16,
                            }}
                        />
                    </View>
                </View>
                <ErrorText content={errorText} />
                <TouchableOpacity onPress={UserNamePut}>
                    <View
                        style={{
                            marginTop: 50,
                            borderColor: "#000000",
                            backgroundColor: "#9CBD44",
                            height: 44,
                            width: 343,
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
                            XÁC NHẬN
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "red",
        width: "100%",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 4,
        borderColor: "#d7d7d7",
    },
    inputField: {
        padding: 14,
        fontSize: 22,
        width: "90%",
    },
});
export default ForgotPasswordScreen;
