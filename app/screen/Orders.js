import * as React from 'react';
import { TouchableOpacity, View ,Button,Text,StyleSheet} from 'react-native';
import { Container,Header,Content, Body, Icon,} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
export default class Orders extends React.Component {
  static navigationOptions={
    drawerLabel: 'Booking History',
    drawerIcon: () => (
    <Icon name="md-refresh" size={25} color="black"/>
  ),
  };
    render(){
      return (
        <View style={styles.container}>
          <Text style={{color:'#fff',fontSize:20}}>Orders Page</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        </View>
      );
    }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor: '#ff6347',
      alignItems:'center'
    },
    button:{
      marginTop:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  });