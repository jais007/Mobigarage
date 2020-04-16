//import liraries
import React, { Component } from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native'
import {Box,Text} from 'react-native-design-utility'
import NavigationService from '../services/NavigationService';
class ModelCard extends Component {
    state={};
    handlepress =()=>{
        console.log(this.props.Model);
        NavigationService.navigate('Model',{ name: this.props.Model ,image:this.props.image});
    };
    render() {
        const {title,image}=this.props;
        return(
            <TouchableOpacity onPress={this.handlepress} style={{flex:1}}>
            <Box center f={1}>
                <Box>
                    <Image source={image} style={{height:170,weight:100,resizeMode:'contain'}}
                    />
                </Box>
                <Text>{this.props.Model}</Text>
            </Box>
            </TouchableOpacity>
        )
    }
}

export default ModelCard;
