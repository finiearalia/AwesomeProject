import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App'
import Mahasiswa from './Mahasiswa'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate, faCirclePlus, faUserPen } from '@fortawesome/free-solid-svg-icons'
import { WebView } from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import  CreateData from './CreateData'
import Datamahasiswa from './ListData'
import EditData from './Editdata'
function HomeScreen() {
  return (
    <CreateData />
  );
}

function DataMahasiswaScreen() {
  return (
   <Datamahasiswa />
  );
}
function EditScreen() {
  return (
    <EditData
      />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tambah" component={HomeScreen} options={{ headerShown: false, 
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCirclePlus} size={20} color={color} />
          ),
         }} />
        <Tab.Screen name="Mahasiswa" component={DataMahasiswaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUserGraduate} size={20} color={color} />
          ),
         }} />
        <Tab.Screen name="Edit" component={EditScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUserPen} size={20} color={color} />
          ),
         }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}