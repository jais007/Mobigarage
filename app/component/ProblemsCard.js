//import liraries
import React, { Component } from 'react';
import {Image,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import {Box,Text} from 'react-native-design-utility'
import {Button,Left,Right,Card,CardItem, View} from 'native-base';
class ProblemCart extends Component {
    render() {
        const {image,problemname,price}=this.props;
        return(
             <CardItem style={{height:70,width:350,justifyContent:'space-around'}}>
                <View>
               <Image source={image} style={styles.image} />
                </View>
                <View>
                    <Text style={{ paddingLeft: 10}} >{problemname}</Text>
                    <Text style={{paddingLeft:10, fontStyle:'italic',color:'#b19cd9'}} >{'\u20B9'}{price}</Text>
                </View>
                <Right>
                <TouchableOpacity style={styles.btn} 
                onPress={()=>this.props.onPress({
                    problemname:problemname,
                    price:price,
                    image:image,
                    ModelImage:this.props.ModelImage,
                    ModelName:this.props.ModelName
                    })}>
                <Text style={styles.textstyle} >Add Cart</Text>
                 </TouchableOpacity>
                </Right>
            </CardItem>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        maxHeight:50,
        maxWidth:50,
        resizeMode:'contain',
    },
    imagecontainer:{
        flexDirection:'row',
        backgroundColor:'#f5f5f5',
        padding:10,
        marginHorizontal:30,
        marginTop:5,
        flex:1
        
    },
    btn:{width:120,
        backgroundColor:'#33c37d',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        borderRadius:5,
        padding:5
    },
    textstyle:{
        fontSize:18,
        color:'white',
        fontWeight:"bold",
    }
});
export default ProblemCart;
