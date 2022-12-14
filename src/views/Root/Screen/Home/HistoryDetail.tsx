//@ts-nocheck

import React, { FC, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BiddingTicketProps } from "../../../../navigators/types/Profile";
import Swiper from "react-native-swiper";
import moment from "moment";
import Spinner from "react-native-loading-spinner-overlay/lib";
const HistoryDetailScreen: FC<BiddingTicketProps> = ({
    navigation,
    route: {
        params: {
            FullName,
            Price,
            Quantity,
            BiddingName,
            BiddingSessionName,
            Thumbnail,
            Id,
            //hieudongtesst
            Created,
            StatusName,
        },
    },
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            {Thumbnail !== "" ? (
                <Image
                    source={{ uri: Thumbnail }}
                    style={{ width: "100%", height: 180 }}
                />
            ) : (
                <Image
                    source={require("../../../../assets/images/null.jpg")}
                    style={{ width: "100%", height: 180 }}
                />
            )}

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#A5C63F",
                    height: 32,
                    width: 32,
                    marginTop: 30,
                    marginLeft: 16,
                    borderRadius: 6,
                    position: "absolute",
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View
                        style={{
                            height: 30,
                            width: 30,
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
            </View>
            <View style={{ marginTop: 6, marginHorizontal: 20 }}>
                <Text
                    style={{
                        fontSize: 20,
                        color: "#000000",
                        fontWeight: "600",
                    }}
                >
                    Chi ti???t phi??n g??i th???u {BiddingName}
                </Text>
                <Text style={{ fontSize: 14, color: "#999999" }}>
                    Chi ti???t ph???n phi??n ?????u th???u m?? anh ch??? quan t??m
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "column",
                    marginHorizontal: 20,
                    paddingTop: 15,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        T??n nh?? cung c???p
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {FullName}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        S??? phi??n
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {BiddingSessionName}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        T??n phi??n
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {BiddingName}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        Th???i gian
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {moment(Created * 1000).format("HH:mm:ss - DD/MM/YYYY")}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        S??? l?????ng{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {Quantity.toLocaleString()}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>Gi?? </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {Price.toLocaleString()} VN??
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        K???t qu???{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        {StatusName}
                    </Text>
                </View>
            </View>

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 32,
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
                        <Text style={{ fontSize: 16, color: "#ffffff" }}>
                            TR??? V??? TRANG CH???
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {loading && (
                <Spinner
                    visible={true}
                    textContent={"??ang t???i ...."}
                    textStyle={{
                        color: "#000",
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

export default HistoryDetailScreen;
