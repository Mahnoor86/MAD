import react from "react";
import { Text, View,StyleSheet  } from "react-native";

export default function Page(){
    return(
        <View style={styles.container}>
        <Text style={styles.text}>
           MAD 
        </Text>
        </View>
    );

}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',    
      },
text:{
    fontSize:20
}
})