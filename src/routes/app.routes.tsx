import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Details, Register } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='home' component={Home}/>
      <Screen name='details' component={Details} />
      <Screen name='register' component={Register} />
    </Navigator>
  )
}