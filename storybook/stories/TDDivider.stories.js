import React from 'react';
import { StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { TDDivider } from '../../app/components';
import config from '../../app/config';

storiesOf('TDDivider', module)
  .add('Default', () => <TDDivider />)
  .add('With custom styling', () => <TDDivider dividerStyle={styles.divider} />);

const styles = StyleSheet.create({
  divider: { height: 2, backgroundColor: config.colors.black, marginHorizontal: 10, marginTop: 20 },
});
