import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Types from "../components/Types";
import Carousel from "../components/Carousel";
import Servics from "../components/Servics";
import Brand from "../components/Brand";
import ProductItem from "../components/ProductItem";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const services = [
    {
      id: "0",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "EMotorad EMX ",
      range: "25 km/h",
      type: "Hydralick",
      rating: 4.0,
      price: 350,
    },
    {
      id: "11",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "Lifelong LLBC2002 Crew ",
      range: "28 km/h",
      type: "Hydralick",
      rating: 4.5,
      price: 250,
    },
    {
      id: "12",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "Firefox Bikes Harpoon",
      range: "20 km/h",
      type: "Hydralick",
      rating: 4.5,
      price: 200,
    },
    {
      id: "13",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "Schwinn Huron Bike Line",
      range: "28 km/h",
      type: "Hydralick",
      rating: 4.5,
      price: 200,
    },
    {
      id: "14",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "Geekay Unisex Spartan  ",
      range: "28 km/h",
      type: "Hydralick",
      rating: 4.5,
      price: 200,
    },
    {
      id: "15",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "Montra Downtown ",
      range: "28 km/h",
      type: "Hydralick",
      rating: 4.5,
      price: 200,
    },
    {
      id: "16",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "Urban Terrain Mountain ",
      range: "28 km/h",
      type: "Hydralick",
      rating: 4.5,
      price: 200,
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#E8E8E8", marginTop: 30 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerView}>
            <Text style={styles.headettextView}>Discover top bicycle for</Text>
            <Text style={styles.headettextView}>purchace.</Text>
          </View>
          <View style={{ marginLeft: 25 }}>
            <Ionicons name="notifications-outline" size={25} color="black" />
          </View>
          <TouchableOpacity>
            <Image
              style={styles.profile}
              source={{
                uri: "https://lh3.googleusercontent.com/ogw/AOLn63GGhWBVpBpobb2pyyOpvYQrVeO_ZIJMpMHbv17z=s32-c-mo",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textInput}>
          <TextInput placeholder="search name or type bycycle" />
          <FontAwesome5 name="search" size={24} color="black" />
        </View>
        <Types />
        <Carousel />
        <Servics />
        <Brand />

        <View style={{ marginTop: 6 }}>
          <Text style={styles.text}>Best Deal</Text>
          {services.map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerView: {},
  headettextView: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    marginTop: 10,
    padding: 10,
    borderWidth: 0.1,
    borderColor: "gray",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
