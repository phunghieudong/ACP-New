//@ts-nocheck
import { settings } from "../../configs";
import { useNavigation } from "@react-navigation/core";
import { Header, Icon, Left, Right, Text, View } from "native-base";
import React from "react";
import { StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";


const { height: dH } = Dimensions.get("window");

type Props = {
  back?: () => void;
  signOut?: () => void;
};

const CustomHeader = (props: Props) => {
  const { back, signOut } = props;

  const navigation = useNavigation();

  return (
    <Header style={styles.header}>
      <TouchableWithoutFeedback
        onPress={back ? back : () => navigation.goBack()}
      >
        <Left style={styles.left}>
          <View style={styles.back}>
            <Icon
              style={styles.backicon}
              type="Ionicons"
              name="chevron-back-sharp"
            />
          </View>
          <Text style={styles.backtext}>TRỞ LẠI</Text>
        </Left>
      </TouchableWithoutFeedback>
      <Right style={styles.right}>

        <Text
          style={styles.signin}
          onPress={signOut ? signOut : () => navigation.navigate("SignIn")}
        >
          ĐĂNG NHẬP
        </Text>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    height: dH * 0.1,

  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    left: -6,
  },
  back: {
    marginRight: 8,
    backgroundColor: '#EFBC2E',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  backicon: {
    fontSize: 20,
    color: "#239EBB",
  },
  backtext: {
    fontSize: 16,

    color: "#FFB703",
  },
  right: {
    backgroundColor: '#142977'
  },
  signin: {
    fontSize: 14,
    letterSpacing: 1.25,

    color: "#FFB703",
  },
});

export default CustomHeader;
