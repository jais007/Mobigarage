import * as React from 'react';
import { View, StyleSheet, Image,ActivityIndicator, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Button, Body, Icon, Label } from 'native-base';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility'
import firebase from '../Config'
import {withNavigationFocus} from 'react-navigation'
class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Email:"",
      FirstName: "",
      LastName: "",
      Mobile: "",
      count:0,
      flag:false,
    };
  }
  componentDidMount(){
   this.setState({flag:true})
   firebase.auth().onAuthStateChanged(user=>{
    if(user){
      this.setState({
        Email:user.Email,
      })
    }
  })
   var user = firebase.auth().currentUser;
   firebase.database().ref('/users/' + user.uid).once('value')
     .then((snapshot) =>{
         this.setState({
           FirstName: snapshot.val().FirstName,
           LastName: snapshot.val().LastName,
           Mobile: snapshot.val().Mobile,
           flag:false,
         });
       },
     )
     .catch(error=>{
      this.setState({flag:false}),       
        Alert.alert(error.message)
    })
   console.log("Mob=", this.state.Mobile, "Name=", this.state.FirstName)
 }
  componentWillUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.setState({flag:true})
      var user = firebase.auth().currentUser;
      firebase.database().ref('/users/' + user.uid).once('value').
        then(
          (snapshot) => {
            this.setState({
              FirstName: snapshot.val().FirstName,
              LastName: snapshot.val().LastName,
              Mobile: snapshot.val().Mobile,
              flag:false,
            });
          },
        )
    }
  }
  

  static navigationOptions = {
    headerTitle: 'My Account',
    drawerIcon: () => (
      <Icon name="md-home" size={25} style={{ fontSize: 20, paddingTop: 5 }} />
    ),
  };
  render() {
    return (
      <Container>
      {this.state.flag ? 
        <View style={styles.container} >
        <ActivityIndicator size="large" color="#3a455c" style={{flex:1,justifyContent:'center',
          alignItems:'center'}}/>
         </View>:
         
      <Container>
        <Header style={{ backgroundColor: '#3a455c', height: 180, borderBottomColor: '#757575', marginTop: 0 }}>
          <Body style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.iconcontainer}>
              <Icon name='md-person' style={{ fontSize: 64, color: '#3a455c' }} />
            </View>
            <View style={{ flex: 1}}>
            <Text style={styles.headerText}>{this.state.FirstName +' '+this.state.LastName}</Text>
              <Text style={styles.headerText}>{this.state.Email}</Text>
            </View>
          </Body>
        </Header>
        <View>
        </View>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center', justifyContent: 'center'}}>

          <Button bordered style={{ padding: 20, margin: 4, borderRadius: 4 }}
            onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Text>Edit Profile</Text>
          </Button>
        </Content>
      </Container>
      }
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    width:"100%",
  },
  button: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcontainer: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    flexDirection: 'row'
  },
  headerText:{
    fontSize: 16, 
    fontWeight:'bold',
    color: '#fff', 
    marginTop:5,
    justifyContent:'center',
    alignItems:'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default withNavigationFocus(ProfileScreen)