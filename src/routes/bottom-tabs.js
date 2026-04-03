import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import Home from '../screens/home';
import Schedule from '../screens/schedule';
import Faq from '../screens/faq';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const CustomTransition = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return styles.iconTab(focused, route.name);
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: false,
        tabBarStyle: styles.container,
      })}>
      <Tab.Screen name="home" component={Home} options={CustomTransition} />
      <Tab.Screen
        name="schedule"
        component={Schedule}
        options={CustomTransition}
      />
      <Tab.Screen name="faq" component={Faq} options={CustomTransition} />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={CustomTransition}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
