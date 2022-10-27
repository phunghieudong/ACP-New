//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Linking,
} from "react-native";
import Swiper from "react-native-swiper";
import { GetTechnicalProduct } from "../../../../api/TechnicalProduct/index";
import { BiddingSessionProps } from "../../../../navigators/types/Profile";
import { GetTechnicalProductdata } from "../../../../types/GetTechnicalProduct";
import moment from "moment";

const BiddingListScreen: FC<BiddingSessionProps> = ({
    navigation,
    route: {
        params: {
            IsBid,
            Name,
            ProductName,
            StartDate,
            EndDate,
            MinimumQuantity,
            MaximumQuantity,
            Id,
            ProductId,
            Thumbnail,
        },
    },
}) => {
    const [shouldShow, setShouldShow] = useState(false);
    const [data, setData] = useState<GetTechnicalProductdata[]>([]);
    const [page, setPage] = useState({ current: 1, next: true });
    const [ready, setReady] = useState(false);
    const [buttom, setbuttom] = useState(false);
    const supportedURL =
        "http://acp.monamedia.net/42514f33-1141-4c13-bd95-e768f772bd82-21_1686_PBHC_KHDT_BC_sơ_kết_9_tháng_đầu_năm,_kế_hoạch.pdf";
    //
    const OpenURLButton = ({ url, children }) => {
        const handlePress = () => {
            Linking.openURL(url);
        };
        return (
            <TouchableOpacity onPress={handlePress} activeOpacity={0.2}>
                {children}
            </TouchableOpacity>
        );
    };

    console.log("Dongggggggggggggg", ProductId);
    const DemoButtom = () => {
        if (!IsBid) {
            setbuttom(buttom);

            navigation.navigate("SignUpBiding", {
                ID: Id,
                MinimumQuantity: MinimumQuantity,
                MaximumQuantity: MaximumQuantity,
            });
        } else {
            setbuttom(!buttom);
        }
    };
    useEffect(() => {
        (async () => {
            try {
                const { current, next } = page;
                if (next) {
                    const params = {
                        pageIndex: current,
                        pageSize: 20,
                        ProductId: ProductId,
                    };

                    // ProductId:"c0239221-589e-42c2-f49b-08da9f9bf85a"
                    const res = await GetTechnicalProduct(params);
                    console.log("ProductId", ProductId);
                    if (res.ResultCode == 200) {
                        setData([...res.Data.Items[0].TechnicalValueList]);
                        //    setData([...res.Data.Items.filter((item) => item.Status == 1)]);
                        console.log("Duoi ne", res.Data.Items[0]);
                    }
                    if (!ready) setReady(true);
                }
            } catch (error) {}
        })();
    }, [page.current]);
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
            <ScrollView>
                <View style={{ marginTop: 6, marginHorizontal: 20 }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#000000",
                            fontWeight: "600",
                        }}
                    >
                        Chào thầu dự án {Name}
                    </Text>
                    <Text style={{ fontSize: 14, color: "#999999" }}>
                        Chi tiết phần phiên đấu thầu mà anh chị quan tâm
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
                            Tên phiên
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#000000",
                                fontWeight: "600",
                            }}
                        >
                            {Name}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#999999" }}>
                            Sản phẩm
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#000000",
                                fontWeight: "600",
                            }}
                        >
                            {ProductName}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#999999" }}>
                            Thời gian bắt đầu
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#000000",
                                fontWeight: "600",
                            }}
                        >
                            {moment(StartDate * 1000).format(
                                "HH:mm:ss - DD/MM/YYYY"
                            )}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#999999" }}>
                            Thời gian kết thúc
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#000000",
                                fontWeight: "600",
                            }}
                        >
                            {moment(EndDate * 1000).format(
                                "HH:mm:ss - DD/MM/YYYY"
                            )}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#999999" }}>
                            Số lượng tối thiểu của nhà cung cấp
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#000000",
                                fontWeight: "600",
                            }}
                        >
                            {MinimumQuantity.toLocaleString()}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 14, color: "#999999" }}>
                            Số lượng tối đa của nhà cung cấp{" "}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#000000",
                                fontWeight: "600",
                            }}
                        >
                            {MaximumQuantity.toLocaleString()}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 16,
                        marginHorizontal: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#E7312F",
                            fontWeight: "600",
                            fontStyle: "italic",
                        }}
                    >
                        Tiêu chuẩn kĩ thuật
                    </Text>
                    <TouchableOpacity
                        onPress={() => setShouldShow(!shouldShow)}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: "blue",
                                fontWeight: "400",
                                fontStyle: "normal",
                            }}
                        >
                            (Xem thêm)
                        </Text>
                    </TouchableOpacity>
                </View>

                {shouldShow ? (
                    <>
                        <FlatList
                            data={data}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            style={{
                                borderWidth: 1,
                                borderColor: "#9CBD44",
                                borderRadius: 6,
                                margin: 20,
                                marginHorizontal: 20,
                                marginBottom: 20,
                            }}
                            renderItem={({ item }) => (
                                <>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            paddingHorizontal: 50,
                                            marginTop: 10,
                                            marginBottom: 20,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                width: "100%",
                                                fontSize: 16,
                                                fontWeight: "400",
                                                color: "#666666",
                                            }}
                                        >
                                            {item.FileName}
                                        </Text>

                                        <OpenURLButton url={item.Link}>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Image
                                                    source={require("../../../../assets/images/kinhlup.png")}
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                            </View>
                                        </OpenURLButton>
                                    </View>
                                </>
                            )}
                        />
                    </>
                ) : null}
                {!buttom && (
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <TouchableOpacity onPress={DemoButtom}>
                            <View
                                style={{
                                    marginTop: 3,
                                    marginBottom: 20,
                                    backgroundColor: "#9CBD44",
                                    height: 44,
                                    width: 343,
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 16, color: "#ffffff" }}
                                >
                                    BỎ THẦU
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
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
export default BiddingListScreen;
