
//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Linking, } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { GetTechnicalProduct } from "../../../../api/TechnicalProduct/index";
import { BiddingSessionProps } from "../../../../navigators/types/Profile";
import { GetTechnicalProductdata } from "../../../../types/GetTechnicalProduct";
import Modal from "react-native-modal";
import moment from 'moment';

const BiddingListScreen: FC<BiddingSessionProps> = ({ navigation,

    route: {
        params: { Name, ProductName, StartDate, EndDate, MinimumQuantity, MaximumQuantity, Id, ProductId },
    },


}) => {

    const [shouldShow, setShouldShow] = useState(false);
    const [data, setData] = useState<GetTechnicalProductdata[]>([]);
    const [page, setPage] = useState({ current: 1, next: true });
    const [ready, setReady] = useState(false);
    const supportedURL = "http://api-acp.monamedia.net/3f12d7bd-ce43-414e-b40d-41be89e481b3-Ky thuat trong dua 2020.pdf";
    // 
    const OpenURLButton = ({ url, children }) => {
        const handlePress = () => {
            Linking.openURL(url);
        }
        return <TouchableOpacity onPress={handlePress} activeOpacity={0.2}>{children}</TouchableOpacity>;
    };

    console.log("Dongggggggggggggg", ProductId);

    useEffect(() => {
        (async () => {
            try {
                const { current, next } = page;
                if (next) {
                    const params = { pageIndex: current, pageSize: 20, ProductId: ProductId };


                    // ProductId:"c0239221-589e-42c2-f49b-08da9f9bf85a"
                    const res = await GetTechnicalProduct(params);
                    console.log("Tren ne", res);
                    if (res.ResultCode == 200) {
                        setData([...res.Data.Items[0].TechnicalValueList]);
                        //    setData([...res.Data.Items.filter((item) => item.Status == 1)]);
                        console.log("Duoi ne", res.Data.Items[0]);
                    }
                    if (!ready) setReady(true);
                }
            } catch (error) {

            }
        })();
    }, [page.current]);
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
            <ScrollView>
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
                        <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{moment(StartDate * 1000).format('HH:mm:ss - DD/MM/YYYY')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ fontSize: 14, color: "#999999" }}>Thời gian kết thúc</Text>
                        <Text style={{ fontSize: 14, color: '#000000', fontWeight: "600" }}>{moment(EndDate * 1000).format('HH:mm:ss - DD/MM/YYYY')}</Text>
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




                <View style={{ marginTop: 16, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: '#E7312F', fontWeight: "600", fontStyle: 'italic' }}>Tiêu chuẩn kĩ thuật</Text>
                    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                        <Text style={{ fontSize: 20, color: 'blue', fontWeight: "600", fontStyle: 'italic' }}>(Xem thêm)</Text>
                    </TouchableOpacity>
                </View>

                {shouldShow ? (
                    <>
                        <FlatList
                            data={data}
                            style={styles.body}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => (



                                <View style={{ flexDirection: "column", paddingHorizontal: 50, marginTop: 20 }}>
                                    <Text style={{ width: "90%", fontSize: 16, fontWeight: "400", color: '#666666' }}>{item.TechnicalOptionName}</Text>



                                    <OpenURLButton url={supportedURL} >

                                        <Text style={{ width: "100%", fontSize: 16, fontWeight: "400", color: '#666666' }}>{item.TechnicalValue}</Text>
                                    </OpenURLButton>


                                </View>

                            )}
                        />
                    </>
                ) : null}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpBiding', { ID: Id, MinimumQuantity: MinimumQuantity, MaximumQuantity: MaximumQuantity })}>
                        <View style={{ marginTop: 3, marginBottom: 20, backgroundColor: '#9CBD44', height: 44, width: 343, borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: "#ffffff" }}>BỎ THẦU</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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