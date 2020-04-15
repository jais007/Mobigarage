//import liraries
import React, { Component } from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native'
import {Box,Text} from 'react-native-design-utility'
import NavigationService from '../services/NavigationService';
class ProductCard extends Component {
    state={};
    handlepress =()=>{
        console.log(this.props.title);
        NavigationService.navigate('Product',{ name: this.props.title});
    };
    render() {
        const {title,image}=this.props;
        return(
            <TouchableOpacity onPress={this.handlepress} style={{flex:1}}>
            <Box center f={1}>
                <Box>
                    <Image source={image} style={{height:100,weight:100,resizeMode:'contain'}}
                    />
                </Box>
            </Box>
            </TouchableOpacity>
        )
    }
}

export default ProductCard;
