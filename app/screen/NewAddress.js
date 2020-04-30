//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity, Alert} from 'react-native';
import { Item, Label, Input } from 'native-base';
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
    checkfield(){
        if(this.state.Name==''||this.state.Mobile||this.state.House_no||this.state.City||this.state.State||this.state.PIN)
          { Alert.alert("All field are mandatroy")}
        
    }
    handleaddnew(){
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
                        <Input  keyboardType = 'numeric' value={this.state.Mobile} onChangeText={(Text) => this.setState({ Mobile: Text })} />
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
                        <Input  keyboardType = 'numeric' value={this.state.PIN} onChangeText={(Text) => this.setState({ PIN: Text })} />
                    </Item>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{backgroundColor:'#33c37d',marginTop:10,paddingHorizontal:20,paddingVertical:10,borderRadius:5}} 
                    onPress={() => {this.checkfield();this.handleaddnew()}}>
                <   Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>Save </Text>
                    </TouchableOpacity>
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
