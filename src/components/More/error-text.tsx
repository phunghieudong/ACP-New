// @ts-nocheck

import * as React from "react";
import { Text, StyleSheet } from "react-native";

const ErrorText = (props: any): any => {
  const { content } = props;

  return <>{!!content && <Text style={styles.text}>{content || ""}</Text>}</>;
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#E7312F",
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});
