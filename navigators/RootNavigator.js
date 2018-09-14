import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

export default AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null,
  }
});
