//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Container, Content, Button, Item, Label, Input, DatePicker } from 'native-base';
import firebase from '../Config'
// create a component
class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName:"",
            Mobile: "",
            flag: false,
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Edit Profile',
    });
    updateProfile() {
        this.setState({ flag: true })
        var user = firebase.auth().currentUser;
        firebase.database().ref('users/' + user.uid).set({
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Mobile: this.state.Mobile,
        })
        console.log("update successfully")
        this.props.navigation.navigate("Profile")
    }
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>First Name</Label>
                        <Input value={this.state.FirstName} onChangeText={(Text) => this.setState({ FirstName: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>Last Name</Label>
                        <Input value={this.state.LastName} onChangeText={(Text) => this.setState({ LastName: Text })} />
                    </Item>
                    <Item floatingLabel style={{ borderBottomColor: "#3a455c" }}>
                        <Label>Mobile</Label>
                        <Input value={this.state.Mobile} onChangeText={(Text) => this.setState({ Mobile: Text })} />
                    </Item>
                  
                </Content>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Button bordered style={{ marginHorizontal: 0, padding: 25,marginTop:20, borderRadius: 4 }}
                        onPress={() => this.updateProfile()}>
                        <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Save</Text>
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
