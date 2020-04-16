//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,Image} from 'react-native';
import {Box,Text} from 'react-native-design-utility'
import {Button,Left,Right} from 'native-base';
// create a component
class ModelScreen extends Component {
    state={
        AddScreen:false,
        AddMic:false,
    };
    screencheck(){       
        if(this.state.AddScreen==false){
            return <Button bordered style={styles.addbtn} onPress={this.handlescreen}>
                    <Text bold color="#9370DB">Add  +</Text>
                    </Button>
        }
        else{
            return <Button bordered style={styles.rmvbtn}  onPress={this.handlescreen}>
            <Text bold color="#57595d">Remove -</Text>
            </Button>
            
        }
     }
     miccheck(){       
        if(this.state.AddMic ==false){
            return <Button bordered style={styles.addbtn} onPress={this.handleMic}>
                    <Text bold color="#9370DB">Add  +</Text>
                    </Button>
        }
        else{
            return <Button bordered style={styles.rmvbtn}  onPress={this.handleMic}>
            <Text bold color="#57595d">Remove -</Text>
            </Button>
            
        }
     }
    handlescreen=()=>{
        this.state.AddScreen==true ? this.setState({AddScreen:false}):this.setState({AddScreen:true});
    };
    handleMic=()=>{
        this.state.AddMic==true ? this.setState({AddMic:false}):this.setState({AddMic:true});
    };
    render() {
        const { navigation } = this.props;
        const SelectedModel = navigation.getParam('name', 'NO-ID');
        const image = navigation.getParam('image', 'Image-source');
        return (
            <Box f={1}>
               
                <Box center f={1}>
                <Text>Selected Model : {SelectedModel}</Text>
                <Image source={JSON.stringify(image)} style={{height:170,weight:100,resizeMode:'contain'}}
                    />
                </Box>
                <Box f={1} p={20}>
                   <Box style={styles.imagecontainer}>
                     <Image source={require('../img/problems/screen.png')} style={styles.image}/>
                     <Box>
                        <Text style={{paddingLeft:10}} bold >SCREEN</Text>
                        <Text style={{paddingLeft:10}} >price</Text>
                     </Box>
                     <Right>{this.screencheck()}</Right>
                   </Box>
                   <Box style={styles.imagecontainer}>
                   <Image source={require('../img/problems/mic.png')} style={styles.image}
                    />
                     <Box>
                     <Text style={{paddingLeft:10}} bold >MIC</Text> 
                     <Text style={{paddingLeft:10}} >price</Text>
                     </Box>
                     <Right>{this.miccheck()}</Right>
                   </Box>
                  
                  
                </Box>
            </Box>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height:50,
        width:50,
        resizeMode:'contain',
    },
    imagecontainer:{
        flexDirection:'row',
        backgroundColor:'#f5f5f5',
        padding:10,
        margin:5,
    },
    addbtn:{paddingVertical:5,paddingHorizontal:30,borderRadius:6},
    rmvbtn:{paddingVertical:5,paddingHorizontal:18,borderRadius:6},
});

//make this component available to the app
export default ModelScreen;
