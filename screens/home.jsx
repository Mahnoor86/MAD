import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({navigation}) {
    return (
      <ImageBackground source={require('/Users/mahnoorbabar/Documents/MAD/midpapp/assets/bg.jpg.webp')} style={styles.imageBg}>
        <View style={styles.container}>

          <View style={styles.header}>
            <Icon name="bars" size='25' ></Icon>
            <Icon name='plus'size='25'></Icon>
          </View>
          <View style={styles.center}>
            <Icon name="leaf" size='70' ></Icon>
          </View>
          <View style={styles.emailp}>
            <Icon name="user" size='25' ></Icon>
            <Text style={styles.mailtext}>Email</Text>
          </View>
          <View style={styles.emailp}>
            <Icon name="lock" size='25' ></Icon>
            <Text style={styles.mailtext}>Password</Text>
          </View>
          <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('About')}>
<Text style={styles.signIntext} >Sign In</Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <Icon name="search" size='25' ></Icon>
            <TouchableOpacity style={styles.account} onPress={()=>navigation.navigate('Page')}>
<Text style={styles.accText} >Create an Account</Text>
          </TouchableOpacity>
            <Icon name='cog'size='25'></Icon>
          </View>
          











        </View>
      </ImageBackground>
    );
  }
  const styles=StyleSheet.create(
    {
      container:{
        display:'flex',
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
    
      },
      imageBg:
      {
        flex:1,
        resizeMode:'cover'
      },
      header:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent:'space-between',
        top:50,
        width:'90%'
      },
      center:{
        marginBottom:'30%'
      },
      emailp:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 8,
        marginBottom: 20,
        backgroundColor: 'white'
      },
      icond:{
        marginLeft:15
      },
      signIn:{
       backgroundColor:'white',
    width:'80%',
    height:50,
    marginTop:20,
    alignItems:'center',
    borderRadius:25
  
      },
      bottom:{
        position: 'absolute',
        bottom: 40,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      account:{
  marginTop:20
      },
      accText:{
        fontSize:20,
        textDecorationLine:'underline',
      },
      mailtext:{
        marginLeft:20
      },
      signIntext:{
        margin:15,
      }
    }
  );
  