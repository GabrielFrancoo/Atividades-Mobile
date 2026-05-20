import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles';

function Rodape(props) {

  return (
    <View style={styles.rodape}>

      <Text>
        {props.autor}
      </Text>

      <Text>
        {props.data}
      </Text>

    </View>
  );
}

export default Rodape;