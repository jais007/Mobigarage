//import liraries
import React, { Component } from 'react';
import { KeyboardAvoidingView,View,TouchableOpacity,Text, StyleSheet,Alert,ActivityIndicator} from 'react-native';
import {Item,Label,Button,Input} from 'native-base'
import firebase from '../Config';
// create a component
export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
      };
      state={
          Email:"",
          Password:"",
          flag:false
      }
    userSignin(Email,Password){
        console.log(this.state)
        if(Email==""|| Password==""){
            Alert.alert("Invalid Email or Password")
            this.props.navigation.navigate("Login");
        }
        else{
        this.setState({flag:true}),
        firebase.auth().signInWithEmailAndPassword(Email,Password)
        .then(()=>{
            this.setState({flag:false}),
            this.props.navigation.navigate('Dashboard', { Email: this.state.Email });
        })
        .catch(error=>{
            this.setState({flag:false}),
            Alert.alert(error.message)
        })
    }
    }
    render() {
        return (
        <View style={styles.container}> 
           {this.state.flag ? 
            <View style={styles.container} >
           <ActivityIndicator size="large" color="#3a455c" style={{flex:1,justifyContent:'center',
             alignItems:'center'}}/>
            </View>
            :
            <KeyboardAvoidingView style={styles.container}>
            <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                <Label>Email</Label>
                <Input value={this.state.Email} onChangeText={(Text)=>this.setState({Email:Text})} />
            </Item>
            <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                <Label>Password</Label>
                <Input  secureTextEntry={true} value={this.state.Password} onChangeText={(Text)=>this.setState({Password:Text})}/>
            </Item>
            <Button  full rounded flex={{color:'#3a455c'}}
                style={{margin:10,justifyContent:'center',alignItems:'center'}}
                onPress={()=>this.userSignin(this.state.Email,this.state.Password)}>
                <Text style={{color:'#fff',fontSize:16}} > Login</Text>
            </Button>
            <TouchableOpacity>
                <Text style={{textAlign:"center" ,fontSize:18}}
                 onPress={() => this.props.navigation.navigate('SignUp')}> Don't have an account ?</Text>
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