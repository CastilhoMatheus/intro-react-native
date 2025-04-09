import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import { Theme } from '../Theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export default function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert(`Do you want to delete ${name}?`, 'unable to change back', [
      {
        text: 'Yes',
        onPress: () => onDelete(),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };
  return (
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? 'check' : 'circle'}
          size={24}
          color={isCompleted ? Theme.colorGrey : Theme.colorCerulean}
        />
        <Text
          numberOfLines={1}
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>

      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? Theme.colorGrey : Theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completedContainer: {
    backgroundColor: Theme.colorLightGrey,
    borderBottomColor: Theme.colorLightGrey,
  },
  itemText: { fontSize: 18, fontWeight: '200', flex: 1 },

  completedText: {
    textDecorationLine: 'line-through',
    textDecorationColor: Theme.colorGrey,
    color: Theme.colorGrey,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
});
