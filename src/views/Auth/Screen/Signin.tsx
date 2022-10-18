//@ts-nocheck
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  FC,
} from "react";
import {
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { appConfig, height, width } from "../../../configs";
import { accountApi } from "../../../api/Auth/index";
import { ViewProps } from "../../../navigators/types/navigation";
import ErrorText from "../../../components/More/error-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorage } from "../../../utils/LocalStorage/index";
import Icon from "react-native-vector-icons/FontAwesome";
// import OneSignal, { DeviceState } from "react-native-onesignal";
// import { LocalStorage, toast } from '~/utils';
// import {setInformations, setLogin, setToken} from '~/store/reducers/user';
import { Buffer } from "buffer";
import { putProvider } from "../../../api/Provider";
Buffer.from("anything", "base64");
function SigninScreen() {
  const [hidePass, setHidePass] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const backGroundHeight: number = height + insets.top + insets.bottom;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  const [userName, setUserName] = useState<string>("ncc31010");
  const [password, setPassword] = useState<string>("mona@1234");
  const [errorText, setErrorText] = useState<string>("");
  const [tokendemo, setTokenDemo] = useState<any>("");

  // AsyncStorage luu
  // AsyncStorage lay data
  const login = () => {
    setErrorText("");
    if (!!!userName) {
      setErrorText("Vui lòng nhập tài khoản ");
    } else if (!!!password) {
      setErrorText("Vui lòng nhập mật khẩu");
    } else if (userName != "dongph" && password == "NTqVZ2xU") {
      // Đoan này đang viết bùa - fix lại
      setErrorText("Mật khẩu hoặc tài khoản đăng nhập sai");
    } else {
      FromData({
        username: userName,
        password: password,
      });
    }
  };

  // const updatetoken = async () => {
  //   const device = await OneSignal.getDeviceState();

  //   console.log("---- Device ID: ", device?.userId); // Gửi mã này cho BE
  //   const param = { oneSignal_DeviceId: device?.userId };

  //   try {
  //     const res: any = await putProvider.updatetoken(param);
  //   } catch (error: any) {
  //     setErrorText("Tên đăng nhập hoặc mật khẩu không chính xác !");
  //   }
  // };

  const FromData = async (data: any) => {
    try {
      const res: any = await accountApi.login(data);

      console.log("res", res);
      console.log("Pass vs Accout", data);

      // storeData(res.Data.token)
      LocalStorage.setToken(res.Data.token);
      // LocalStorage.getToken(res.Data.token);

      if (res.ResultCode === 200) {
        // updatetoken();
        navigation.replace("Auth");
        // handleLogged(res);
      } else {
        setErrorText(res.ResultMessage);
      }
    } catch (error: any) {
      setErrorText("Tên đăng nhập hoặc mật khẩu không chính xác !");
    }
  };

  useEffect(() => {
    DemoToken();
  }, []);
  const DemoToken = () => {
    const accessToken = LocalStorage.getToken();
    console.log("accessToken-PhungHieuDong123", accessToken);
    return accessToken == null ? null : accessToken;
  };

  // const accessToken =  LocalStorage.getToken();
  // console.log("accessToken-PhungHieuDong123", accessToken);
  // return accessToken == null ? null : accessToken;

  // if (res.ResultCode === 401) {
  //   setErrorText(res.ResultMessage);
  //   console.log("res.ResultMessage", res.ResultMessage);

  // }

  // async function setTToken() {
  //   try {
  //     const jsonValue = JSON.stringify(tokendemo); // chuyen dổi
  //     await AsyncStorage.setItem("TOKEN", jsonValue); // luu token
  //     console.log('jsonValue-> Lưu Token', jsonValue);
  //   } catch (error) { }
  // }
  // setTToken();

  // const getIteamStorage = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("TOKEN"); // lây nhung gì trong cai bo
  //     console.log("Lấy token", jsonValue);
  //   } catch (error) { }
  // };
  // getIteamStorage();

  //ParseJwt-Token
  const hieudong =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1widXNlcklkXCI6XCJkZDE5MWFmNi0xZjVlLTRhZjEtYmYyZi0wOGRhOWI4OGY1ZWZcIixcInVzZXJOYW1lXCI6XCJkb25ncGhcIixcImZ1bGxOYW1lXCI6XCJQSFVORyBISUVVIERPTkdcIixcInBob25lXCI6XCIxMjM0NTY3ODk5MVwiLFwiZW1haWxcIjpcImRvbmdwaC4xMGEyQGdtYWlsLmNvbVwiLFwidGh1bWJuYWlsXCI6XCJcIixcInBlcm1pc3Npb25cIjpcIlt7XFxcIkNvbnRyb2xsZXJcXFwiOlxcXCJCaWRkaW5nVGlja2V0XFxcIixcXFwiRGVzY3JpcHRpb25cXFwiOlxcXCJRdeG6o24gbMO9IHBoaeG6v3UgxJHhuqV1IHRo4bqndVxcXCIsXFxcIlBlcm1pc3Npb25BY3Rpb25zXFxcIjpbe1xcXCJBY3Rpb25cXFwiOlxcXCJBZGRJdGVtXFxcIixcXFwiRGVzY3JpcHRpb25cXFwiOlxcXCJUaMOqbSBt4bubaSBwaGnhur91IMSR4bqldSB0aOG6p3VcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfSx7XFxcIkFjdGlvblxcXCI6XFxcIkdldFxcXCIsXFxcIkRlc2NyaXB0aW9uXFxcIjpcXFwiRGFuaCBzw6FjaCBwaGnhur91IMSR4bqldSB0aOG6p3VcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfSx7XFxcIkFjdGlvblxcXCI6XFxcIkdldEJ5SWRcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIlhlbSB0aMO0bmcgdGluIGNoaSB0aeG6v3RcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfSx7XFxcIkFjdGlvblxcXCI6XFxcIlVwZGF0ZUl0ZW1cXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIkPhuq1wIG5o4bqtdCBk4buvIGxp4buHdVxcXCIsXFxcIkFsbG93ZWRcXFwiOmZhbHNlfSx7XFxcIkFjdGlvblxcXCI6XFxcIkRlbGV0ZUl0ZW1cXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIljDs2EgZOG7ryBsaeG7h3VcXFwiLFxcXCJBbGxvd2VkXFxcIjpmYWxzZX1dfSx7XFxcIkNvbnRyb2xsZXJcXFwiOlxcXCJCaWRkaW5nU2Vzc2lvblxcXCIsXFxcIkRlc2NyaXB0aW9uXFxcIjpcXFwiUXXhuqNuIGzDvSBwaGnDqm4gxJHhuqV1IHRo4bqndVxcXCIsXFxcIlBlcm1pc3Npb25BY3Rpb25zXFxcIjpbe1xcXCJBY3Rpb25cXFwiOlxcXCJHZXRcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIkRhbmggc8OhY2ggcGhpw6puIMSR4bqldSB0aOG6p3VcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfSx7XFxcIkFjdGlvblxcXCI6XFxcIkdldEJ5SWRcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIlhlbSB0aMO0bmcgdGluIGNoaSB0aeG6v3RcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfV19LHtcXFwiQ29udHJvbGxlclxcXCI6XFxcIlByb3ZpZGVyXFxcIixcXFwiRGVzY3JpcHRpb25cXFwiOlxcXCJRdeG6o24gbMO9IG5ow6AgY3VuZyBj4bqlcFxcXCIsXFxcIlBlcm1pc3Npb25BY3Rpb25zXFxcIjpbe1xcXCJBY3Rpb25cXFwiOlxcXCJVcGRhdGVJdGVtXFxcIixcXFwiRGVzY3JpcHRpb25cXFwiOlxcXCJD4bqtcCBuaOG6rXQgZOG7ryBsaeG7h3VcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfSx7XFxcIkFjdGlvblxcXCI6XFxcIkdldEJ5SWRcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIlhlbSB0aMO0bmcgdGluIGNoaSB0aeG6v3RcXFwiLFxcXCJBbGxvd2VkXFxcIjp0cnVlfV19LHtcXFwiQ29udHJvbGxlclxcXCI6XFxcIkZpbGVcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIlVwbG9hZCBmaWxlIGzDqm4gaOG7hyB0aOG7kW5nXFxcIixcXFwiUGVybWlzc2lvbkFjdGlvbnNcXFwiOlt7XFxcIkFjdGlvblxcXCI6XFxcIlVwbG9hZEZpbGVcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIlVwbG9hZCBTaW5nbGUgRmlsZSBsw6puIGjhu4cgdGjhu5FuZ1xcXCIsXFxcIkFsbG93ZWRcXFwiOnRydWV9LHtcXFwiQWN0aW9uXFxcIjpcXFwiVXBsb2FkRmlsZXNcXFwiLFxcXCJEZXNjcmlwdGlvblxcXCI6XFxcIlVwbG9hZCBNdWx0aXBsZSBGaWxlIGzDqm4gaOG7hyB0aOG7kW5nXFxcIixcXFwiQWxsb3dlZFxcXCI6dHJ1ZX1dfSx7XFxcIkNvbnRyb2xsZXJcXFwiOlxcXCJUZWNobmljYWxQcm9kdWN0XFxcIixcXFwiRGVzY3JpcHRpb25cXFwiOlxcXCJRdeG6o24gbMO9IGvhu7kgdGh14bqtdCBz4bqjbiBwaOG6qW1cXFwiLFxcXCJQZXJtaXNzaW9uQWN0aW9uc1xcXCI6W3tcXFwiQWN0aW9uXFxcIjpcXFwiR2V0XFxcIixcXFwiRGVzY3JpcHRpb25cXFwiOlxcXCJYZW0gZGFuaCBzw6FjaFxcXCIsXFxcIkFsbG93ZWRcXFwiOnRydWV9XX1dXCIsXCJtZW51TGlzdFwiOlwic3RyaW5nXCIsXCJyb2xlc1wiOlwiW3tcXFwiSWRcXFwiOlxcXCI2YTg3YTk2NC01MmExLTQwMmMtMzUxYS0wOGRhOTQ3MWNkN2VcXFwiLFxcXCJOYW1lXFxcIjpcXFwiS2jDoWNoIGjDoG5nXFxcIixcXFwiQ29kZVxcXCI6bnVsbH1dXCIsXCJpc0FkbWluXCI6ZmFsc2V9IiwibmJmIjoxNjY0MjYxMzYxLCJleHAiOjE2NjQzNDc3NjEsImlhdCI6MTY2NDI2MTM2MX0.ufRGFAgTFE62jjLFLKjCQVDeCTGBX9B8K64U3YUYu28";

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    var jsonPayload = decodeURIComponent(
      Buffer.from(base64, "base64").toString()
    );
    return JSON.parse(jsonPayload) || {};
  }
  // console.log("hieudong1", Object.values(parseJwt(hieudong))[0]);
  // console.log("hieudong2", JSON.parse(Object.values(parseJwt(hieudong))[0]));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ width: 154.49, height: 70 }}
        />
      </View>
      <View
        style={{
          width: 343,
          marginTop: 58,
          // paddingHorizontal:20
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            elevation: 10,
            borderRadius: 6,
          }}
        >
          <TextInput
            value={userName}
            placeholder="Tài khoản"
            autoCorrect={false}
            secureTextEntry={false}
            textContentType="emailAddress"
            onChangeText={(e: string) => setUserName(e)}
            style={{
              width: "90%",
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            elevation: 10,
            marginTop: 16,
            borderRadius: 6,
          }}
        >
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry={hidePass ? true : false}
            value={password}
            onChangeText={(e: string) => setPassword(e)}
            style={{
              width: "90%",
              height: 40,
              borderRadius: 6,
              paddingHorizontal: 16,
            }}
          />
          <Icon
            name={hidePass ? "eye" : "eye-slash"}
            size={15}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
          />
          {/* <TouchableOpacity>
              <Pressable onPress={handlePasswordVisibility}>
                <FontAwesome name='eye-slash' size={22} color="#232323" />
              </Pressable>
            </TouchableOpacity> */}
        </View>
      </View>

      {/* <PrimaryButton onPress={_login} title="Đăng nhập" loading={loading} /> */}

      <View style={{ marginTop: 16, width: 343, flexDirection: "row-reverse" }}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={{ color: "red", fontStyle: "italic" }}>
            Quên mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={login}>
        <View
          style={{
            marginTop: 16,
            borderColor: "#000000",
            backgroundColor: "#9CBD44",
            height: 44,
            width: 343,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#ffffff", fontWeight: "600" }}>
            ĐĂNG NHẬP
          </Text>
        </View>
      </TouchableOpacity>
      <ErrorText content={errorText} />

      {/* <View style={{ backgroundColor: 'green', height: 300, width: 300, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                // storeData("sieunhancamap")
                alert("Luu thanh cong")
              }} style={{ backgroundColor: "yellow", height: 100, width: 100 }} >
                <Text style={{ color: '#000000' }}>Luu data</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{ backgroundColor: "yellow", height: 100, width: 100 }}>
                <Text style={{ color: '#000000' }}>lay data</Text>
              </TouchableOpacity>
              {data != null ? <Text> {data}</Text> : null}
            </View> */}
    </View>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backMain: {
    width: "100%",
    paddingHorizontal: 37,
    borderTopRightRadius: 12,
    borderTopStartRadius: 12,
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  title: {
    color: "#000",

    fontSize: 32,
  },
  subTitle: {
    color: "#959595",

    fontSize: 16,
    marginTop: 16,
    marginBottom: 36,
  },
  wPassword: {
    marginTop: 24,
    marginBottom: 32,
    width: "100%",
  },
  register: {
    fontSize: 16,
    color: "green",
    marginVertical: 32,
  },
  btnRegister: {
    fontSize: 16,
    color: "green",
    marginVertical: 32,
  },
  forgot: {
    fontSize: 16,
    color: "green",
  },
  inputContainer: {
    backgroundColor: "red",
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#d7d7d7",
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: "90%",
  },
});
