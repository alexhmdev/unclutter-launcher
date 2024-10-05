import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {RNLauncherKitHelper} from 'react-native-launcher-kit';

import {AppDetail} from 'react-native-launcher-kit/typescript/Interfaces/InstalledApps';

function AppItem({app}: {app: AppDetail}): React.JSX.Element {
  return (
    <Pressable
      onLongPress={() => console.log('Long Press')}
      onPress={() => RNLauncherKitHelper.launchApplication(app.packageName)}
      className="py-4 "
      android_ripple={{
        color: 'rgba(245, 244, 244, 0.49)',
        radius: 500,
      }}>
      <Text className="text-2xl text-black dark:text-white">{app.label}</Text>
    </Pressable>
  );
}

function AppsList({apps}: {apps: AppDetail[]}): React.JSX.Element {
  return (
    <FlatList
      data={apps}
      renderItem={({item}) => <AppItem app={item} />}
      keyExtractor={item => item.packageName}
      className="p-4"
    />
  );
}

export default AppsList;
