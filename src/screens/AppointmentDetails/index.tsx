import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";

import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";

import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "online",
    },
    {
      id: "2",
      username: "Wagner",
      avatar_url: "https://github.com/BarbosaWagner.png",
      status: "online",
    },
    {
      id: "3",
      username: "Diuliano",
      avatar_url: "https://github.com/diulianovenancio.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={24} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
