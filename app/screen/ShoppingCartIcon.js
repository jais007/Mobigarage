import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,TouchableOpacity,
} from "react-native";

import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux'
import {Icon} from 'native-base'

class ShoppingCartIcon extends Component{
    render(){
        return (
        <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        <View style={{
            position: 'absolute', height: 24, width: 24, borderRadius: 12, backgroundColor: 'rgba(95,197,123,0.6)', 
            right: 15, bottom:25 , alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.props.cartItems.length}</Text>
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Cart')}>
        <Icon style={{color:'#fff'}} name="md-cart" size={30} />
        </TouchableOpacity>
    </View> 
        )
    }
}

// const ShoppingCartIcon = (props) => (
    
//     <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
//         <View style={{
//             position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

//         }}>
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text>
//         </View>
//         <TouchableOpacity  onPress={() => props.navigation.navigate('Cart')}>
//         <Icon style={{color:'#fff'}} name="md-cart" size={30} />
//         </TouchableOpacity>
//     </View> 
// )

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});