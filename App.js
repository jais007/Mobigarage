//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
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
import { Container,Header,Content, Body, Icon,Button} from 'native-base';
import BrandScreen from './app/screen/BrandScreen';
import NavigationService from './app/services/NavigationService'
import ModelScreen from './app/screen/ModelScreen'

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
        headerLeft:<Icon name="md-menu" style={{color:'white',marginLeft:10}} onPress={()=>navigation.toggleDrawer()}/>,
        headerStyle:{
          backgroundColor: '#3a455c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       }
    }
  },

  EditProfile:{
    screen:EditProfile,
    navigationOptions:{...profileheader},

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
    screen:Address,
    navigationOptions: {
      tabBarLabel: 'Saved Address',
      tabBarIcon: () =><Icon name="md-bookmark" size={25} style={{fontSize: 20,paddingTop:5}}/>
    }
  },
},{
  navigationOptions:({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName,
      header:null,
      headerStyle: {
        backgroundColor: '#3a455c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
         <Body>
            <Image name='person' style={styles.dImage}
             source={require('./app/img/profile-image.jpg')}/>
         </Body>
      </Header>
      <Content>
        <DrawerItems {...props}/>
      </Content>
  </Container>
)
const BrandStack=createStackNavigator({
  Brand:{
    screen:BrandScreen,
     navigationOptions: {
     
    },
  },
  Model:{
    screen:ModelScreen,
    }
},{
    defaultNavigationOptions:{
            header:null,
            headerStyle:{
              backgroundColor: '#3a455c'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          
      }
})
const HomeStack=createStackNavigator({
  Home:{
    screen:HomeScreen,
     navigationOptions: {
       header:null,
      tabBarLabel: 'Home',  
      tabBarIcon: () =>  <Icon name="md-home" size={25} style={{fontSize: 20,paddingTop:5}}/>
    },
  },
  Brand:{
    screen:BrandStack,
    navigationOptions:{
      // header:null,
      headerStyle: {
        backgroundColor: '#3a455c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
},{
  navigationOptions:({navigation})=>{
    return {
      header:null,
      headerStyle: {
        backgroundColor: '#3a455c',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
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
  Logout:Logout,
},{
    initialRouteName:'Home',
    contentComponent:CustomDrawerContentComponent,
})

const AppSwitchNavigator=createSwitchNavigator({
  Welcome:WelcomeScreen,
  Dashboard:AppDrawerNavigator,
})

 const AppNavigator=createAppContainer(AppSwitchNavigator);

export default class App extends Component {
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


