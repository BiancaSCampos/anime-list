import {
  View,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles";
import colors from "../../../constants/colors";
import { Search } from "../../../assets/icons";
import { SearchBarProps } from "./types";

const SearchBar = ({ value, setValue, onSearch }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        placeholderTextColor={colors.neutralLight70Opacity}
        textAlignVertical="center"
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity onPress={onSearch}>
        <Search width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
