import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/bikes/category/header/_1200x630_fit_center-center_82_none/23-rzxr-action-65.jpg?mtime=1668448653",
    "https://cdn.shopify.com/s/files/1/0578/6245/5485/files/TCH_Blog_MTB_2_02_1024x1024.jpg?v=1644251905",
    "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwc3be540d/images/plp/World-canyon-mtb-my23-01.jpg?sw=1920",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
