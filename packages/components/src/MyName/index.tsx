import React from 'react';
import { View, Text } from 'react-native';
const MyName: React.FC = () => {
    return (
        <View>
            <Text>
                My Name is Kayn
            </Text>
        </View>
    )
}

MyName.displayName = 'MyName';

export default MyName
