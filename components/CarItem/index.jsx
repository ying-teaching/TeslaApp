import { ImageBackground, Text, View, Pressable } from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

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

      <View style={styles.buttonsContainer}>
        <StyledButton
          type={'primary'}
          content={'Custom Order'}
          onPress={() => console.log('click order')}
        />
        <StyledButton
          type={'secondary'}
          content={'Existing Inventory'}
          onPress={() => console.log('click inventory')}
        />
      </View>
    </ImageBackground>
  );
}
