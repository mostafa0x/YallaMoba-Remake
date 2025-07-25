import CustomButton from "@/components/Fields/CustomButton";
import InputText from "@/components/Fields/InputText";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

const BtnUpload = ({ setStages }: any) => {
  return (
    <>
      <TouchableOpacity onPress={() => setStages(2)} style={styles.boarder}>
        <Icon color={Colors.UploadIcon} size={rf(70)} source={"camera"} />
        <Text style={styles.boarderTxt}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setStages(2)} style={styles.boarder}>
        <Icon color={Colors.UploadIcon} size={rf(70)} source={"view-gallery"} />
        <Text style={styles.boarderTxt}>Gallery</Text>
      </TouchableOpacity>
    </>
  );
};
const FristStage = ({ setStages }: any) => {
  return (
    <View style={styles.center}>
      <BtnUpload setStages={setStages} />
    </View>
  );
};
const SecStage = ({ setStages }: any) => {
  return (
    <View style={styles.Seccenter}>
      <View style={styles.containerSec}>
        <View style={styles.input}>
          <InputText width={270} name={"des"} label={"info"} />
        </View>
        <TouchableOpacity
          onPress={() => setStages(1)}
          style={styles.containerImg}
        >
          <Image
            contentFit="contain"
            style={styles.img}
            source={require("../../../assets/images/ReelList/defImge.png")}
          />
        </TouchableOpacity>
        <View>
          <CustomButton context={"Upload"} Width={200} />
        </View>
      </View>
    </View>
  );
};

export default function Upload() {
  const [Stages, setStages] = useState(1);
  return (
    <View style={styles.container}>
      {/* <FristStage /> */}
      {Stages == 1 ? (
        <FristStage setStages={setStages} />
      ) : (
        <SecStage setStages={setStages} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rh(19),
    // marginLeft: rw(39),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: rh(300),
    gap: rw(10),
  },
  Seccenter: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: rw(10),
    marginTop: rh(200),
  },
  boarder: {
    backgroundColor: Colors.BtnColor,
    borderRadius: rw(25),
    padding: rw(25),
    alignItems: "center",
  },
  boarderTxt: {
    textAlign: "center",
    fontFamily: Fonts.PoppinsSemiBold,
    color: Colors.TextColor,
    fontSize: rf(18),
  },
  containerSec: {
    alignItems: "center",
    width: rw(337),
    height: rh(417),
    backgroundColor: Colors.ReelListBack,
    borderRadius: rw(20),
    paddingTop: rh(25),
    gap: rh(25),
  },
  input: {},
  containerImg: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: rw(10),
  },
  img: {
    width: rw(307),
    height: rh(210),
  },
});
