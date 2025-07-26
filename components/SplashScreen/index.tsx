import { Colors } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function SplashScreen() {
  const videoSource = useRef(require("@/assets/Splash/SplashScreen.mp4"));
  const player = useVideoPlayer(videoSource.current, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        contentFit="fill"
        style={styles.video}
        player={player}
        nativeControls={false}
      />
      <View style={styles.loader}>
        <ActivityIndicator color={Colors.UploadIcon} size={rf(75)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  loader: {
    position: "absolute",
    left: rw(155),
    top: rh(750),
  },
});
