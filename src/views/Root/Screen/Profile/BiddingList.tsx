
//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { getBiddingSession } from "../../../../api/BiddingSession/index";
import { BiddingSessionProps } from "../../../../navigators/types/Profile";
import { BiddingSessionData } from "../../../../types/BiddingSession";
import Modal from "react-native-modal";
import moment from 'moment';
const BiddingListScreen: FC<BiddingSessionProps> = ({ navigation,
    route: {
        params: { Name, ProductName, StartDate, EndDate, MinimumQuantity, MaximumQuantity },
    },
}) => {
    return (
        <View style={styles.container}>
            <Swiper
                showsButtons={false}
                height={180}
                containerStyle={{ flex: 0 }}
                activeDotColor={"#E7312F"}
                dotColor="rgba(0, 0, 0, .2)"
                paginationStyle={{
                    bottom: 8,
                }}
            >
                <Image
                    source={require('../../../../assets/images/BiddingList.png')}
                    style={{ width: "100%", height: 180 }}
                />
                <Image
                    source={require('../../../../assets/images/BiddingList.png')}
                    style={{ width: "100%", height: 180 }}
                />
                <Image
                    source={require('../../../../assets/images/BiddingList.png')}
                    style={{ width: "100%", height: 180 }}
                />
            </Swiper>

            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#A5C63F', height: 32, width: 32, marginTop: 30, marginLeft: 16, borderRadius: 6, position: 'absolute' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../../../assets/images/goback.png')}
                            style={{ width: 7.17, height: 14 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 6, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>Chào thầu dự án {Name}</Text>
                <Text style={{ fontSize: 14, color: '#999999', }}>Chi tiết phần phiên đấu thầu mà anh chị quan tâm</Text>
            </View>
            <View style={{ flexDirection: 'column', marginHorizontal: 20, paddingTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Tên phiên</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{Name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Sản phẩm</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{ProductName}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian bắt đầu</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{moment(StartDate * 1000).format('DD/MM/YYYY, HH:mm:ss')}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian kết thúc</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{moment(EndDate * 1000).format('DD/MM/YYYY, HH:mm:ss')}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Số lượng tối thiểu gói thầu</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{MinimumQuantity}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Số lượng tối đa gói thầu </Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{MaximumQuantity}</Text>
                </View>
            </View>



            <TouchableOpacity >
                <View style={{ marginTop: 16, marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, color: '#E7312F', fontWeight: "600", fontStyle: 'italic' }}>Tiêu chuẩn kĩ thuật</Text>

                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'column', marginHorizontal: 20, paddingTop: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Tiêu chuẩn kĩ thuật 1</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>Dừa chất lượng XT21</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Tiêu chuẩn kĩ thuật 2</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>Dừa chất lượng XT21</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ fontSize: 14, color: "#999999" }}>Tiêu chuẩn kĩ thuật 3</Text>
                    <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>Dừa chất lượng XT21</Text>
                </View>

            </View>


            <View style={{ flexDirection: 'column', marginHorizontal: 20, paddingTop: 10 }}>

                <Swiper
                    showsButtons={true}
                    endFillColor="green"
                    height={80}
                    containerStyle={{ flex: 0 }}
                    activeDotColor={"#9CBD44"}
                    dotColor="rgba(0, 0, 0, .2)"
                    paginationStyle={{
                        bottom: 8,
                    }}
                >
                    <Image
                        source={require('../../../../assets/images/image1.png')}
                        style={{ width: "100%", height: 80 }}
                    />
                    <Image
                        source={require('../../../../assets/images/image2.png')}
                        style={{ width: "100%", height: 80 }}
                    />
                    <Image
                        source={require('../../../../assets/images/image3.png')}
                        style={{ width: "100%", height: 80 }}
                    />
                </Swiper>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpBiding')}>
                    <View style={{ marginTop: 3, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
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