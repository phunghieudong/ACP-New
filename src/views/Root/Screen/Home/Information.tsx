//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from "buffer";
import { getNotification } from "../../../../api/Notification/Index";
import { NotificationData } from "../../../../types/Notification";
import moment from "moment";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spinner from "react-native-loading-spinner-overlay/lib";
const InformationScreen = () => {
    const [user, setUser] = useState({});
    const [isFirst, setFirst] = useState(true);

    const focused = useIsFocused();
    const getdata = async () => {
        const accessToken = await LocalStorage.getToken();
        const userx = await JSON.parse(Object.values(parseJwt(accessToken))[0]);
        try {
            setLoading(true);
            const { current, next } = page;
            const params = {
                pageIndex: current,
                pageSize: 20,
                UserId: userx.userId,
                OrderBy: 0,
            };
            const res = await getNotification(params);
            console.log("res ne ban oi1", res);
            if (res.ResultCode == 200) {
                setData(res.Data.Items);
                console.log("IsSeen", data);
                // console.log(data[0].IsSeen);
            }
            setLoading(false);
            if (!ready) setReady(true);
        } catch (error) {}
    };

    useEffect(() => {
        (async () => {
            if (!focused) {
                setFirst(true);
            } else {
                getdata();
            }
        })();
    }, [focused]);

    const [data, setData] = useState<NotificationData[]>([]);
    const [page, setPage] = useState({ current: 1, next: true });
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (!isFirst) {
            getdata();
        } else {
            setFirst(false);
        }
    }, [page.current]);

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
    const insets = useSafeAreaInsets();
    console.log("--- user", user);
    const navigation = useNavigation();
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
                <View
                    style={{
                        backgroundColor: "#A5C63F",
                        width: 30,
                        height: 30,
                    }}
                ></View>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "white",
                        }}
                    >
                        Thông báo
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
            {ready && !data.length && (
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("../../../../assets/images/nodata2.gif")}
                        style={{
                            width: "50%",
                            height: 200,
                            marginRight: 5,
                        }}
                    />
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 20,
                            fontWeight: "600",
                            marginTop: 20,
                            borderRadius: 6,
                            paddingVertical: 50,
                        }}
                    >
                        Bạn chưa có bất kì thông báo nào !
                    </Text>
                </View>
            )}
            {ready && (
                <FlatList
                    data={data}
                    style={{
                        paddingHorizontal: 30,
                        backgroundColor: "#fff",
                    }}
                    onEndReachedThreshold={0.5}
                    keyExtractor={(i) => i.Id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("InformationDetail", {
                                    Title: item.Title,
                                    IsSeen: item.IsSeen,
                                    IsType: item.IsType,
                                    content: item.content,
                                    Created: item.Created,
                                    Id: item.Id,
                                })
                            }
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingVertical: 20,
                                    borderBottomWidth: 1,
                                    borderColor: "#A5C63F",
                                    // backgroundColor: !item.IsSeen ? "#EEEEEE" : "#fff",
                                }}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <View
                                        style={{
                                            flexDirection: "column",
                                            width: "85%",
                                            marginHorizontal: 8,
                                        }}
                                    >
                                        {/* 
{item.IsType === 1 ? ( ) : ( ) } */}
                                        {/* {item.IsType === 1 ? (
                    <Text style={{ fontWeight: "600", color: "#3399FF" }}>
                      Phiên thầu bắt đầu
                    </Text>
                  ) : (
                    <Text style={{ fontWeight: "600", color: "red" }}>
                      Phiên thầu kết thúc
                    </Text>
                  )} */}
                                        <Text
                                            style={{
                                                fontWeight: "600",
                                                color:
                                                    item.IsType === 1
                                                        ? "#007AFF"
                                                        : item.IsType === 2
                                                        ? "red"
                                                        : item.IsType === 3
                                                        ? "#007AFF"
                                                        : "red",
                                            }}
                                        >
                                            {item.IsType === 1
                                                ? "Phiên thầu bắt đầu"
                                                : item.IsType === 2
                                                ? "Phiên thầu kết thúc"
                                                : item.IsType === 3
                                                ? "Bạn đã trúng thầu"
                                                : "Bạn đã rớt thầu"}
                                        </Text>
                                        <Text
                                            style={{
                                                width: "80%",
                                                fontWeight: "600",
                                                // color: item.IsType === 1 ? "#3399FF" : "red"
                                            }}
                                        >
                                            {item.Title}
                                        </Text>

                                        {/* <Text style={{ width: "80%" , fontWeight:"600",}}>{item.IsSeen}</Text> */}
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image
                                                source={require("../../../../assets/images/clock.png")}
                                                style={{
                                                    width: 14,
                                                    height: 14,
                                                    marginRight: 5,
                                                }}
                                            />
                                            <Text
                                                style={{ fontStyle: "italic" }}
                                            >
                                                {moment(
                                                    item.Created * 1000
                                                ).format("DD/MM/YYYY")}
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: !item.IsSeen
                                                ? "#3399FF"
                                                : "#fff",
                                            borderRadius: 100,
                                        }}
                                    ></View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
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
});
export default InformationScreen;
