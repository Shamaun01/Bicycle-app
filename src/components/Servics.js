import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Servics = () => {
  const services = [
    {
      id: "0",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "BMT24513_PH2",
      price: "$350",
    },
    {
      id: "11",
      image:
        "https://o.remove.bg/downloads/8105b2a7-b1f6-4cca-ad58-607780682b98/specialized-2022-rockhopper-comp-29-removebg-preview.png",
      name: "BMT24513_PH2",
      price: "$250",
    },
    {
      id: "12",
      image:
        "https://o.remove.bg/downloads/56cb7fee-7d57-4956-98e7-625ee2ada736/81wGn2TQJeL._SX425_-removebg-preview.png",
      name: "BMT24513_PH2",
      price: "$200",
    },
    {
      id: "13",
      image:
        "https://o.remove.bg/downloads/8105b2a7-b1f6-4cca-ad58-607780682b98/specialized-2022-rockhopper-comp-29-removebg-preview.png",
      name: "BMT24513_PH2",
      price: "$250",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <TouchableOpacity style={styles.totalView} key={index}>
            <Image
              style={styles.productimage}
              source={{ uri: service.image }}
            />
            <Text style={styles.productName}>{service.name}</Text>
            <Text style={styles.productPrice}>{service.price}</Text>
            <Pressable>
              <View style={styles.buttonView}>
                <Text style={styles.button}>Buy Now</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
              </View>
            </Pressable>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Servics;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  totalView: {
    margin: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 7,
  },
  productimage: {
    width: 250,
    height: 200,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productPrice: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  buttonView: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    fontSize: 17,
    fontWeight: "700",
  },
});
