import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
      },
    }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PetFriend</Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Image
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww' }} 
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
            <TouchableOpacity onPress={() => navigation.navigate('Notificaciones')} style={{ marginRight: 10 }}>
              <FontAwesome6 name="bell" style={{ fontSize: 30, height: 40, width: 40 }} color={'black'} />
            </TouchableOpacity>
          ),
        })}
      />
      
      {/* Pantalla Profile */}
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerBackTitle: 'Back',  // Esto hace que se muestre el botón de Back
        }}
      />
      
      {/* Pantalla Notifications */}
      <Stack.Screen
        name="Notificaciones"
        component={NotificationsScreen}
        options={{
          headerBackTitle: 'Back',  // Esto hace que se muestre el botón de Back
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
