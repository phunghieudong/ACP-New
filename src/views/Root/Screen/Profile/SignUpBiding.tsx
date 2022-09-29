//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Pressable, } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { useNavigation } from "@react-navigation/native";
import { BottomSheet } from 'react-native-btr';
import { FontAwesome } from '@expo/vector-icons';
import { PostBiddingTicket } from '../../../../api/CreateBiddingTick';
import ErrorText from '../../../../components/More/error-text';
import { ToastAndroid } from 'react-native';
import { NumberFormat } from 'react-number-format';
const SignUpBidingScreen = (props: any) => {
    const ID = props.route.params.ID;
    const MinimumQuantity = props.route.params.MinimumQuantity;
    const MaximumQuantity = props.route.params.MaximumQuantity;
    const [quantity, setQuantity] = useState<any>('');
    const [price, setPrice] = useState<any>('');
    const [errorText, setErrorText] = useState<string>('');
    const BiddingTicket = () => {
        setErrorText('');
        if (!!!quantity) {
            setErrorText('Vui lòng nhập số lượng ');
        } else if (!!!price) {
            setErrorText('Vui lòng nhập giá');
        }
        else if (quantity < MinimumQuantity) {
            setErrorText('Vui lòng nhập số lượng lớn hơn giới hạn');
        }
        else if (quantity > MaximumQuantity) {
            setErrorText('Vui lòng nhập số lượng nhỏ hơn giới hạn');
        } else {
            PostBidding({
                quantity: quantity,
                price: price,
                biddingSessionId: ID
            });
        }
    }
    const PostBidding = async (data: any) => {
        try {
            const res = await PostBiddingTicket.Ticket(data);
            if (res.data.ResultCode === 200) {
                navigation.navigate('Confirm')
            } else {
                console.log("ressssssssssssssssssssssss", res)
                // setErrorText(res.ResultMessage);
                // navigation.navigate('ConfirmFail')

            }
        } catch (error: any) {
            navigation.navigate('ConfirmFail')
        }
    }
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ flexDirection: 'row', width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../../../assets/images/goback.png')}
                            style={{ width: 7.17, height: 14 }}
                        />
                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Đăng ký dự thầu</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 10, width: 50 }}>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 32 }}>
                <Text style={{ fontWeight: '600' }}>Số lượng</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8,
                    }}
                  

                    value={quantity}
                    placeholder='Số lượng'
                    onChangeText={(e: number) => setQuantity(e)}
                    keyboardType={'numeric'}
                />
                <Text style={{ marginTop: 16, fontWeight: '600' }}>Giá</Text>
                <TextInput
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
                />
                <ErrorText content={errorText} />
                <TouchableOpacity onPress={BiddingTicket}>
                    <View style={{ marginTop: 32, backgroundColor: '#9CBD44', height: 44, width: "100%", borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>XÁC NHẬN</Text>
                    </View>
                </TouchableOpacity>

            </View>


        </View>
    );
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 20,
        color: '#fff',
        borderRadius: 12,
    },
});
export default SignUpBidingScreen; 