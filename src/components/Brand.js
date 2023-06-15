import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Brand = () => {
  const images = [
    {
      id: "0",
      image:
        "https://www.logotypes101.com/logos/450/9ED6AD3242B319EC9DA5AFD27F39DB0E/cube_bike.png",
      name: "CUBE",
    },
    {
      id: "11",
      image:
        "https://logowik.com/content/uploads/images/giant-bicycles6350.logowik.com.webp",
      name: "GIANT",
    },
    {
      id: "12",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcw98_4IGuRFPkPECxZD69Y1ca9P8HHL39WdVmJ4RS3ciIaUyv3sm7TQwdIi8PqZP2JiY&usqp=CAU",
      name: "RIDLEY",
    },
    {
      id: "13",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7D0cjisSVki2ffnaqvoK5ZGhYZM3gxowZA3An_Mz2STf_s-wvmtlC2ndtsKyyFovgdE&usqp=CAU",
      name: "RALEIGH",
    },
  ];
  return (
    <View>
      <View style={styles.mainViev}>
        <Text style={styles.text}>Famous Brands</Text>
        <View style={styles.seeAll}>
          <Text style={styles.seeallText}>See all</Text>
          <Ionicons name="ios-chevron-forward" size={24} color="blue" />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => (
          <TouchableOpacity style={styles.brandView}>
            <Image style={styles.image} source={{ uri: item.image }} />
            {/* <Text style={styles.brandName}>{item.name}</Text> */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  mainViev: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeallText: {
    fontSize: 17,
    fontWeight: "500",
    color: "blue",
  },
  image: {
    height: 50,
    width: 100,
  },
  brandView: {
    padding: 10,
    margin: 7,
    borderRadius: 7,
    backgroundColor: "white",
  },
  brandName: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});
