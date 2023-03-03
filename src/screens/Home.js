import React, { useState, useEffect } from "react";
import firebase from "../Firebase";
import Fotos from "./Fotos";
import Constants from "expo-constants";
import AntDesing from "react-native-vector-icons/Fontisto";
import AntDesing2 from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";

export function Home() {
  const [fotoData, setFotoData] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://lh3.googleusercontent.com/pw/AMWts8D_l8yAI_I0h6f5g28FraCZD6U8lvmXSCtBSwoB5js6EL7bXvEssbcWP__AB7CvSRG4Rp6xvqMGEWpR2KKirvkm6OyupSHuxYMfU-yPJXaOSK5amQLOrD2YQtDTymbVK3urYsWlZIB8eY0QNId-jld7=w705-h939-no?authuser=2"
  );
  const [currentDescription, setCurrentDescription] =
    useState("Viaje de Mexico 2");

  useEffect(() => {
    const fetchData = async () => {
      const data = await firebase.db.collection("Data").get();
      const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      arrayData.sort((dato1, dato2) => {
        if (dato1.IdManual < dato2.IdManual) {
          return -1;
        }
        if (dato1.IdManual > dato2.IdManual) {
          return 1;
        }
        return 0;
      });
      setFotoData(arrayData);
    };
    fetchData();
  }, []);

  const handleButtonPress = async (url, description) => {
    setCurrentUrl(url);
    setCurrentDescription(description);
  };

  return (
    <View style={styles.contaier}>
      <Text style={styles.textS3}>
        Feliz Mesesario{" "}
        <AntDesing2 style={styles.textS3} name="emoticon-kiss-outline" />
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri: currentUrl,
        }}
      />
      <View style={styles.contaier2}>
        <ScrollView
          style={styles.contaier3}
          scrollEventThrottle={28}
          horizontal={true}
        >
          {fotoData.map((foto) => (
            <View style={styles.contaier2} key={foto.descripcion}>
              <Fotos
                key={foto.IdManual}
                IdManual={foto.IdManual}
                Url={foto.Url}
                fecha={foto.Fecha}
                descripcion={foto.descripcion}
                onButtonPress={handleButtonPress}
              />
              <AntDesing style={styles.arrow} name="arrow-swap" key={foto.id} />
            </View>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.textS}>{currentDescription}</Text>
      <Text style={styles.textS2}>
        Gracias por amarme siempre
        <AntDesing2 style={styles.textS3} name="emoticon-wink-outline" />
      </Text>
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(206, 147, 216,1)",
  },
  contaier2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 2,
    height: height * 0.1,
  },
  contaier3: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "rgba(239, 154, 154, 1)",
  },
  logo: {
    flex: 0.8,
    aspectRatio: 1,
    margin: "10%",
  },
  textS: {
    fontFamily: "notoserif",
    fontWeight: "700",
    fontSize: width * 0.05,
    margin: "2%",
    color: "white",
  },
  textS2: {
    fontFamily: "notoserif",
    fontWeight: "900",
    fontSize: 20,
    margin: "10%",
    color: "white",
    textAlign: "center",
  },
  textS3: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: "notoserif",
    fontWeight: "600",
    fontSize: 25,
    color: "white",
    margin: 2,
    textAlign: "center",
  },
  arrow: {
    color: "white",
    fontSize: 20,
  },
});
