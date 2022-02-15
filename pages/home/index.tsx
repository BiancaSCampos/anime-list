import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Anime } from "../../types";
import styles from "./styles";
import api from "../../services";
import SearchBar from "../../components/atoms/searchBar";
import { StatusBar } from "expo-status-bar";
import Slider from "../../components/atoms/slider";
import { Search } from "../../assets/icons";

const pageSize = 20;

const Home = ({ navigation }: any) => {
  const [animes, setAnimes] = useState<Anime[]>([] as Anime[]);
  const [currentAnime, setCurrentAnime] = useState(0);
  const [shouldFetchApi, setShouldFetchApi] = useState(true);
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    if (!shouldFetchApi) return;

    const fetchApi = async () => {
      try {
        const {
          data: { data },
        }: { data: { data: Anime[] } } = await api.get(
          `/anime?page[limit]=${pageSize}&page[offset]=${pageOffset}`
        );

        setAnimes([...animes, ...data]);
        setShouldFetchApi(false);
        setPageOffset(pageOffset + pageSize);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, [shouldFetchApi]);

  useEffect(() => {
    if (currentAnime - (pageOffset - pageSize) > pageSize * 0.75)
      setShouldFetchApi(true);
  }, [currentAnime]);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        style="light"
      />
      <ImageBackground
        source={{
          uri: animes[currentAnime]?.attributes?.posterImage?.original,
        }}
        style={styles.container}
        blurRadius={60}
      >
        <View style={styles.containerSearch}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Search style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <Slider
          animes={animes}
          currentAnime={currentAnime}
          setCurrentAnime={setCurrentAnime}
          onPress={() => {
            navigation.navigate("ItemDetails", {
              id: animes[currentAnime]?.id,
            });
          }}
        />
      </ImageBackground>
    </>
  );
};

export default Home;
