
//@ts-nocheck
import React, { useEffect, useState, FC } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { getBiddingTicket } from "../../../../api/BiddingTick/index";
import { BiddingTicketProps } from "../../../../navigators/types/Profile";
import { BiddingTicketData } from "../../../../types/BiddingTicket";
import { BottomSheet } from 'react-native-btr';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from 'buffer';
import { async } from 'rxjs';

const HistoryScreen: FC<BiddingTicketProps> = ({ navigation }) => {


  const [user, setUser] = useState({});

  const [isModalVisible, setModalVisible] = useState(false);


  const [isFirst, setFirst] = useState(true);


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
      const params = { pageIndex: current, pageSize: 20, CreatedBy: userx.userId, OrderBy: 0 };
      const res = await getBiddingTicket(params);
      console.log("res ne ban oi", res);
      if (res.ResultCode == 200) {
        setData(res.Data.Items);
        console.log("res ne ban oi", res);
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


  const [data, setData] = useState<BiddingTicketData[]>([]);
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
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', backgroundColor: '#A5C63F', width: "100%", height: 64, justifyContent: "space-between", alignItems: 'center', }}>
        <View style={{ backgroundColor: '#A5C63F', width: 30, height: 30 }}>
        </View>
        {/* <Image
          source={require('../../../../assets/images/logo.png')}
          style={{ width: 110, height: 50 }}
        /> */}
        <View>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>Lịch sử đấu thầu</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../../../assets/images/find.png')}
            style={{ width: 24, height: 24, marginRight: 16 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        style={styles.body}
        numColumns={2}
        onEndReachedThreshold={0.5}
        keyExtractor={(i) => i.Id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('HistoryDetail', { FullName: item.FullName, Price: item.Price, Quantity: item.Quantity, BiddingName: item.BiddingName, BiddingSessionName: item.BiddingSessionName, Thumbnail: item.Thumbnail, Id: item.Id, Created: item.Created })}
          >
            <View style={{ flexDirection: "row", width: "50%", justifyContent: "center", paddingTop: 20 }}>
              <View style={{ flexDirection: 'row', }}>
                <View style={{ flexDirection: 'column' }}>
                  <Image
                    source={{ uri: item.Thumbnail }}
                    style={{ alignSelf: "center", width: 150, height: 100, borderRadius: 6 }}
                  />
                  <Text numberOfLines={1} style={{ width: 150, fontSize: 16, fontWeight: "400" }}>{item.BiddingSessionName}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: "80%", }}>
                    <Image
                      source={require('../../../../assets/images/clock.png')}
                      style={{ width: 14, height: 14, marginRight: 5 }}
                    />
                    {/* <Text>{item.BiddingSessionTimeOut}</Text> */}
                    <Text>{moment(item.Created * 1000).format('DD/MM/YYYY')}</Text>

                  </View>


                </View>

              </View>

            </View>
          </TouchableWithoutFeedback>
        )}
      />






      <BottomSheet
        visible={isModalVisible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          flexDirection: 'column'
        }}>
          <View style={{
            backgroundColor: "#9CBD44",
            width: '100%',
            height: 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
          }}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, color: '#fff' }}>Bộ lọc</Text>
            <TouchableOpacity onPress={toggleModal}>

              <View style={{ height: 30, width: 30, marginRight: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#ffffff' }}>
                <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff', }}>x</Text>
              </View>
            </TouchableOpacity>

          </View>
          <View style={{ backgroundColor: "#fff", width: '100%', height: 180, alignItems: 'center', marginVertical: 20 }}>
            <View>
              <View style={{ justifyContent: "center", alignItems: 'center', marginBottom: 80 }}>
                <View style={{
                  backgroundColor: 'white',
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 10,
                  marginTop: 16,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: '#666666'
                }}>
                  <TextInput
                    placeholder='Tên phiên đấu thầu'
                    autoCorrect={false}
                    secureTextEntry={false}
                    textContentType='username'

                    style={{
                      width: '90%',
                      height: 40,
                      borderRadius: 6,
                      paddingHorizontal: 16,



                    }}
                  // onChangeText={onChangeText1}
                  // value={text1}
                  />
                  {/* <TouchableOpacity style={{ marginRight: 10 }}>
                    <Pressable onPress={handlePasswordVisibility}>
                      <FontAwesome name='search' size={18} color="#232323" />
                    </Pressable>
                  </TouchableOpacity> */}
                </View>

                {/* <View style={{ backgroundColor: "#9CBD44", width: "100%", height: 20, flexDirection:"row", borderRadius:6 , alignItems:"flex-start"}}>
                <Text>XÁC NHẬN</Text>
              </View> */}
                <View style={{
                  backgroundColor: '#9CBD44',
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                  marginTop: 16,
                  borderRadius: 6,
                }}>
                  <TouchableOpacity onPress={toggleModal}>
                    <View style={{ backgroundColor: "#9CBD44", width: "100%", height: 40, flexDirection: "row", borderRadius: 6, alignItems: "center", justifyContent: 'center' }}>
                      <Text style={{ color: '#fff', fontWeight: '600', }}>ÁP DỤNG</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>
      </BottomSheet>


    </View>
  );
};



const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 30,
    backgroundColor: '#fff',


  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 5,
    flexDirection: "column",
    width: "50%",




  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',
    borderRadius: 12,
  },
});
export default HistoryScreen; 