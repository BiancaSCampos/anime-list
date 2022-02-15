import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles";
import Header from "../../components/atoms/header";
import api from "../../services";
import { StatusBar } from "expo-status-bar";
import { Anime } from "../../types";
import YoutubePlayer from "react-native-youtube-iframe";
import pr from "pr-unit";
import { ItemDetailsProps } from "./types";

const ItemDetails = ({ route: { params } }: ItemDetailsProps) => {
  const [animes, setAnimes] = useState<Anime>({} as Anime);
  const [playing, setPlaying] = useState(false);

  const { id } = params;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {
          data: { data },
        }: { data: { data: Anime } } = await api.get(`/anime/${id}`);

        setAnimes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#0000" />
      <Header title={animes?.attributes?.titles.en_jp} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerPage}
      >
        <ImageBackground
          source={{
            uri: animes?.attributes?.posterImage?.original,
          }}
          style={styles.image}
          blurRadius={60}
        >
          <View style={styles.container}>
            <Image
              source={{
                uri: animes?.attributes?.posterImage?.original,
              }}
              style={styles.imageBanner}
            />
            <Text style={styles.title}>
              {animes?.attributes?.titles?.en_jp}
            </Text>
            <Text style={styles.text}>{animes?.attributes?.description}</Text>

            <View style={styles.containerVideo}>
              <YoutubePlayer
                play={playing}
                videoId={animes?.attributes?.youtubeVideoId}
                width={950 * pr}
                height={600 * pr}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default ItemDetails;
