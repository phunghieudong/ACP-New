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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ flexDirection: 'row', width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>

                        <Image

                            source={require('../../../../assets/images/goback.png')}
                            style={{ width: 7.17, height: 14 }}
                        />



                    </View>
                </TouchableOpacity>
                <View >
                    <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>Đăng ký dự thầu</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 10, width: 50 }}>

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

                <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
                    <View style={{ marginTop: 32, backgroundColor: '#9CBD44', height: 44, width: "100%", borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>XÁC NHẬN</Text>
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
export default SignUpBidingScreen; 