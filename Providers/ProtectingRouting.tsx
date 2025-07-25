import React from "react";
import { StyleSheet } from "react-native";

export default function ProtectingRoutingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

const styles = StyleSheet.create({});
