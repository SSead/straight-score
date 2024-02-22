import React, { FC } from "react";
import { View, Text } from "react-native";
import { useStyles } from "./styles";

export const ScoreScreen: FC = () => {
  const styles = useStyles();

  const score1 = 100;
  const score2 = 101;

  return (
    <View style={styles.screen}>
      <View style={styles.header}></View>

      <View style={styles.scoreView}>
        <Text style={styles.scoreText}>{score1}</Text>
        <Text style={styles.scoreText}>{score2}</Text>
      </View>
    </View>
  );
};
