//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { putProvider } from "../../../../api/Provider/index";
import ErrorText from "../../../../components/More/error-text";
import { LocalStorage } from "../../../../utils/LocalStorage/index";
import { Buffer } from "buffer";
import { refreshTokenApi } from "../../../../api/refresh-token";
import * as ImagePicker from "expo-image-picker";
import { onChange } from "react-native-reanimated";
const ChangePasswordScreen = () => {
  function showToast() {
    ToastAndroid.show("Chức năng đang phát triển", ToastAndroid.SHORT);
  }

  const navigation = useNavigation();
  const [fullName, setfullName] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [taxCode, settaxCode] = useState<string>("");
  const [address, setaddress] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [thumbnail, setthumbnail] = useState<string>("");
  const [user, setUser] = useState({});
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    console.log("uri-phunghieudong", result.uri);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const UpdateProvider = () => {
    setErrorText("");
    if (!!!address) {
      setErrorText("Vui lòng nhập địa chỉ mới !");
    }

    if (!!!email) {
      setErrorText("Vui lòng nhập gmail mới !");
    }
    if (!!!phone) {
      setErrorText("Vui lòng nhập số điện thoại mới !");
    }
    if (!!!fullName) {
      setErrorText("Vui lòng nhập tên công ty mới !");
    } else {
      UpdateProviderPutApi({
        fullName: fullName,
        phone: phone,
        address: address,
        email: email,
        taxCode: taxCode,
        thumbnail: thumbnail,
        id: user.userId,
      });
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const UpdateProviderPutApi = async (data: any) => {
    try {
      const res = await putProvider.putapiprovider(data);
      if (res.data.ResultCode == 200) {
        setModalVisible(!modalVisible);
        refreshToken();
      } else {
        console.log("hieudong2", res);
      }
    } catch (error) {
      console.log("error", error.ResultMessage);
      setErrorText(error.ResultMessage);
    }
  };

  async function refreshToken() {
    try {
      const res = await refreshTokenApi.get();
      console.log("new token: ", res.data.Data.token);
      if (res.data?.ResultCode == 200) {
        await LocalStorage.setToken(res.data.Data.token);
      }
    } catch (e) {}
  }

  useEffect(() => {
    DemoToken();
  }, []);

  const DemoToken = async () => {
    const accessToken = await LocalStorage.getToken();
    const userInfo = JSON.parse(Object.values(parseJwt(accessToken))[0]);

    setfullName(userInfo?.fullName || "");
    setemail(userInfo?.email || "");
    setphone(userInfo?.phone || "");
    settaxCode(userInfo?.taxCode || "");
    setaddress(userInfo?.address || "");
    setthumbnail(userInfo?.thumbnail || "");
    !!accessToken &&
      setUser(JSON.parse(Object.values(parseJwt(accessToken))[0]));
  };

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      Buffer.from(base64, "base64").toString()
    );
    return JSON.parse(jsonPayload) || {};
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#9CBD44",
          width: "100%",
          height: 64,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              width: 30,
            }}
          >
            <Image
              source={require("../../../../assets/images/goback.png")}
              style={{ width: 7.17, height: 14 }}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "600" }}>
          Cập nhật thông tin
        </Text>
        <View style={{ height: 30, width: 30 }}></View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          {/* onPress={showToast} */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 15,
              flexDirection: "row",
            }}
          >
            {!image && (
              <Image
                value={thumbnail}
                source={{ uri: user.thumbnail }}
                style={{ width: 90, height: 90, borderRadius: 100 }}
              />
            )}
            {image && (
              <Image
                value={thumbnail}
                source={{ uri: image }}
                style={{ width: 90, height: 90, borderRadius: 100 }}
              />
            )}
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View style={{ marginHorizontal: 20, marginTop: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>
                Tên công ty
              </Text>
              <Text
                style={{
                  marginTop: 16,
                  fontSize: 20,
                  fontWeight: "600",
                  color: "red",
                }}
              >
                {" "}
                *
              </Text>
            </View>
            <TextInput
              value={fullName}
              placeholder="Tên công ty"
              onChangeText={(e: string) => setfullName(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>
                Số điện thoại
              </Text>
              <Text
                style={{
                  marginTop: 16,
                  fontSize: 20,
                  fontWeight: "600",
                  color: "red",
                }}
              >
                {" "}
                *
              </Text>
            </View>
            <TextInput
              value={phone}
              placeholder="Số điện thoại"
              keyboardType={"numeric"}
              onChangeText={(e: string) => setphone(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>
                Email
              </Text>
              <Text
                style={{
                  marginTop: 16,
                  fontSize: 20,
                  fontWeight: "600",
                  color: "red",
                }}
              >
                {" "}
                *
              </Text>
              {/* <Text style={{ marginTop: 16, fontSize: 20, fontWeight: "600", color: "red" }}> *</Text> */}
            </View>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={(e: string) => setemail(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>
                Mã số thuế
              </Text>
            </View>
            <TextInput
              value={taxCode}
              placeholder="Mã số thuế"
              onChangeText={(e: string) => settaxCode(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "600" }}>
                Địa chỉ
              </Text>
              <Text
                style={{
                  marginTop: 16,
                  fontSize: 20,
                  fontWeight: "600",
                  color: "red",
                }}
              >
                {" "}
                *
              </Text>
            </View>
            <TextInput
              value={address}
              placeholder="Địa chỉ"
              onChangeText={(e: string) => setaddress(e)}
              style={{
                height: 40,
                borderWidth: 0.5,
                borderRadius: 6,
                borderColor: "#666666",
                paddingHorizontal: 16,
                marginTop: 8,
              }}
            />
            <ErrorText content={errorText} />
            <TouchableOpacity onPress={() => UpdateProvider()}>
              <View
                style={{
                  marginTop: 32,
                  marginBottom: 32,
                  backgroundColor: "#9CBD44",
                  height: 44,
                  width: "100%",
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}
                >
                  CẬP NHẬT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Xin chúc mừng{" "}
            </Text>
            <Text style={styles.modalText}>
              Bạn đã cập nhật thông tin Nhà Cung Cấp thành công{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>THOÁT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
    color: "#fff",
    borderRadius: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  button1: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginLeft: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonClose1: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#666666",
  },
});
export default ChangePasswordScreen;
