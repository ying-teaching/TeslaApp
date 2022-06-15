import { ImageBackground, Text, View } from 'react-native';

import styles from './styles';

export default function CarItem() {
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={styles.image}
      source={require('../../assets/images/ModelS.jpeg')}
    >
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
    </ImageBackground>
  );
}
