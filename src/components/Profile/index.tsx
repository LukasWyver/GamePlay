import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Avatar } from "../Avatar";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { ModalExit } from "../ModalExit";

export function Profile() {
  const { user, signOut } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  function handleSignOut() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function teste() {
    alert("teste");
  }
  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeling}>Olá,</Text>

          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória.</Text>
      </View>

      <ModalExit visible={openModal} closeModal={() => handleCloseModal()}>
        <View style={styles.ContentTextExit}>
          <Text style={styles.textExit}>Deseja sair do Game</Text>
          <Text style={[styles.textExit, { color: theme.colors.primary }]}>
            Play
          </Text>
          <Text style={styles.textExit}>?</Text>
        </View>
        <View style={styles.ContentButtonExit}>
          <RectButton
            onPress={() => handleCloseModal()}
            style={styles.ButtonNot}
          >
            <Text style={styles.TextButtonNot}>Não</Text>
          </RectButton>
          <RectButton onPress={signOut} style={styles.ButtonYes}>
            <Text style={styles.TextButtonYes}>Sim</Text>
          </RectButton>
        </View>
      </ModalExit>
    </View>
  );
}
