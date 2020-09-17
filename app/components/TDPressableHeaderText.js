import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import config from '../config';

/**
 * This functional component is TDPressableHeaderText and useful to set as left and right pressable text on
 * navigation header
 * @param {*} params : headerText as string and compulsory if not passed then the component will be null ,
 * textStyle as object contains style for text, containerStyle as as object contains style for main container
 */
const TDPressableHeaderText = ({ headerText, textStyle, containerStyle }) => {
  return headerText && headerText !== '' ? (
    <Pressable style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{headerText}</Text>
    </Pressable>
  ) : null;
};

const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start' },
  text: { fontSize: 16, fontWeight: config.fontWeights.FONT_WEIGHT_REGULAR, padding: 3 },
});

export default TDPressableHeaderText;
