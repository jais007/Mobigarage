//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView,ActivityIndicator} from 'react-native';
import { Button, Icon, Card, CardItem } from 'native-base';
import { Box } from 'react-native-design-utility'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {withNavigationFocus} from 'react-navigation'

import firebase from '../Config'
class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AddressList: [],
            newAddress: "",
            count:0,
            flag:false
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Saved Address',
        headerLeft: <Icon name="md-menu" style={{ color: 'white', marginLeft: 10 }} onPress={() => navigation.toggleDrawer()} />,
        drawerIcon: () => (
            <Icon name="md-home" size={25} style={{ fontSize: 20, paddingTop: 5 }} />
        ),
    });
    renderItem = ({ item, index }) => {
        return (
            <Card>
                <CardItem>
                    <View>
                    <Text style={{fontWeight:'bold',fontSize:14,marginLeft:22}}>{item.Name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Ionicons name="ios-call" style={{ color: 'blue', fontSize: 16 ,marginHorizontal:5}} />
                          <Text>{item.Mobile}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                          <FontAwesome name="map-marker" style={{ color: 'blue', fontSize: 16,marginHorizontal:5 }} />
                          <Text>{item.Address}</Text>
                        </View>
                    </View>
                </CardItem>
            </Card>
        )
    }
    keyExtractor = (item) => String(item.id);
    componentDidMount() {
        this.setState({flag:true})
        var user = firebase.auth().currentUser;
        firebase.database().ref('/Address/' + user.uid).once('value')
            .then((data) => {
                data.forEach((snapshot) => {
                    console.log(snapshot.val())
                    const newItem = {
                        Id:snapshot.key,
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
                this.setState({flag:false})
            })
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
                  <ScrollView style={styles.container}>
                  <FlatList
                      data={this.state.AddressList}
                      renderItem={this.renderItem}
                      keyExtractor={this.keyExtractor}
                  />
                  <Button bordered style={{ padding: 20, marginHorizontal:130,marginTop:10, borderRadius: 4,
                                 justifyContent:'center',alignItems:'center'  }}
                      onPress={() => this.props.navigation.navigate('NewAddress')}>
                      <Text style={{flex:1,justifyContent:'center',alignItems:'center'}}>Add new </Text>
                  </Button>
              </ScrollView>}
             </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Address;
