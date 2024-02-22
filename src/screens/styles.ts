import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          backgroundColor: "#fff",
        },

        header: {
          display: "none",
        },

        scoreView: {
          alignSelf: "stretch",
          flexDirection: "row",
        },

        scoreText: {
          padding: 24,
          backgroundColor: "red",
          paddingTop: insets.top + 24,
          flex: 1,
          textAlign: "center",
          fontSize: 64,
        },
      }),
    [],
  );
};
