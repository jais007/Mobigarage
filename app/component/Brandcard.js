//import liraries
import React, { Component } from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native'
import {Box,Text} from 'react-native-design-utility'
import NavigationService from '../services/NavigationService';
class BrandCard extends Component {
    handlepress =()=>{
        console.log(this.props.brand);
        NavigationService.navigate('Brand',{ name: this.props.brand,ModelObj:this.props.MODELS});
    };
    render() {
        const {brand,image,MODELS}=this.props;
        return(
            <TouchableOpacity onPress={this.handlepress} style={{flex:1}}>
            <Box center f={1}>
                <Box>
                    <Image source={image} style={{ maxHeight:100,maxWidth:100,resizeMode:'contain'}}
                    />
                </Box>
                </Box>
            </TouchableOpacity>
        )
    }
}

export default BrandCard;
