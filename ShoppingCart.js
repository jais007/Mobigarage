//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { Container,Header,Content, Body, Icon,Button} from 'native-base';
import { DrawerItems,
        createStackNavigator,
        createDrawerNavigator,
        createAppContainer,
        createSwitchNavigator,
        createBottomTabNavigator} from 'react-navigation'
import HomeScreen from './app/screen/HomeScreen';
import ProfileScreen from './app/screen/ProfileScreen';
import Orders from './app/screen/Orders';
import Notification from './app/screen/Notification';
import Logout from './app/screen/Logout';
import EditProfile from './app/screen/EditProfile'
import {Box} from 'react-native-design-utility'
import Address from './app/screen/Address'
import NewAddress from './app/screen/NewAddress'
import BrandScreen from './app/screen/BrandScreen';
import NavigationService from './app/services/NavigationService'
import ModelScreen from './app/screen/ModelScreen'
import ShoppingCartIcon from './app/screen/ShoppingCartIcon'
import CartScreen from './app/screen/CartScreen';
import SelectAddress from './app/screen/SelectAddress';

const profileheader={
  headerStyle:{
    backgroundColor: '#3a455c'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
class WelcomeScreen extends Component {
  render() {
    return (
       <Box f={1} center>
          <Button block light style={styles.btn} onPress={()=>this.props.navigation.navigate('Dashboard')}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Login</Text>
          </Button>
          <Button block light style={styles.btn} onPress={()=>this.props.navigation.navigate('Welcome')}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Sign Up</Text>
          </Button>
       </Box>
    );
  }
}


const ProfileStack=createStackNavigator({
  Profile:{
      screen:ProfileScreen,
      navigationOptions:({navigation})=>{
      return {
        ...profileheader,
        headerLeft:<Icon name="md-menu" style={{color:'white',marginLeft:10}} onPress={()=>navigation.toggleDrawer()}/>,
        headerTitle:'My Account'
       }
    }
  },
  EditProfile:{
    screen:EditProfile,
    navigationOptions:{...profileheader,headerTitle:'Edit Profile'},
  }
})
const Addressstack=createStackNavigator({
  Address:Address,
  NewAddress:NewAddress,
},{
    defaultNavigationOptions:{
      ...profileheader,
     }
})
const ProfiletTabNavigator=createBottomTabNavigator({
  Profile:{
      screen:ProfileStack,
       navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: () =><Icon name="md-person" size={25} style={{fontSize: 20,paddingTop:5}}/>
      }
  },
  
  Address:{
    screen:Addressstack,
    navigationOptions: {
      tabBarLabel: 'Saved Address',
     
      tabBarIcon: () =><Icon name="md-bookmark" size={25} style={{fontSize: 20,paddingTop:5}}/>
    }
  },
},{
  navigationOptions:({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index]
    return {
      header:null,
      // headerTitle: routeName,
      // headerStyle: {
      //   backgroundColor: '#3a455c',
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    }
  }
})

const ProfileStackNavigator=createStackNavigator({
 ProfiletTabNavigator:{
    screen:ProfiletTabNavigator,
}
},{
  defaultNavigationOptions:({navigation})=>{
   return {
     headerLeft:<Icon name="md-menu" style={{color:'white',marginLeft:10}} onPress={()=>navigation.toggleDrawer()}/>
    }
   }
});

const CustomDrawerContentComponent=(props)=>(
  <Container>
      <Header style={{height:130,backgroundColor:'#3a455c',marginTop:0}}>
        <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1}}>
        <Image name='person' style={styles.dImage}
             source={require('./app/img/profile-image.jpg')}/>
        </View>
        <View style={{flex:2}}>
        <Text style={{fontSize:15,color:'#fff',justifyContent:'center',alignItems:'center'}}>Hi, Abhishek</Text>
         <Text style={{fontSize:13,color:'#fff',justifyContent:'center',alignItems:'center'}}>abhishek@gmail.com</Text>
        </View>
        </View>
      </Header>
      <Content>
        <DrawerItems {...props}/>
      </Content>
  </Container>
)
const HomeStack=createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:({navigation})=>{
      return {
        headerLeft:<Icon name="md-menu" style={{color:'white',marginLeft:15}} onPress={()=>navigation.toggleDrawer()}/>   
    }
  },
},
  Brand:BrandScreen,
  Model:ModelScreen,
  Cart:CartScreen,
  SelectAddress:SelectAddress,
},{
  defaultNavigationOptions:{
    headerRight:<ShoppingCartIcon/>,
      headerStyle: {
        backgroundColor: '#3a455c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
})

 
const AppDrawerNavigator=createDrawerNavigator ({
  Home:{
    screen:HomeStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () =><Icon name="md-home" size={25} style={{fontSize: 20,paddingTop:5}}/>
    }
  },
  Profile:{
    screen:ProfileStackNavigator,
    navigationOptions: {
      drawerLabel: 'My Account',
      drawerIcon: () =><Icon name="md-person" size={25} style={{fontSize: 20,paddingTop:5}}/>
    }
  },
  Orders:Orders,
  Notification:Notification,
},{
    initialRouteName:'Home',
    contentComponent:CustomDrawerContentComponent,
})

const AppSwitchNavigator=createSwitchNavigator({
  Welcome:WelcomeScreen,
  Dashboard:AppDrawerNavigator,
})

 const AppNavigator=createAppContainer(AppSwitchNavigator);

export default class ShoppingCart extends Component {
  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  dImage:{
    height:100,
    width:100,
    borderRadius:50, 
  },
  btn:{
    padding:10,
    margin:10,
    backgroundColor:'#273746',
    borderRadius:4
  }
});


