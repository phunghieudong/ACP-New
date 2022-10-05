
//@ts-nocheck
import React, { useEffect, useState, FC } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { BiddingTicketProps } from "../../../../navigators/types/Profile";
import Swiper from "react-native-swiper";
import moment from 'moment';
const InformationDetailScreen: FC<BiddingTicketProps> = ({ navigation,
  route: {
    params: { Title, content, Created },
  },
}) => {
  return (
    <View style={styles.container}>
      <Swiper
        vertical={false} autoplay
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
          source={require("../../../../assets/images/Information1.png")}
          // source={{ uri: Thumbnail }}
          style={{ width: "100%", height: 180 }}
        />
        <Image
          source={require('../../../../assets/images/Information1.png')}
          style={{ width: "100%", height: 180 }}
        />
        <Image
          source={require('../../../../assets/images/Information1.png')}
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
        <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>{Title}</Text>
        {/* <Text style={{ fontSize: 20, color: '#000000', fontWeight: "600" }}>{content}</Text> */}
        {/* <Text style={{ fontSize: 14, color: '#999999', }}>{content}</Text> */}
        <Text style={{ fontSize: 14, color: '#999999', }}>{moment(Created * 1000).format('DD/MM/YYYY')}</Text>
        <Text style={{ fontSize: 14, color: '#000000', }}>{content}</Text>
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
export default InformationDetailScreen; 