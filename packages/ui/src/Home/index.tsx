import { View, Text } from 'react-native';
import React, { Suspense, lazy } from 'react';
import { MyName } from 'bare-rn-0740.components';
export const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <View>
                <Text>Lazy Comp</Text>
                <Suspense fallback={ <Text>Loading......</Text> }>
                    {React.createElement(lazy(() => import('../../../components/src/MyName/index.tsx')))}
                    {React.createElement(lazy(() => import('components/MyName/index.tsx')))}
                </Suspense>
            </View>
            <View>
                <Text>Static Import</Text>
                <MyName />
            </View>
        </View>
    )
}