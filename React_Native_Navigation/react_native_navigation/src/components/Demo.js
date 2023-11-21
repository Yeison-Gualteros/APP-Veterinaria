import { View, Text } from "react-native";
import { Button } from 'react-native-paper';


export default function Demo() {
    return (
        <View>
            <Text>Componente Demo</Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                press me
            </Button>
        </View>
    )
}