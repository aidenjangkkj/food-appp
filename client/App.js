import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css'
import { Provider } from 'react-redux'
import Navigation from './navigation';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}
