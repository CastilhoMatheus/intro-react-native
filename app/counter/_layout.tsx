import { Link, Stack } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Theme } from '../../Theme';
import { Pressable } from 'react-native';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Counter',
          headerRight: () => {
            return (
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <MaterialIcons
                    name="history"
                    size={32}
                    color={Theme.colorGrey}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
}
