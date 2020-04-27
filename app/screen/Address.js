//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView,ActivityIndicator} from 'react-native';
import { Button, Icon, Card, CardItem } from 'native-base';
import { Box } from 'react-native-design-utility'
// create a component
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
                <CardItem style={{ height: 90, width: 330, justifyContent: 'space-between', marginHorizontal:10 }}>
                    <View>
                        <Text style={{ paddingLeft: 10 }}>{item.Name}</Text>
                        <Text style={{ paddingLeft: 10 }}>{item.Mobile}</Text>
                        <Text style={{ paddingLeft: 10 }}>{item.Address}</Text>
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
                 <ActivityIndicator size="large" color="#d9534f" style={{flex:1,justifyContent:'center',
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

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Address;
