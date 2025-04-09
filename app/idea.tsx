import { Text, View, StyleSheet } from 'react-native';
import { Theme } from '../Theme';

export default function IdeaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Idea</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
