import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { View, Image, StyleSheet, TextInput } from "react-native";
import firebase from "../Firebase";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default function Fotos({
  IdManual,
  Url,
  fecha,
  descripcion,
  onButtonPress,
}) {
  const HandleData = () => {
    onButtonPress(Url, descripcion);
  };
  return (
    <View>
      <Button
        title={fecha}
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(248, 187, 208, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => HandleData(Url, descripcion)}
      />
    </View>
  );
}
