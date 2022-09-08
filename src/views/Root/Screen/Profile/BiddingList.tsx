

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
const BiddingListScreen = ({ navigation }) => {



    return (
        <View style={styles.container}>

            <View>
                <Image

                    source={require('../../../../assets/images/BiddingList.png')}
                    style={{ width: "100%", height: 180 }}
                />
            </View>
            <View style={{ marginTop: 46, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>Chào thầu dự án dừa Bến Tre</Text>
                <Text style={{ fontSize: 14, color: '#999999', }}>Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s</Text>
            </View>
            <View style={{ flexDirection: 'column', marginHorizontal: 20, paddingTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Tên phiên</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>SP001</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Sẩn phẩm</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>Dừa nước</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian bắt đầu</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>10:00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian kết thúc</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>13:00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Số lượng tối thiểu</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>3,000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Số lượng tối đa</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>5,000</Text>
                </View>



            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpBiding')}>
                    <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#ffffff" }}>BỎ THẦU</Text>
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
export default BiddingListScreen; 