import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FristScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: "https://wallpaperaccess.com/full/49929.jpg",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 80,
              margin: 10,
            }}
          >
            <View
              style={{
                marginTop: 60,
              }}
            >
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              >
                Haibike Sudro
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                V3.0
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
                Feel the aderline
              </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={{
                height: 300,
                width: 300,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.touchableView}
          >
            <View>
              <Text style={styles.touchableText}>NEXT</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default FristScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  touchableText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  touchableView: {
    marginTop: 50,
    backgroundColor: "#009284",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginLeft: "50%",
    marginRight: "20%",
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
});
