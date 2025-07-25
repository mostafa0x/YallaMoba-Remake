import React, { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import CommentsCard from "./Card";

export default function CommmentList() {
  const [isMenuOpen, setisMenuOpen] = useState(true);

  return (
    <Modal
      visible={isMenuOpen}
      onRequestClose={() => setisMenuOpen(false)}
      backdropColor={"rgba(0, 0, 0, 0.0.1)"}
      animationType="slide"
    >
      <CommentsCard />
    </Modal>
  );
}

const styles = StyleSheet.create({});
