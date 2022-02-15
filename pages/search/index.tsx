import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Header from "../../components/atoms/header";
import SearchBar from "../../components/atoms/searchBar";
import api from "../../services";
import { Anime } from "../../types";
import ItemSearch from "../../components/atoms/itemSearch";

const Search = ({ navigation }: any) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [shouldFetchApi, setShouldFetchApi] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!shouldFetchApi) return;

    const fetchApi = async () => {
      try {
        const {
          data: { data },
        } = await api.get(`/anime?filter[text]=${search.replace(" ", "%20")}`);

        setAnimes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, [shouldFetchApi]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <SearchBar
          value={search}
          setValue={setSearch}
          onSearch={setShouldFetchApi}
        />

        <FlatList
          data={animes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ItemSearch
              image={item?.attributes?.posterImage?.original}
              title={item?.attributes?.titles?.en_jp}
              onPress={() =>
                navigation.navigate("ItemDetails", { id: item.id })
              }
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Search;
