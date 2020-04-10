import * as React from 'react';
import {View ,Text,StyleSheet,Image, Dimensions} from 'react-native';
import {Icon,Input ,Item,Header,Container,Content,Right,Left} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
export default class HomeScreen extends React.Component {
  static navigationOptions={
    drawerIcon: () => (
      <Icon name="md-home" size={25} style={{fontSize: 20,paddingTop:5}}/>
  ),
  };
    render() {
      return (
       <Container>
         <Header style={{backgroundColor:'#3a455c',height:70,borderBottomColor:'#757575',marginTop:0}}>
           <Left>
             <Icon name="md-menu" style={{color:'white'}} onPress={()=>this.props.navigation.toggleDrawer()}/>
            </Left>

            <View style={{flex:1, marginLeft:5, 
              height:"100%", justifyContent:"center",marginLeft:5}}>
             <Item style={{backgroundColor:'white',width:200,
                paddingHorizontal:10,borderRadius:4}}>
                 <Icon name="md-search" size={25} style={{fontSize: 20,paddingTop:5}}/>
               <Input placeholder="search"/>
             </Item>
            </View>
            <Right>
            <Icon name="md-cart" style={{color:'white'}} />
            </Right>
         </Header>
          <Content style={{backgroundColor:'#d5d5d6', marginTop:20}}>
            <Swiper 
              autoplay={true} showsButtons={true} style={{height:200}}>
              <View style={{flex:1}}>
                <Image 
                 resizeMode="stretch"
                 style={styles.image}
                source={require('../img/Swipe_1.png')}
                />
              </View>
              <View style={{flex:1}}>
              <Image 
                 source={require('../img/Swipe_2.png')}  
                 resizeMode="stretch"
                 style={styles.image}
              
                />
              </View>
              <View style={{flex:1}}>
                <Image  
                 source={require('../img/Swipe_3.png')} 
                 resizeMode="stretch"
                 style={styles.image}
                
                />
              </View>
            </Swiper>
            <View style={{backgroundColor:'white',paddingHorizontal:5,alignItems:'center',height:40}}>
             <Text style={{fontSize:18,marginTop:5}}>Choose Your Mobile Brand</Text>
          </View >
          <Content style={{flex:1,backgroundColor:'#F5F5F5'}}>
              <View style={{flexDirection:'row'}}>
              <View style={{width:110,height:110,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/iphone-logo.jpg')} 
                 style={{flexDirection:'row',height:100,width:100,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              <View style={{width:110,height:110,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/samsung-logo.jpg')} 
                 style={{flexDirection:'row',height:100,width:100,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              <View style={{width:110,height:110,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/mi-logo.jpg')} 
                 style={{flexDirection:'row',height:100,width:100,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              </View>
              <View style={{flexDirection:'row'}}>
              <View style={{width:110,height:110,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/vivo-logo.jpg')} 
                 style={{flexDirection:'row',height:100,width:100,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              <View style={{width:110,height:110,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/oppo-logo.jpg')} 
                 style={{flexDirection:'row',height:100,width:100,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              <View style={{width:110,height:110,backgroundColor:'whilergba(255,255,255,1)',borderRadius:4,margin:5}}>
                <Image  
                 source={require('../img/oneplus-logo.jpg')} 
                 style={{flexDirection:'row',height:100,width:100,resizeMode:'contain',alignItems:'center',justifyContent:'center'}}
                />
              </View>
              
              </View>
          
              
             </Content>
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