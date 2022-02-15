import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles";
import pr from "pr-unit";
import { Anime } from "../../../types";
import metrics from "../../../constants/metrics";
import { SliderProps } from "./types";

const pageSize = metrics.screen.width;

const Slider = ({
  animes,
  currentAnime,
  setCurrentAnime,
  onPress,
}: SliderProps) => {
  return (
    <View style={styles.containerSlider}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={"never"}
        onMomentumScrollEnd={({ nativeEvent: { contentOffset } }) =>
          setCurrentAnime(Math.round(contentOffset.x / pageSize))
        }
      >
        {animes.map((anime, index) => (
          <View style={styles.containerCard} key={index}>
            <TouchableOpacity style={styles.containerImage} onPress={onPress}>
              <Image
                source={{
                  uri: anime?.attributes?.posterImage?.original,
                }}
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text
                style={styles.textButton}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {anime?.attributes?.titles?.en_jp}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Slider;
