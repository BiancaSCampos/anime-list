import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { ItemSearchProps } from "./types";

const ItemSearch = ({ image, title, onPress }: ItemSearchProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemSearch;
