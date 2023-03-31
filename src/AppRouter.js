import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import UserInfo from './screen/UserInfo';

const Stack = createNativeStackNavigator();

const AppRouter = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ animation: 'none' }}>
                <Stack.Screen
                    name="User"
                    component={UserInfo}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppRouter;
