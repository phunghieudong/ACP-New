

import React, { useEffect, useState, FC } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { getBiddingTicket } from "../../../../api/BiddingTick/index";
import { BiddingTicketProps } from "../../../../navigators/types/Profile";
import { BiddingTicketData } from "../../../../types/BiddingTicket";
import moment from 'moment';
const HistoryScreen: FC<BiddingTicketProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [visible, setVisible] = useState(false);

  const [data, setData] = useState<BiddingTicketData[]>([]);
  const [page, setPage] = useState({ current: 1, next: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { current, next } = page;
        if (next) {
          const params = { pageIndex: current, pageSize: 20 };
          const res = await getBiddingTicket(params);
          console.log("res ne ban oi", res);
          if (res.ResultCode == 200) {
            setData([...res.Data.Items.filter((item) => item.CreatedBy == "dd191af6-1f5e-4af1-bf2f-08da9b88f5ef")]);
            console.log("res ne ban oi", res);
          }
          if (!ready) setReady(true);
        }
      } catch (error) {
      }
    })();
  }, [page.current]);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#A5C63F', width: "100%", height: 64, justifyContent: 'center', alignItems: 'center' }}>
        <View >
          <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600', textAlign: 'center' }}>Lịch sử đấu thầu</Text>
        </View>
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
            <View style={styles.box}>
              <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>

                  <View style={{ flexDirection: 'column' }}>
                    <Image
                      source={{ uri: item.Thumbnail }}
                      style={{ width: 164, height: 100, borderRadius: 6 }}
                    />
                    <Text style={{ width: "90%", fontSize: 16, fontWeight: "400" }}>{item.BiddingName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={require('../../../../assets/images/clock.png')}
                        style={{ width: 14, height: 14, marginRight: 5 }}
                      />
                      {/* <Text>{item.BiddingSessionTimeOut}</Text> */}
                      <Text>{moment(item.Created * 1000).format('HH:mm:ss - DD/MM/YYYY')}</Text>

                    </View>
                  </View>

                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />



    </View>
  );
};



const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    backgroundColor: '#fff'

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 14,
    marginTop: 5,
    flexDirection: "column",

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