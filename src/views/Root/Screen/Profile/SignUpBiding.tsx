//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Pressable, } from 'react-native';
import HeaderRoot from "../../../../components/HeaderRoot/index";
import { useNavigation } from "@react-navigation/native";
import { BottomSheet } from 'react-native-btr';
import { FontAwesome } from '@expo/vector-icons';
const SignUpBidingScreen = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("");
    const [text1, onChangeText1] = React.useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#9CBD44', width: '100%', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', width: 50 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image

                            source={require('../../../../assets/images/goback.png')}
                            style={{ width: 7.17, height: 14 }}
                        />

                    </TouchableOpacity>

                </View>

                <View >
                    <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Đăng ký dự thầu</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Image

                            source={require('../../../../assets/images/find.png')}
                            style={{ width: 24, height: 24, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Information")}>
                        <Image

                            source={require('../../../../assets/images/bell.png')}
                            style={{ width: 24, height: 25, }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ marginHorizontal: 20, marginTop: 32 }}>
                <Text style={{ fontWeight: '600' }}>Số lượng</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8

                    }}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text style={{ marginTop: 16, fontWeight: '600' }}>Giá</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderWidth: 0.5,
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        marginTop: 8

                    }}
                    onChangeText={onChangeText1}
                    value={text1}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32, width: "100%", }}>
                <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
                    <View style={{ marginTop: 16, backgroundColor: '#9CBD44', height: 44, width: 390, borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>XÁC NHẬN</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
                        backgroundColor: "#9CBD44", width: '100%', height: 50, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, alignItems: "flex-start", justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, color: '#fff' }}>Bộ lọc</Text>
                    </View>
                    <View style={{ backgroundColor: "#fff", width: '90%', height: 180, alignItems: 'center', marginVertical: 20 }}>
                        <View style={{ borderWidth: 1, padding: 20, borderColor: '#999999' }}>
                            <View style={{ justifyContent: "center", alignItems: 'center', marginBottom: 80 }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    elevation: 10,
                                    marginTop: 16,
                                    borderRadius: 6,
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
                                    <TouchableOpacity style={{ marginRight: 10 }}>
                                        <Pressable onPress={handlePasswordVisibility}>
                                            <FontAwesome name='search' size={22} color="#232323" />
                                        </Pressable>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    backgroundColor: 'white',
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    elevation: 10,
                                    marginTop: 16,
                                    borderRadius: 6,
                                }}>
                                    <TextInput
                                        placeholder='Ngày đấu thầu'
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
                                    <TouchableOpacity style={{ marginRight: 10 }}>
                                        <Pressable onPress={handlePasswordVisibility}>
                                            <FontAwesome name='search' size={22} color="#232323" />
                                        </Pressable>
                                    </TouchableOpacity>
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
                                            <Text style={{ color: '#fff', fontWeight: '600', }}>XÁC NHẬN</Text>
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
export default SignUpBidingScreen; 