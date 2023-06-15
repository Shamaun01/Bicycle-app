import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";

const Types = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypePress = (type) => {
    setSelectedType(type);
  };

  const getBicycleTypeStyle = (type) => {
    if (selectedType === type) {
      return [styles.bicycleType, styles.selectedBicycleType];
    }
    return styles.bicycleType;
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.type}>
        <TouchableHighlight
          style={getBicycleTypeStyle("all")}
          underlayColor="#DDDDDD"
          onPress={() => handleTypePress("all")}
        >
          <Text style={styles.bicycletypeText}>All Bicycle</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={getBicycleTypeStyle("road")}
          underlayColor="#DDDDDD"
          onPress={() => handleTypePress("road")}
        >
          <Text style={styles.bicycletypeText}>Road Bicycle</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={getBicycleTypeStyle("folding")}
          underlayColor="#DDDDDD"
          onPress={() => handleTypePress("folding")}
        >
          <Text style={styles.bicycletypeText}>Folding Bicycle</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={getBicycleTypeStyle("hill")}
          underlayColor="#DDDDDD"
          onPress={() => handleTypePress("hill")}
        >
          <Text style={styles.bicycletypeText}>Hill Bicycle</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={getBicycleTypeStyle("bmx")}
          underlayColor="#DDDDDD"
          onPress={() => handleTypePress("bmx")}
        >
          <Text style={styles.bicycletypeText}>BMX Bicycle</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default Types;

const styles = StyleSheet.create({
  type: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 6,
  },
  bicycleType: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 6,
  },
  selectedBicycleType: {
    backgroundColor: "#7CB9E8",
  },
  bicycletypeText: {
    fontSize: 17,
    fontWeight: "500",
    color: "gray",
  },
});
