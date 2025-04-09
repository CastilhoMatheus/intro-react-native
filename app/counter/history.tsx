import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Theme } from '../../Theme';
import { useEffect, useState } from 'react';
import { countdownStorageKey, PersistedCountdownState } from '.';
import { getFromStorage } from '../../utils/storage';
import { format } from 'date-fns';

const fullDateFormat = `LLL d yyyy, h:mm aaa`;

export default function HistoryScreen() {
  const [countdownState, setCountdownState] =
    useState<PersistedCountdownState>();

  useEffect(() => {
    const init = async () => {
      const value = await getFromStorage(countdownStorageKey);
      setCountdownState(value);
    };
    init();
  }, []);

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      data={countdownState?.completedAtTimestamps}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>No History!</Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            {format(item, fullDateFormat)}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: Theme.colorWhite,
  },
  contentContainer: {
    marginTop: 8,
  },
  listItem: {
    marginHorizontal: 8,
    borderRadius: 6,
    backgroundColor: Theme.colorLightGrey,
    padding: 12,
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 18,
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
});
