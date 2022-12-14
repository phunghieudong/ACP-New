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
    ToastAndroid,
    Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { putProvider } from "../../../../api/Provider/index";
import ErrorText from "../../../../components/More/error-text";
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from "buffer";
import { refreshTokenApi } from "../../../../api/refresh-token";
import * as ImagePicker from "expo-image-picker";
import { onChange } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spinner from "react-native-loading-spinner-overlay/lib";
const ChangePasswordScreen = () => {
    function showToast() {
        ToastAndroid.show("Chức năng đang phát triển", ToastAndroid.SHORT);
    }

    const navigation = useNavigation();
    const [fullName, setfullName] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [taxCode, settaxCode] = useState<string>("");
    const [address, setaddress] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");
    const [thumbnail, setthumbnail] = useState<string>("");
    const [user, setUser] = useState({});
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log("uri-phunghieudong", result.uri);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const UpdateProvider = () => {
        setErrorText("");
        if (address && email && phone && fullName) {
            setModalVisible(!modalVisible);
        }
        if (!!!address) {
            setErrorText("Vui lòng nhập địa chỉ mới !");
        }
        if (!!!email) {
            setErrorText("Vui lòng nhập gmail mới !");
        }
        if (!!!phone) {
            setErrorText("Vui lòng nhập số điện thoại mới !");
        }
        if (!!!fullName) {
            setErrorText("Vui lòng nhập tên công ty mới !");
        } else {
            UpdateProviderPutApi({
                fullName: fullName,
                phone: phone,
                address: address,
                email: email,
                taxCode: taxCode,
                thumbnail: image,
                id: user.userId,
            });
        }
    };
    const [modalVisible, setModalVisible] = useState(false);

    const UpdateProviderPutApi = async (data: any) => {
        try {
            setLoading(true);
            const res = await putProvider.putapiprovider(data);
            if (res.data.ResultCode == 200) {
                refreshToken();
            } else {
                console.log("hieudong2", res);
            }
            setLoading(false);
        } catch (error) {
            console.log("error", error.ResultMessage);
            setErrorText(error.ResultMessage);
        }
    };
    useEffect(() => {
        DemoToken();
    }, []);
    async function refreshToken() {
        try {
            const res = await refreshTokenApi.get();
            console.log("new token: ", res.data.Data.token);
            if (res.data?.ResultCode == 200) {
                await LocalStorage.setToken(res.data.Data.token);
            }
        } catch (e) {}
    }

    const DemoToken = async () => {
        const accessToken = await LocalStorage.getToken();
        const userInfo = JSON.parse(Object.values(parseJwt(accessToken))[0]);

        setfullName(userInfo?.fullName || "");
        setemail(userInfo?.email || "");
        setphone(userInfo?.phone || "");
        settaxCode(userInfo?.taxCode || "");
        setaddress(userInfo?.address || "");
        setthumbnail(userInfo?.thumbnail || "");
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
                        Cập nhật thông tin
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
                <TouchableOpacity>
                    {/* onPress={showToast} */}
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 15,
                            flexDirection: "row",
                        }}
                    >
                        {user.thumbnail !== "" || image ? (
                            <Image
                                source={{
                                    uri: !!image ? image : user.thumbnail,
                                }}
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 100,
                                }}
                            />
                        ) : (
                            <Image
                                source={require("../../../../assets/images/camera.png")}
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 100,
                                }}
                            />
                        )}
                    </View>

                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 5,
                        }}
                    >
                        <Text
                            onPress={pickImage}
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            Cập nhật ảnh đại diện
                        </Text>
                    </View>
                </TouchableOpacity>

                <ScrollView>
                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                Tên công ty
                            </Text>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: "red",
                                }}
                            >
                                {" "}
                                *
                            </Text>
                        </View>
                        <TextInput
                            value={fullName}
                            placeholder="Tên công ty"
                            onChangeText={(e: string) => setfullName(e)}
                            style={{
                                height: 40,
                                borderWidth: 0.5,
                                borderRadius: 6,
                                borderColor: "#666666",
                                paddingHorizontal: 16,
                                marginTop: 8,
                            }}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                Số điện thoại
                            </Text>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: "red",
                                }}
                            >
                                {" "}
                                *
                            </Text>
                        </View>
                        <TextInput
                            value={phone}
                            placeholder="Số điện thoại"
                            keyboardType={"numeric"}
                            onChangeText={(e: string) => setphone(e)}
                            style={{
                                height: 40,
                                borderWidth: 0.5,
                                borderRadius: 6,
                                borderColor: "#666666",
                                paddingHorizontal: 16,
                                marginTop: 8,
                            }}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                Email
                            </Text>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: "red",
                                }}
                            >
                                {" "}
                                *
                            </Text>
                            {/* <Text style={{ marginTop: 16, fontSize: 20, fontWeight: "600", color: "red" }}> *</Text> */}
                        </View>
                        <TextInput
                            value={email}
                            placeholder="Email"
                            onChangeText={(e: string) => setemail(e)}
                            style={{
                                height: 40,
                                borderWidth: 0.5,
                                borderRadius: 6,
                                borderColor: "#666666",
                                paddingHorizontal: 16,
                                marginTop: 8,
                            }}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                Mã số thuế
                            </Text>
                        </View>
                        <TextInput
                            value={taxCode}
                            placeholder="Mã số thuế"
                            onChangeText={(e: string) => settaxCode(e)}
                            style={{
                                height: 40,
                                borderWidth: 0.5,
                                borderRadius: 6,
                                borderColor: "#666666",
                                paddingHorizontal: 16,
                                marginTop: 8,
                            }}
                        />
                        <View style={{ flexDirection: "row" }}>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 16,
                                    fontWeight: "600",
                                }}
                            >
                                Địa chỉ
                            </Text>
                            <Text
                                style={{
                                    marginTop: 16,
                                    fontSize: 20,
                                    fontWeight: "600",
                                    color: "red",
                                }}
                            >
                                {" "}
                                *
                            </Text>
                        </View>
                        <TextInput
                            value={address}
                            placeholder="Địa chỉ"
                            onChangeText={(e: string) => setaddress(e)}
                            style={{
                                height: 40,
                                borderWidth: 0.5,
                                borderRadius: 6,
                                borderColor: "#666666",
                                paddingHorizontal: 16,
                                marginTop: 8,
                            }}
                        />
                        <ErrorText content={errorText} />
                        <TouchableOpacity onPress={() => UpdateProvider()}>
                            <View
                                style={{
                                    marginTop: 32,
                                    marginBottom: 32,
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
                                    CẬP NHẬT
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "600",
                                marginBottom: 15,
                                textAlign: "center",
                            }}
                        >
                            Xin chúc mừng{" "}
                        </Text>
                        <Text style={styles.modalText}>
                            Bạn đã cập nhật thông tin Nhà Cung Cấp thành công{" "}
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>THOÁT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {loading && (
                <Spinner
                    visible={true}
                    textContent={"Đang tải ...."}
                    textStyle={{
                        color: "#fff",
                        fontSize: 16,
                        // fontFamily: appConfig.fonts.Bold,
                    }}
                />
            )}
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
    },
    button1: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        marginLeft: 5,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonClose1: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "#666666",
    },
});
export default ChangePasswordScreen;
