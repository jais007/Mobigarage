import * as React from 'react';
import { FlatList, View, ScrollView, Text, Image, StyleSheet, SafeAreaView,ActivityIndicator} from 'react-native';
import { Container, Header, CardItem, Card, Left, Right, Icon, Item, Input, ListItem } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Box, UtilityThemeProvider } from 'react-native-design-utility'
import firebase from '../Config'


export default class Orders extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Booking History',
    drawerIcon: () => (
      <FontAwesome name="history" style ={{fontSize:20}} color="black" />
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      OrderList: [],
      newOrder: "",
      flag:false,
    };
  }
  componentDidMount() {
    this.setState({flag:true})
    var user = firebase.auth().currentUser;
    firebase.database().ref('/Orders/' + user.uid).once('value')
      .then((data) => {
        this.setState({flag:false})
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
  keyExtractor = (item) => String(item.id);
  _keyExtractor = (item, index) => {
    return  
    }
  render() {
    return (
      <Container>
      {this.state.flag ? 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <ActivityIndicator size="large" color="#3a455c" style={{flex:1,justifyContent:'center',alignItems:'center'}}/>
         </View>
      :
      <View style={styles.container}>
        <Header style={{ height: 70, backgroundColor: '#3a455c', marginTop: 0 }}>
          <Left>
            <Icon name="md-menu" style={{ color: 'white', marginLeft: 10 }} onPress={() => this.props.navigation.toggleDrawer()} />
          </Left>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff', marginTop: 22, marginLeft: 40 }}>Order History</Text>
          <Right>

          </Right>
        </Header>
          <ScrollView>
            <FlatList
              data={this.state.OrderList}
              listKey={(item, index) => String(this.props.index+"_"+index+'_'+item.id+"_"+moment().valueOf())}
              renderItem={({ item,index}) => (
                <Card key={index}>
                  <CardItem header style={{ justifyContent: 'center', flexDirection: 'row', backgroundColor: '#38abe3'
                       }}>
                    <Left>
                      <Text style={{ fontSize: 12,color:'#fff',fontWeight:'bold'}}>Booking ID : </Text>
                      <Text style={{ fontSize: 12 ,color:'#fff'}}>{item.Booking_id}</Text>
                    </Left>
                    <Right>
                      <Text style={{ fontSize: 12 ,color:'#fff'}}>{item.Booking_Date}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <View style={{ flex: 1 }}>
                      <FlatList
                        data={item.Item}
                        listKey={(item, index) => String(this.props.index+"_"+index+'_'+item.id+"_"+moment().valueOf())}
                        renderItem={({item,index}) =>(
                          <CardItem key={index}>
                            <View style={{ flex: 1 }}>
                              <Image style={{ height: 50, width: 50 }}
                                source={item.image}
                              />
                            </View>
                            <Left style={{ flex: 1, alignItems: 'flex-start' }}>
                              <View>
                                <Text style={{ fontSize: 14 }}>{item.ModelName}</Text>
                                <Text style={{ fontSize: 12 }}>{item.problemname}</Text>
                              </View>
                            </Left>
                            <Right style={{ flex: 1, alignItems: 'flex-end' }}>
                              <Text style={{ paddingLeft: 10, fontWeight: 'bold', color: '#c4402f' }} >{'\u20B9'}{item.price}</Text>
                            </Right>
                          </CardItem>
                        )}
                      />
                      <Right style={{ flex: 1, alignItems:'flex-end',justifyContent:'space-around' }}>
                        <Text style={{fontSize: 14, fontWeight: "bold", padding: 10,color: '#c4402f', marginLeft:180}}>
                          Amount : {'\u20B9'}{item.Amount}
                        </Text>
                      </Right>
                      <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text style={{fontWeight:'bold',fontSize:14,marginLeft:22}}>{item.Address.Name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Ionicons name="ios-call" style={{ color: 'blue', fontSize: 16 ,marginHorizontal:5}} />
                          <Text>{item.Address.Mobile}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                          <FontAwesome name="map-marker" style={{ color: 'blue', fontSize: 16,marginHorizontal:5 }} />
                          <Text>{item.Address.Address}</Text>
                        </View>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              )}
              
            />
          </ScrollView>
      </View>
      }
      </Container>
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