//import liraries
import React, { Component } from 'react';
import {Image,TouchableOpacity,StyleSheet} from 'react-native'
import {Box,Text} from 'react-native-design-utility'
import NavigationService from '../services/NavigationService';
class ModelCard extends Component {
    state={};
    handlepress =()=>{
        // console.log(products);
        NavigationService.navigate('Model',{Modelname:this.props.Model,
        ModelImage:this.props.image,ModelObj:this.props.problems});
    };
    render() {
        const {title,image,Model,problems}=this.props;
        return(
            <TouchableOpacity onPress={this.handlepress} style={{flex:1}}>
            <Box center f={1}>
                <Box>
                    <Image source={image} style={{maxHeight:150,maxWidth:170,resizeMode:'contain'}}
                    />
                </Box>
                <Text>{Model}</Text>
            </Box>
            </TouchableOpacity>
        )
    }
}

export default ModelCard;
