import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TVNavigationManager from './CustomComponent/TVNavigationManager';
import {FocusGuideProvider} from './CustomComponent/FocusGuideContext';
// import TVNavigationManager from './TVNavigationManager';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';

export type RootStackParamList = {
  HomeDrawer: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeDrawer = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'left',
      drawerStyle: {width: '30%', backgroundColor: '#222'},
    }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

const App: React.FC = () => (
  <FocusGuideProvider>
    <TVNavigationManager>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeDrawer"
            component={HomeDrawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TVNavigationManager>
  </FocusGuideProvider>
);

export default App;
