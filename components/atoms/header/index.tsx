import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { ArrowBack } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { HeaderProps } from "./types";

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowBack style={styles.iconBack} />
      </TouchableOpacity>

      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
