//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native';
import { Header, Container, Content, Button, Item, Label, Input } from 'native-base';
import firebase from '../Config'
// create a component
class NewAddress extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add New Address',
    });
    state = {
        Name: "",
        Mobile:"",
        House_no:"",
        City:"",
        State:"",
        PIN:"",
    }
    handle(){
        var user = firebase.auth().currentUser;
        firebase.database().ref('Address/' + user.uid).push({
        Name:this.state.Name,
        Mobile:this.state.Mobile,
        House_no:this.state.House_no,
        City:this.state.City,
        State:this.state.State,
        PIN:this.state.PIN,
        })
        console.log("update successfully")
        this.props.navigation.navigate('Address');
    }
    render() {
        return (
                <ScrollView style={{ flex: 1,marginTop:0 }}>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>Name</Label>
                        <Input value={this.state.Name} onChangeText={(Text) => this.setState({ Name: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>Mobile</Label>
                        <Input value={this.state.Mobile} onChangeText={(Text) => this.setState({ Mobile: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>House No</Label>
                        <Input value={this.state.House_no} onChangeText={(Text) => this.setState({ House_no: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>City</Label>
                        <Input value={this.state.City} onChangeText={(Text) => this.setState({ City: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>State</Label>
                        <Input value={this.state.State} onChangeText={(Text) => this.setState({ State: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>PIN</Label>
                        <Input value={this.state.PIN} onChangeText={(Text) => this.setState({ PIN: Text })} />
                    </Item>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button bordered style={{ padding: 30, marginHorizontal:120,marginTop:20, borderRadius: 4,
                                 justifyContent:'center',alignItems:'center'}}
                        onPress={() => this.handle()}>
                        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Save</Text>
                    </Button>
                   </View>
                </ScrollView>
                
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default NewAddress;
