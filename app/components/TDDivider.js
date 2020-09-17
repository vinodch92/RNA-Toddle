import React from 'react';
import { View, StyleSheet } from 'react-native';
import config from '../config';

/**
 * This is the TDDivider functional component works as a divider and can be used within the app
 * @param {*} dividerStyle : dividerStyle is an object which can be passed to this component
 */
const TDDivider = ({ dividerStyle }) => {
  return <View style={[styles.divider, dividerStyle]} />;
};

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: config.colors.divider },
});

export default TDDivider;
