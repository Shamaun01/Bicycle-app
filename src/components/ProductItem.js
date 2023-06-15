import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Cart", {
      image: item.image,
      name: item.name,
      price: item.price,
    });
  };

  return (
    <TouchableOpacity style={styles.pressable} onPress={handlePress}>
      <View style={styles.mainView}>
        <View>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
        <View>
          <View style={styles.name}>
            <Text style={styles.productName} numberOfLines={2}>
              {item.name}
            </Text>
          </View>
          <View style={styles.range}>
            <View style={styles.servicsView}>
              <Text style={styles.review}>{item.range}</Text>
            </View>
            <View style={styles.servicsView}>
              <Text style={styles.review}>{item.type}</Text>
            </View>
            <View style={styles.servicsView}>
              <Text style={styles.review}>Charge 100%</Text>
            </View>
          </View>
          <View style={styles.rating}>
            <Entypo name="star" size={24} color="gold" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <View>
            <Text style={styles.price}> $ {item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 20,
    margin: 14,
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  image: {
    height: 150,
    width: 150,
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    marginRight: 10,
    maxWidth: "70%",
    flexWrap: "wrap",
  },

  rating: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "blue",
    marginTop: 10,
  },
  name: {
    flex: 1,
    marginRight: 50,
  },
  range: {
    flex: 1,
    marginTop: 7,
    flexDirection: "row",
    marginRight: 10,
    maxWidth: "70%",
    flexWrap: "wrap",
  },
  review: {
    fontSize: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
  },
  servicsView: {
    padding: 5,
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    margin: 5,
  },
});
