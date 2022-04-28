import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Downloads from '../screens/downloads/downloads';
import Search from '../screens/search/search';
import Soon from '../screens/soon/soon';
import Home from './../screens/home/home';
import ProfileView from './../screens/profile/profile-view';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveTintColor: 'white',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Soon"
        component={Soon}
        options={{
          tabBarLabel: 'Soon',
          tabBarIcon: ({ color, size }) => (
            <Icon name="perm-media" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Donwloads"
        component={Downloads}
        options={{
          tabBarLabel: 'Donwloads',
          tabBarIcon: ({ color, size }) => (
            <Feather name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
