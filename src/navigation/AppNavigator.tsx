// AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const handleNotificationPress = () => {
    console.log('Notificaciones presionadas');
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => (
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PetFriend</Text>
          </View>
        ),
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Image
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww' }} // Cambia la URL de tu imagen de perfil
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={handleNotificationPress} style={{ marginRight: 10 }}>
            <FontAwesome6 name="bell" style={{fontSize: 30 ,height: 40, width: 40 }} color={'black'} />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, string> = {
            Home: 'house',
            Profile: 'person',
          };
          return <FontAwesome6 name={icons['Home']} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          // Elimina el shadow para iOS
          shadowOpacity: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 0,
          // Elimina el shadow para Android
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
