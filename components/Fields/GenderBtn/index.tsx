import { Colors } from "@/constants/Colors";
import { AuthType } from "@/types/Auth/AuthType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FormikProps } from "formik";
import React, { memo, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const style = (isActivy: boolean) =>
  StyleSheet.create({
    continer: {
      borderWidth: rw(2.96),
      width: rw(87),
      height: rh(54),
      borderColor: isActivy ? Colors.boderColor : "#d1cacaa9",
      borderRadius: rw(25),
      justifyContent: "center",
    },
    txt: {
      textAlign: "center",
      fontSize: rf(17),
      fontWeight: "medium",
      color: isActivy ? Colors.TextColor : "#d1cacaa9",
    },
  });

function GenderBtn({
  label,
  Formik,
}: {
  label: string;
  Formik: FormikProps<AuthType>;
}) {
  const isActivy = Formik?.values?.gender == label;
  const styles = useMemo(() => style(isActivy), [isActivy]);
  return (
    <TouchableOpacity onPress={() => Formik.setFieldValue("gender", label)}>
      <View style={styles.continer}>
        <Text style={styles.txt}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(GenderBtn);
