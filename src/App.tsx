import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {InstalledApps} from 'react-native-launcher-kit';
import {AppDetail} from 'react-native-launcher-kit/typescript/Interfaces/InstalledApps';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [apps, setApps] = useState<AppDetail[]>([]);
  const initApp = async () => {
    let installedApps = InstalledApps.getSortedApps();
    setApps(installedApps);
  };

  useEffect(() => {
    initApp();
  }, []);
  return (
    <SafeAreaView className="bg-white dark:bg-black">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView>
        <View>
          {apps.map((app, index) => (
            <Text key={index} className="">
              {app.label}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
