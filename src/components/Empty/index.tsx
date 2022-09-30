//@ts-nocheck
import AnimatedLottieView from "lottie-react-native";
// import { Text, View } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

const Empty = (props: Props) => {
  const { text } = props;

  return (
    <View style={styles.empty}>
      <AnimatedLottieView
        source={require("../../assets/images/Confirm.png")}
        autoPlay
        loop={true}
        style={{ bottom: 40 }}
      />
      {/* <Text style={styles.emptytext}>dfsfsfsfs</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  emptytext: {
    top: 100,
    fontSize: 16,
    lineHeight: 20,
    color: "#b3c4c6",
    // fontFamily: "SFProDisplay-Regular",
  },
});

export default Empty;
