import { AppRegistry } from 'react-native';
import App from './app/components/App';

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('birthday', () => App);
