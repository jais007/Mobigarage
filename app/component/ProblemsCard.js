//import liraries
import React, { Component } from 'react';
import { Image, TouchableHighlight , StyleSheet, Alert } from 'react-native'
import { Box, Text } from 'react-native-design-utility'
import {connect} from 'react-redux'
import { Button, Left, Right, Card, CardItem, View } from 'native-base';
class ProblemCart extends Component {
    state={
        isAdded:false,
    }
     handle=()=>{
        let isInCart=this.props.cartItems.data.find(item=>item.id==this.props.id)
        if(isInCart){
              console.log("Item already in cart");
              this.setState({isAdded:true});
        }
        else{
        this.props.addItemToCart({
            id:this.props.id,
            problemname: this.props.problemname,
            price: this.props.price,
            image: this.props.image,
            ModelImage: this.props.ModelImage,
            ModelName: this.props.ModelName
        })
        console.log("Item addred successfully");
      }
     }
    render() { 
        setTimeout(() => {this.setState({isAdded: false})}, 5000)
        const { image, problemname, price,id} = this.props;
        return (
            <CardItem style={{ height: 70, width: 350, justifyContent: 'space-around'}}>
                <View>
                    <Image source={image} style={styles.image} />
                </View>
                <View>
                    <Text style={{ paddingLeft: 10}} >{problemname}</Text>
                    <Text style={{ paddingLeft: 10, fontStyle: 'italic', color: '#b19cd9' }} >{'\u20B9'}{price}</Text>
                </View>
                <Right>
                    <TouchableHighlight  style={styles.btn}
                        onPress={() => this.handle()}>
                        <Text style={styles.textstyle}> Add Cart</Text>
                    </TouchableHighlight>
                   {this.state.isAdded && <Text style={{fontSize:12,color:'red',fontWeight:'bold'}}>*item already in cart</Text>}
                        
                </Right>
            </CardItem>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

  const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart : (DATA) => dispatch({ type: 'ADD_TO_CART',payload: DATA})
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProblemCart);
const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        maxHeight: 50,
        maxWidth: 50,
        resizeMode: 'contain',
    },
    imagecontainer: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginHorizontal: 30,
        marginTop: 5,
        flex: 1

    },
    btn: {
        width: 120,
        backgroundColor: '#33c37d',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        padding: 5
    },
    textstyle: {
        fontSize: 15,
        color: 'white',
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
    }
});
