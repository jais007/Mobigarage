//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../Config'
import { Box } from 'react-native-design-utility'
import { Card, CardItem,Button} from 'native-base'
import RadioButton from 'react-native-radio-button';
import Constants from 'expo-constants';
import {connect} from 'react-redux'
import NavigationService from '../services/NavigationService';
// create a component
class SelectAddress extends Component {
    static navigationOptions = ({ nativation }) => ({
        title: 'Select Address',
        headerRight: null,
    });
    constructor(props) {
        super(props);
        this.state = {
            AddressList: [],
            newAddress: "",
            selectedItem:"",
            rerefreshing:false,
        };
    }
    onPress =(item)=>{
        this.setState({selectedItem:item});
        console.log(this.state.selectedItem)
    }
    renderItem = ({ item, index }) => {
            
        return (
            <Card  key={index}>
              <View style={{flex: 1, flexDirection: "row" ,justifyContent:'space-between'}}>
                  <View style={{marginLeft:10,justifyContent:'center'}}>
                  <RadioButton isSelected={this.state.selectedItem == item }
                     onPress={() => {this.onPress(item)}}/>
                  </View>
                <CardItem style={{ height: 100, width: 330, justifyContent: 'space-between', borderBottomColor: '#2f8fd6' }}>
                      <View style={{ padding: 0}}>
                            <Text style={{ paddingLeft: 10 }}>{item.Name}</Text>
                            <Text style={{ paddingLeft: 10 }}>{item.Mobile}</Text>
                            <Text style={{ paddingLeft: 10 }}>{item.Address}</Text>
                        </View>
                </CardItem>
                
                </View>
            </Card>
        )
    }
    keyExtractor = (item) => String(item.id);
    componentDidMount() {
        var user = firebase.auth().currentUser;
        firebase.database().ref('/Address/' + user.uid).once('value')
            .then((data) => {
                data.forEach((snapshot) => {
                    console.log(snapshot.val())
                    const newItem = {
                        Id: snapshot.key,
                        Name: snapshot.val().Name,
                        Mobile: snapshot.val().Mobile,
                        Address: snapshot.val().House_no + ' ' + snapshot.val().City + ' ' + snapshot.val().State
                            + ' ' + snapshot.val().PIN
                    }
                    const AddressList = [...this.state.AddressList];
                    AddressList.push(newItem);
                    this.setState({
                        AddressList,
                        newItem: ""
                    }) 
                })
            })
    }
    handleBooking(Quantity,Item,Amount){
        let d=new Date(Date.now()).toDateString()
        var user = firebase.auth().currentUser;
        firebase.database().ref('Orders/' + user.uid).push({
        Booking_Date:d,
        Booking_id:Date.now(),
        Quantity:Quantity,
        Item:Item,
        Amount:Amount,
        Address:this.state.selectedItem,
        })
        console.log("Order Placed successfully")

        this.props.navigation.navigate('Home');
    }
    render() {
        const { navigation } = this.props;
        const Quantity = navigation.getParam('Quantity', 'itemQuantity');
        const Item = navigation.getParam('Item', 'Item');
        const Amount = navigation.getParam('Amount', 'amount');
        return (
            <View style={styles.container}>
                <Box f={2}>
                    <FlatList
                        data={this.state.AddressList}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        extraData={this.state}
                    />
                </Box>
                <Button style={styles.bookbtn} 
                  onPress={() => this.handleBooking(Quantity,Item,Amount)}>
                    <Text style={styles.textstyle}>Book Now</Text>
                </Button>
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
        backgroundColor: '#fff',
    },
    bookbtn: {
        backgroundColor: '#33c37d',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        paddingVertical: 10,
        padding: 5
    },
    textstyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: "bold",
    },
});

//make this component available to the app
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(SelectAddress);
