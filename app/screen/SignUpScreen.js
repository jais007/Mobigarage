//import liraries
import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity,Text,View,ActivityIndicator, StyleSheet,Alert } from 'react-native';
import {Item,Label,Button,Input} from 'native-base'
import firebase from '../Config';
// create a component
export default class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Signup',
      };
      state={
          Email:"",
          Password:"",
          ConfirmPassword:"",
          flag:false
          
      }
      userSignup(Email,Password,ConfirmPassword){
          if(ConfirmPassword!=Password){
              Alert.alert("Password not match");
              this.props.navigation.navigate('SignUp')
          }
          else if(Email==""||ConfirmPassword==""||Password==""){
            Alert.alert("Every field is mandatory");
            this.props.navigation.navigate('SignUp')
          }
          else{
          console.log(this.state)
          this.setState({flag:true}),
          firebase.auth().createUserWithEmailAndPassword(Email,Password)
          .then(()=>{   
            this.setState({flag:false}),       
              this.props.navigation.navigate('Dashboard')})
          .catch(error=>{
            this.setState({flag:false}),       
              Alert.alert(error.message)
          })
        }
      }
    render() {
        return (
            <View style={styles.container}> 
            {
                this.state.flag ? <View style={styles.container} >
                <ActivityIndicator size="large" color="#3a455c" style={{flex:1,justifyContent:'center',
                  alignItems:'center'}}/>
                 </View>:
            <KeyboardAvoidingView style={styles.container}>
            <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                <Label>Email</Label>
                <Input value={this.state.Email} onChangeText={(Text)=>this.setState({Email:Text})} />
            </Item>
            <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                <Label>Create Password</Label>
                <Input  secureTextEntry={true} value={this.state.Password} onChangeText={(Text)=>this.setState({Password:Text})}/>
            </Item>
            <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                <Label>Confirm Password</Label>
                <Input  secureTextEntry={true} value={this.state.ConfirmPassword} onChangeText={(Text)=>this.setState({ConfirmPassword:Text})}/>
            </Item>
            <Button full rounded 
                style={{margin:10,justifyContent:'center',alignItems:'center'}}
                onPress={()=>this.userSignup(this.state.Email,this.state.Password,this.state.ConfirmPassword)}>
                <Text style={{color:'#fff',fontSize:16}}> Signup</Text>
            </Button>
            <TouchableOpacity>
                <Text style={{textAlign:"center" ,fontSize:19}}
                 onPress={() => this.props.navigation.navigate('Login')}
                 > already have an account ?</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
