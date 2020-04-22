//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Header,Container,Content,Button,Item,Label,Input} from 'native-base';

// create a component
class EditProfile extends React.Component {
    static navigationOptions =({navigation})=>({
        title:'Edit Profile',
    });
    state={
        email:"",
        name:"",
        password:"",
    }
    render() {
        return (
          <Container>
              <Content contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                    <Label>Email</Label>
                <Input value={this.state.email} onChangeText={(Text)=>this.setState({email:Text})} />
                </Item>
                <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                    <Label>Name</Label>
                    <Input value={this.state.name} onChangeText={(Text)=>this.setState({name:Text})} />
                </Item>
                <Item floatingLabel style={{borderBottomColor:"#3a455c"}}>
                    <Label>Contact</Label>
                    <Input  secureTextEntry={true} value={this.state.contact} onChangeText={(Text)=>this.setState({contact:Text})}/>
                </Item>
                </Content>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button bordered style={{marginHorizontal:0,padding:25,borderRadius:4}} 
                    onPress={()=>this.props.navigation.goBack()}>
                   <Text style={{alignItems:'center',justifyContent:'center'}}>Save</Text>
                </Button>
            </View>
              
          </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default EditProfile;
