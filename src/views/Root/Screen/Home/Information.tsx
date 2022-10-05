//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback, Button } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from 'buffer';
import { getNotification } from "../../../../api/Notification/Index";
import { NotificationData } from '../../../../types/Notification';
import moment from 'moment';
import Modal from "react-native-modal";
import Swiper from "react-native-swiper";
const InformationScreen = () => {
  const [user, setUser] = useState({});
  const [isFirst, setFirst] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };


  const focused = useIsFocused();
  const getdata = async () => {
    const accessToken = await LocalStorage.getToken();
    const userx = await JSON.parse(Object.values(parseJwt(accessToken))[0])
    try {
      const { current, next } = page;
      const params = { pageIndex: current, pageSize: 20, UserId: userx.userId, OrderBy: 0 };
      const res = await getNotification(params);
      console.log("res ne ban oi1", res);
      if (res.ResultCode == 200) {
        setData(res.Data.Items);
        console.log("res ne ban oi2", res);
      }
      if (!ready) setReady(true);

    } catch (error) {

    }
  }

  useEffect(() => {

    (async () => {

      if (!focused) {
        setFirst(true)
      } else {
        getdata()
      }
    })();
  }, [focused]);


  const [data, setData] = useState<NotificationData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isFirst) {
      getdata()
    } else {
      setFirst(false)
    }
  }, [page.current]);

  useEffect(() => {
    DemoToken();
  }, []);

  const DemoToken = async () => {
    const accessToken = await LocalStorage.getToken();
    !!accessToken && setUser(JSON.parse(Object.values(parseJwt(accessToken))[0]))
  }

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString());
    return JSON.parse(jsonPayload) || {};
  }

  console.log("--- user", user);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", paddingHorizontal: 25, }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row', width: 50, }}>

            {/* <Image
              source={require('../../../../assets/images/goback.png')}
              style={{ width: 7.17, height: 14 }}
            /> */}
          </View>
        </TouchableOpacity>
        <View >
          <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Thông báo</Text>
        </View>
        <View style={{ flexDirection: 'row', width: 50 }}>
        </View>
      </View>


      <FlatList
        data={data}
        style={{
          paddingHorizontal: 30,
          backgroundColor: '#fff',
        }}

        onEndReachedThreshold={0.5}
        keyExtractor={(i) => i.Id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('InformationDetail', { Title: item.Title, content: item.content, Created: item.Created })}
          >

            <View style={{ flexDirection: 'row', marginHorizontal: 20, paddingVertical: 20, borderBottomWidth: 1, borderColor: '#666666' }}>
              {/* <View>
                <Image

                  source={require('../../../../assets/images/Information1.png')}
                  style={{ width: 74, height: 59 }}
                />
              </View> */}
              <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
                <Text style={{ width: "80%" }}>{item.Title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image

                    source={require('../../../../assets/images/clock.png')}
                    style={{ width: 14, height: 14, marginRight: 5 }}
                  />

                  <Text>{moment(item.Created * 1000).format('DD/MM/YYYY')}</Text>
                </View>

              </View>
            </View>
          </TouchableOpacity>

        )}
      />

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
export default InformationScreen; 