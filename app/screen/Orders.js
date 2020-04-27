import * as React from 'react';
import { FlatList, View, ScrollView, Text, StyleSheet,RefreshControl} from 'react-native';
import { Container, Header, CardItem, Card, Icon, Left, Right, Item, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Box, UtilityThemeProvider } from 'react-native-design-utility'
import firebase from '../Config'
export default class Orders extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Booking History',
    drawerIcon: () => (
      <Icon name="md-refresh" size={25} color="black" />
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      OrderList: [],
      newOrder: "",
    };
  }
  renderItem = ({ item, index }) => {
    return (
      <Card>
        <CardItem style={{ height: 160, width: 330, justifyContent: 'space-between', marginHorizontal: 10 }}>
          <View >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Booking ID :</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Booking_id}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Booking Date :</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Booking_Date}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Quantity :</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Quantity}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Amount :</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Amount}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Item :</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Item[0].ModelName}</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Item[0].problemname}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Address :</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Address.Name},</Text>
              <Text style={{ paddingLeft: 10 }}>{item.Address.Mobile}</Text>
            </View>
            <Text style={{ paddingLeft: 10 }}>{item.Address.Address}</Text>
            {/* <Text style={{ paddingLeft: 10 }}> Item :{item.Item}</Text> */}

          </View>
        </CardItem>
      </Card>
    )
  }
  keyExtractor = (item) => String(item.id);
  componentDidMount() {
    var user = firebase.auth().currentUser;
    firebase.database().ref('/Orders/' + user.uid).once('value')
      .then((data) => {
        data.forEach((snapshot) => {
          console.log(snapshot.val())
          const newOrder = {
            Booking_Date: snapshot.val().Booking_Date,
            Booking_id: snapshot.val().Booking_id,
            Quantity: snapshot.val().Quantity,
            Item: snapshot.val().Item,
            Amount: snapshot.val().Amount,
            Address: snapshot.val().Address
          }
          const OrderList = [...this.state.OrderList];
          OrderList.push(newOrder);
          this.setState({
            OrderList,
            newOrder: ""
          })
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header style={{ height: 70, backgroundColor: '#3a455c', marginTop: 0 }}>
          <Left>
            <Icon name="md-menu" style={{ color: 'white', marginLeft: 10 }} onPress={() => this.props.navigation.toggleDrawer()} />
          </Left>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff', marginTop: 22, marginLeft: 40 }}>Order History</Text>
          <Right>

          </Right>
        </Header>
        <ScrollView style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <FlatList
            data={this.state.OrderList}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </ScrollView>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',

  },
  button: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});