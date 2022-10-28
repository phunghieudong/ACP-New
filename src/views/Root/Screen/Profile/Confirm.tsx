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
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderRoot from "../../../../components/HeaderRoot/index";

const ConfirmScreen = ({ navigation }) => {
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
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            width: 30,
                            height: 30,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    ></View>
                </TouchableOpacity>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "white",
                        }}
                    >
                        Đăng ký thành công
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
                    marginHorizontal: 20,
                    marginTop: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                }}
            >
                <Image
                    source={require("../../../../assets/images/Confirm.png")}
                    style={{ width: 87.69, height: 78.85 }}
                />

                <Text
                    style={{
                        fontSize: 20,
                        color: "#000000",
                        marginTop: 34,
                        fontWeight: "600",
                        textAlign: "center",
                    }}
                >
                    Chúc mừng bạn đã đăng ký thành công
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: "#999999",
                        marginTop: 8,
                        textAlign: "center",
                    }}
                >
                    Mời bạn quay trở về trâng chủ để tiếp tục đấu các phiên thầu
                    khác trong tương lai .
                </Text>
                {/* <Text style={{ fontSize: 14, color: '#999999', marginTop: 8 }}></Text> */}
            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 32,
                    width: "100%",
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    <View
                        style={{
                            marginTop: 16,
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
                            QUAY LẠI TRANG CHỦ
                        </Text>
                    </View>
                </TouchableOpacity>
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
export default ConfirmScreen;
