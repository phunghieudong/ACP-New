//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { useNavigation } from "@react-navigation/native";
const SignUpBidingScreen = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("");
    const [text1, onChangeText1] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, alignItems:'center'}}>

                <View style={{ flexDirection: 'row', width: 50 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image

                            source={require('../../../../assets/images/goback.png')}
                            style={{ width: 7.17, height: 14 }}
                        />

                    </TouchableOpacity>

                </View>

                <View >
                    <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Đăng ký dự thầu</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image

                            source={require('../../../../assets/images/find.png')}
                            style={{ width: 24, height: 24, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Information")}>
                        <Image

                            source={require('../../../../assets/images/bell.png')}
                            style={{ width: 24, height: 25, }}
                        />
                    </TouchableOpacity>
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
                        marginTop: 8

                    }}
                    onChangeText={onChangeText}
                    value={text}
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
                    onChangeText={onChangeText1}
                    value={text1}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, width: "100%", }}>
                <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
                    <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 390, borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
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