import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import ProtectingRoutingProvider from "./ProtectingRouting";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    router.push("/Landing");

    return () => {};
  }, []);

  return <ProtectingRoutingProvider>{children}</ProtectingRoutingProvider>;
}

const styles = StyleSheet.create({});
