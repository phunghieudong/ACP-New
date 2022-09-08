// @ts-nocheck
import React from "react";
import { Header, Icon, Text, Toast, View } from "native-base";
// import { settings } from "../../configs";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const { height: dH } = Dimensions.get("window");
// const { mainColor, goldColor, padding } = settings.styles;

type IProps = {
  title: string;
  previous?: () => void;
  hideRoute?: true;
  logo?: true;
  logo1?: true;
  notifications?: false;
  filter?: () => void;
};

const CustomHeader = ({
  title,
  previous,
  hideRoute,
  logo,
  logo1,
  notifications,
  filter,
}: IProps) => {
  // navigation
  const navigation = useNavigation();

  // toast
  const showToast = () => {
    Toast.show({
      text: "Tính năng còn đang phát triển",
    });
  };

  return (
    <Header style={styles.header}>
      <StatusBar barStyle="light-content"  />
      <View style={styles.left}>
        <View style={styles.menu}>
          {previous && (
            <TouchableWithoutFeedback onPress={previous}>

              <Icon type="Ionicons" name="chevron-back" style={styles.back} />

            </TouchableWithoutFeedback>
          )}
          {!previous && (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Profile", { screen: "Menu" })}
            >

              {/* <Image
                source={require("../../assets/images/menu.png")}
                style={{ height: 24, width: 24 }}
              /> */}


            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      <View
        style={[
          styles.mid,
          notifications === false && { right: 16 },
          filter && { right: 0 },
        ]}
      >
        {!hideRoute && <Text style={styles.dashboard}>sdfsdfsdfs</Text>}
        {logo && (
          <View>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ height: 65, width: 199.48 }}
            />
          </View>
        )}


        {logo1 && (
          <View style={{ justifyContent: "center", alignItemss: 'center', flexDirection: 'column', height: 80, width: 200, paddingBottom: 10 }}>
            {/* <Image
              source={require("../../assets/images/dong.png")}
              style={{ height: 80, width: 199.48 }}
            /> */}

          </View>

        )}
      </View>

      <View style={styles.right}>
        {filter && (
          <TouchableOpacity onPress={filter} activeOpacity={0.9}>
            <View style={{ paddingRight: 5 }}>
              {/* <Image
                source={require("../../assets/images/locd.png")}
                style={{ height: 24, width: 24 }}
              /> */}
            </View>
          </TouchableOpacity>
        )}
        {notifications !== false && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            activeOpacity={0.9}
          >
            <View style={styles.noti}>
              {/* <Image
                source={require("../../assets/images/bell.png")}
                style={{ height: 24, width: 24 }}
              /> */}
              <View style={styles.badge} />
            </View>
          </TouchableOpacity>


        )}



      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: mainColor,
    // paddingLeft: padding,
    // paddingRight: padding,
    // height: dH * 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 0,
  },
  headerinner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {},
  menuicon: {
    fontSize: 30,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 100,
    // color: mainColor,
    backgroundColor: "#fff",
  },
  back: {
    // color: goldColor,
    fontSize: 24,
    paddingHorizontal: 6,
    paddingVertical: 4,
    left: -10,
  },
  bar: {
    color: "#fff",
    fontSize: 28,
    left: -6,
    padding: 4,
  },
  mid: {
    right: 4,
  },
  dashboard: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1,
    fontFamily: "SFProDisplay-Heavy",
    // color: goldColor,
    textTransform: "uppercase",
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  noti: {},
  notiicon: {
    color: "#fff",
  },
  badge: {
    width: 15,
    height: 15,
    backgroundColor: "#FD6E15",
    borderRadius: 100,
    position: "absolute",
    right: -3,
    top: -3,
  },

});

export default CustomHeader;
