
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
const InformationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', backgroundColor: '#9CBD44', width: '100%', height: 64, justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image

            source={require('../../../../assets/images/goback.png')}
            style={{ width: 7.17, height: 14 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: '#ffffff' }}>Thông báo</Text>
        <Image

          source={require('../../../../assets/images/bell.png')}
          style={{ width: 24, height: 17.63 }}
        />
      </View>



      <ScrollView style={{ marginTop: 32, height: 500, }}>
        <View style={{ marginTop: 24, height: 600, width: '100%', flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information1.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 64 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information4.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 64 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information2.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 64 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information3.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 64 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information4.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 64 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information4.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 64 }}>
            <View>
              <Image

                source={require('../../../../assets/images/Information5.png')}
                style={{ width: 74, height: 59 }}
              />
            </View>
            <View style={{ flexDirection: 'column', width: '100%', marginHorizontal: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image

                  source={require('../../../../assets/images/clock.png')}
                  style={{ width: 14, height: 14, marginRight: 5 }}
                />
                <Text>11/08/2022</Text>
              </View>
              <Text style={{ width: "80%" }}>Lorem Ipsum has been the industry's standard text ever since the 1500s</Text>
            </View>
          </View>


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
export default InformationScreen; 