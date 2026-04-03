import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../config/navigationRef';
import BottomTabs from './bottom-tabs';
import Login from '../screens/login';
import Register from '../screens/register';
import InputDataDiri from '../screens/input-data-diri';
import {getCekLogin} from '../services';
import LoadingIndicator from '../components/loading-indicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpdateDataDiri from '../screens/update-data-diri';
import ScheduleDetail from '../screens/schedule-detail';
import Question from '../screens/question';
import Score from '../screens/score';
import ResetPassword from '../screens/reset-password';
import SelesaiUjian from '../screens/selesai-ujian';

const Stack = createNativeStackNavigator();

const CustomTransition = {
  headerShown: false,
};

const Router = () => {
  const [isLoading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const idUser = await AsyncStorage.getItem('idUser');
        const nim = await AsyncStorage.getItem('nim');

        const res = await getCekLogin();
        if (res.status == 'success') {
          if (!idUser) {
            await AsyncStorage.setItem('idUser', JSON.stringify(res.id));
          }
          if (!nim) {
            await AsyncStorage.setItem('nim', JSON.stringify(res.username));
          }
          if (res.biodata == 1) {
            setInitialRoute('bottomTabs');
          } else {
            setInitialRoute('inputDataDiri');
          }
        } else {
          await AsyncStorage.removeItem('idUser');
          await AsyncStorage.removeItem('nim');
          setInitialRoute('login');
        }
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (isLoading || !initialRoute) {
    return <LoadingIndicator color="#1B4196" fullscreen size="large" />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="login"
          component={Login}
          options={CustomTransition}
        />
        <Stack.Screen
          name="bottomTabs"
          component={BottomTabs}
          options={CustomTransition}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={CustomTransition}
        />
        <Stack.Screen
          name="inputDataDiri"
          component={InputDataDiri}
          options={CustomTransition}
        />
        <Stack.Screen
          name="updateDataDiri"
          component={UpdateDataDiri}
          options={CustomTransition}
        />
        <Stack.Screen
          name="scheduleDetail"
          component={ScheduleDetail}
          options={CustomTransition}
        />
        <Stack.Screen
          name="question"
          component={Question}
          options={CustomTransition}
        />
        <Stack.Screen
          name="score"
          component={Score}
          options={CustomTransition}
        />
        <Stack.Screen
          name="resetpassword"
          component={ResetPassword}
          options={CustomTransition}
        />
        <Stack.Screen
          name="selesaiUjian"
          component={SelesaiUjian}
          options={CustomTransition}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
