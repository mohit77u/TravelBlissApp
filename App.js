import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';
import Book from './src/screens/Book';
import Destination from './src/screens/destinations/Destination';
import SearchDestination from './src/screens/destinations/SearchDestinations';
import SingleDestination from './src/screens/destinations/SingleDestination';
import Profile from './src/screens/user/Profile';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Welcome', headerShown: false}}  />
        <Stack.Screen name="Destinations" component={Destination} options={{title: 'Destinations'}}  />
        <Stack.Screen name="Search" component={SearchDestination} options={{title: 'Search Destinations'}} />
        <Stack.Screen name="Single" component={SingleDestination} options={({ route }) => ({ title: route.params.title})} />
        <Stack.Screen name="Book" component={Book} options={{title: 'Book Now'}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: 'Profile'}} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title: 'SignUp', headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{title: 'Forgot Password', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
