import * as React from 'react';
import {View ,Text,StyleSheet,Image, Dimensions} from 'react-native';
import {Icon,Input ,Item,Header,Container,Content,Right,Left} from 'native-base'

export default class IphoneModel extends React.Component {
    render() {
      return (
       <Container>
          <View style={{backgroundColor:'white',paddingHorizontal:5,alignItems:'center',height:40}}>
             <Text style={{fontSize:18,marginTop:5}}>Choose Your Mobile Brand</Text>
          </View >
          <Content style={{flex:1,backgroundColor:'#F5F5F5'}}>
              <View style={{flexDirection:'row'}}>
              <View style={{width:150,height:300,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/iphone-7.png')} 
                 style={{flexDirection:'row',height:270,width:130,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              <View style={{width:150,height:300,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/iphone-6.png')} 
                 style={{flexDirection:'row',height:270,width:130,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              </View>
              <View>
              <View style={{width:150,height:300,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/iphone-11.jpg')} 
                 style={{flexDirection:'row',height:270,width:130,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              </View>
             </Content>
       </Container>
      );
    }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#ff6347',
      alignItems:'center'
    },
    button:{
      marginTop:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    image: {
      width:Dimensions.get('window').width,
      flex: 1
    },
  });