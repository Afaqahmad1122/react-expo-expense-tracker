import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Insights from "../screens/Insights";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Insights" component={Insights} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <stack.Navigator>
      <stack.Screen name="bottomTabs" component={MyTabs} />
    </stack.Navigator>
  );
}
