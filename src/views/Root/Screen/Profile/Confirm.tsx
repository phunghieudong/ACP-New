


import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";

const ConfirmScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingTop: 25 }}>

                <View style={{ flexDirection: 'row', width: 50 }}>


                </View>

                <View >
                    <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Đăng ký thành công</Text>
                </View>

                <View style={{ flexDirection: 'row' , height:10 , width:50}}>
               
               </View>

            </View>
            <View style={{ marginHorizontal: 20, marginTop: 32, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <Image

                    source={require('../../../../assets/images/Confirm.png')}
                    style={{ width: 87.69, height: 78.85 }}
                />

                <Text style={{ fontSize: 20, color: '#000000', marginTop: 34, fontWeight: "600" }}>Chúc mừng bạn đã đăng ký thành công</Text>
                <Text style={{ fontSize: 14, color: '#999999', marginTop: 8 , textAlign:'center' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                {/* <Text style={{ fontSize: 14, color: '#999999', marginTop: 8 }}></Text> */}

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, width: "100%", }}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>QUAY LẠI TRANG CHỦ</Text>
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
export default ConfirmScreen; 