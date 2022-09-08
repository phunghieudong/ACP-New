


import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
const SignUpBidingScreen = ({ navigation }) => {

    const [text, onChangeText] = React.useState("");
    const [text1, onChangeText1] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, justifyContent: "center", alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#ffffff' }}>Đăng ký dự thầu</Text>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 32 }}>
                <Text>Số lượng</Text>
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
                <Text style={{ marginTop: 16 }}>Giá</Text>
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
                    <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#ffffff" }}>XÁC NHẬN</Text>
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