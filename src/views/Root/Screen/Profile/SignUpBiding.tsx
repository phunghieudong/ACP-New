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
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { PostBiddingTicket } from "../../../../api/CreateBiddingTick";
import ErrorText from "../../../../components/More/error-text";
import { ToastAndroid } from "react-native";
import CurrencyInput from "react-native-currency-input";
import NumberFormat from "react-number-format";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spinner from "react-native-loading-spinner-overlay/lib";
const SignUpBidingScreen = (props: any) => {
    const ID = props.route.params.ID;
    const MinimumQuantity = props.route.params.MinimumQuantity;
    const MaximumQuantity = props.route.params.MaximumQuantity;
    const [quantity, setQuantity] = useState<any>("");
    const [price, setPrice] = useState<any>("");
    const [errorText, setErrorText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const BiddingTicket = () => {
        setErrorText("");
        if (!!!quantity) {
            setErrorText("Vui lòng nhập số lượng ");
        } else if (!!!price) {
            setErrorText("Vui lòng nhập giá");
        } else if (quantity < MinimumQuantity) {
            setErrorText("Vui lòng nhập số lượng lớn hơn giới hạn");
        } else if (quantity > MaximumQuantity) {
            setErrorText("Vui lòng nhập số lượng nhỏ hơn giới hạn");
        } else {
            PostBidding({
                quantity: quantity,
                price: price,
                biddingSessionId: ID,
            });
        }
    };
    const PostBidding = async (data: any) => {
        setLoading(true);
        try {
            const res = await PostBiddingTicket.Ticket(data);
            if (res.ResultCode === 200) {
                navigation.navigate("Confirm");
            } else {
                // setErrorText(res.ResultMessage);
                // console.log("Phunghieudong");
                // navigation.navigate("ConfirmFail");
            }
        } catch (error: any) {
            navigation.navigate("ConfirmFail");
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const insets = useSafeAreaInsets();
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
                        Đăng ký dự thầu
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
            <View style={{ marginHorizontal: 20, marginTop: 32 }}>
                <Text style={{ fontWeight: "600" }}>Số lượng</Text>
                {/* <TextInput
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8,
                    }}



                    value={currencyFormat(quantity)}
                    placeholder='Số lượng'
                    onChangeText={(e: number) => setQuantity(e)}
                    keyboardType={'numeric'}
                /> */}
                <CurrencyInput
                    value={quantity}
                    onChangeValue={(value: any) => setQuantity(value)}
                    placeholder="Số lượng"
                    delimiter=","
                    separator="."
                    precision={0}
                    onChangeText={(formattedValue) => {
                        // console.log(formattedValue); // $2,310.46
                    }}
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8,
                    }}
                />
                <Text style={{ marginTop: 16, fontWeight: "600" }}>Giá</Text>
                {/* <TextInput
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8

                    }}

                    value={price}
                    placeholder='Giá tiền'
                    onChangeText={(e: number) => setPrice(e)}
                    keyboardType={'numeric'}

                /> */}
                <CurrencyInput
                    value={price}
                    onChangeValue={(value: any) => setPrice(value)}
                    placeholder="Giá tiền"
                    delimiter=","
                    separator="."
                    precision={0}
                    onChangeText={(formattedValue) => {
                        // console.log(formattedValue); // $2,310.46
                    }}
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8,
                    }}
                />

                {/* <NumberFormat
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8

                    }}
                    value={quantity}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    // renderText={(value) => <Text>{value}</Text>}
                    onChangeText={(e: number) => setQuantity(e)}
                /> */}

                <ErrorText content={errorText} />
                <TouchableOpacity onPress={BiddingTicket}>
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
                            XÁC NHẬN
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {loading && (
                <Spinner
                    visible={true}
                    textContent={"Đang tải ...."}
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
export default SignUpBidingScreen;
