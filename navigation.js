import { createStackNavigator } from '@react-navigation/stack';
import AvailableSlotsScreen from './screens/AvailableSlotScreen';
import AssignSlotScreen from './screens/AssignSlotScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Available Slots" component={AvailableSlotsScreen} />
      <Stack.Screen name="Assign Slot" component={AssignSlotScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;