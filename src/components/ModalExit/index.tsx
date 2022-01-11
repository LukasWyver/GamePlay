import React, { ReactNode } from "react";
import {
  Modal,
  ModalProps,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalExit({ children, closeModal, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>{children}</Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
