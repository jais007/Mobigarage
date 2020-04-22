import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image,FlatList,TouchableOpacity
} from "react-native";
import { Box } from 'react-native-design-utility'
import { connect } from 'react-redux'
import { Left, Right,Container,Content,Item,Body,Card, CardItem} from "native-base";

class CartScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title:`My Cart`,
        headerRight:null,
      });
    renderItem = ({ item, index }) => {
        return (
            <View key={index} style={{flex:1}}>
            <View style={{flex:1,flexDirection:'row',paddingHorizontal:5,
                 height:110,width:300}}>
                <Left >
                <Image source={item.image} style={styles.image} />
                </Left>
                <Box f={1} center>
                    <Text style={{fontSize:18}}>{item.problemname}</Text>
                    <Text  style={{fontSize:14}}>{item.ModelName}</Text>
                </Box>
                <Right>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{'\u20B9'}{item.price}</Text>
                </Right>
            </View>
            </View>
        

        )
    }
    keyExtractor = (item) => String(item.id);
    separator = () => { }
    render() {
        console.log(this.props.cartItems)
        return (
            <CardItem style={styles.container}>
                {this.props.cartItems.length == 0 ? <Text>No items in your cart</Text> :
                    <Box f={1}>
                        <FlatList
                            data={this.props.cartItems}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                        />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textstyle}>CheckOut</Text>
                        </TouchableOpacity>
                        <View style={{marginBottom:10}}></View>
                    </Box>
                }
            </CardItem>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight:75,
        maxWidth:75,
        resizeMode: 'contain',
    },
    btn:{
        backgroundColor:'#33c37d',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        borderRadius:5,
        paddingVertical:10,
        padding:5
    },
    textstyle:{
        fontSize:18,
        color:'white',
        fontWeight:"bold",
    }
});