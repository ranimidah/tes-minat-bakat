import React, {Fragment, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {networkDebugger} from './src/config/networkDebugger';
import Router from './src/routes';
import 'moment/locale/id';
import {PaperProvider} from 'react-native-paper';
import SplashScreen from './src/screens/splashscreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    networkDebugger();

    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // tampilkan selama 2 detik
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <PaperProvider>
        <Router />
      </PaperProvider>
    </Fragment>
  );
};
export default App;
