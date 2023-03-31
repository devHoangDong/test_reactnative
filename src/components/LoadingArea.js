import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';

const LoadingArea = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="small" color="#F46E77" />
        </View>
    )
}
export default LoadingArea
