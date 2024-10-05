import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {InstalledApps} from 'react-native-launcher-kit';
import {AppDetail} from 'react-native-launcher-kit/typescript/Interfaces/InstalledApps';
import {AppsList} from './components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [apps, setApps] = useState<AppDetail[]>([]);
  const initApp = async () => {
    let installedApps = InstalledApps.getSortedApps();
    setApps(installedApps);
  };

  const filterApps = (searchText: string) => {
    let filteredApps = InstalledApps.getSortedApps().filter(app =>
      app.label.toLowerCase().includes(searchText.toLowerCase()),
    );
    setApps(filteredApps);
  };

  useEffect(() => {
    initApp();
  }, []);
  return (
    <SafeAreaView className="bg-white dark:bg-black p-4 flex flex-col gap-4 flex-1">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <TextInput
          placeholder="Search app"
          className="border-b-4 border-black dark:border-white"
          onChangeText={text => filterApps(text)}
        />
      </View>
      <AppsList apps={apps} />
    </SafeAreaView>
  );
}

export default App;
