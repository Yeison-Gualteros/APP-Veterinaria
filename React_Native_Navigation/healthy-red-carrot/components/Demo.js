import { View, Text } from "react-native";
import { Button } from 'react-native-paper';


export default function Demo(){
  return(
    <View>
      <Text>componente Demo</Text>
      <Button icon="camera" mode="contained" onPress={()=> console.log('pressed')}>
        press me
      </Button>
    </View>
  )
}