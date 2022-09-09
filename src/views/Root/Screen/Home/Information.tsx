
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { Toast } from "native-base";
const InformationScreen = ({ navigation }) => {



  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: '#A5C63F', width: "100%", height: 92, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Thông báo</Text>
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
              />d
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