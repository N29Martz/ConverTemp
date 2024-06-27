import React from 'react';
import {Text, View} from 'react-native';
import { TempScreens } from './presentation/screens/TempScreens';
import { styles } from './config/temp-theme';

export const App = () => {
  return (
    <View style={styles.background}>
      <TempScreens/>
    </View>
  );
};
