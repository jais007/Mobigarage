//import liraries
import React, { Component } from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native'
import {Box,Text} from 'react-native-design-utility'
import NavigationService from '../services/NavigationService';
class BrandCard extends Component {
    state={};
    handlepress =()=>{
        console.log(this.props.brand);
        NavigationService.navigate('Brand',{ name: this.props.brand});
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

export default BrandCard;
