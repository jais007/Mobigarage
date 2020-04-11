import * as React from 'react';
import {View ,StyleSheet,Button,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container,Header,Content, Body, Icon,Label } from 'native-base';
import {UtilityThemeProvider,Box,Text} from 'react-native-design-utility'
export default class ProfileScreen extends React.Component {
  static navigationOptions={
    drawerIcon: () => (
      <Icon name="md-home" size={25} style={{fontSize: 20,paddingTop:5}}/>
  ),
  };
    render() {
      return (
       <Container>
            <Header style={{backgroundColor:'#3a455c',height:170,borderBottomColor:'#757575',marginTop:0}}>
            <Body  style={{flex:1,alignContent:'center',flexDirection:'row',justifyContent:'center'}}>
              <View style={styles.iconcontainer}>
                <Icon name='md-person' style={{fontSize:64,color:'#3a455c'}}/>
              </View>
           </Body>
           
         </Header>
         <Container>
           <Box f={1}>
           <Label>Name :</Label>
           <Label>Email:</Label>
           <Label>Mobile:</Label>
           <Label>DOB:</Label>
           <Label>Address:</Label>
           </Box>
        </Container>
            <Content contentContainerStyle={{flex:1,
              alignItems:'center',justifyContent:'center'}}>
            <Text>Profile Screen</Text>
            <Button
            onPress={() => this.props.navigation.navigate('EditProfile')}
            title="Edit Profile "
            />
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
    iconcontainer:{
      backgroundColor:'white',
      width:100,
      height:100,
      borderRadius:50, 
      justifyContent:'center',
      alignItems:'center', 
      color: 'white'
    }
  });