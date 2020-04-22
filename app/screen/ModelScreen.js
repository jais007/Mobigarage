//ModelScreen.js
import React, { Component } from 'react';
import {View,StyleSheet,Image,FlatList} from 'react-native';
import {Box,Text} from 'react-native-design-utility'
import { connect } from 'react-redux'
import ProblemsCard from '../component/ProblemsCard'
import { CardItem ,Card} from 'native-base';
class ModelScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('Modelname'),
    });
    renderItem = ({ item, index }) => {
      return (
        <Card>
           <ProblemsCard
            ModelName={this.props.navigation.getParam('Modelname', 'NO-ID')}
            ModelImage={this.props.navigation.getParam('ModelImage', 'Image-source')}
           onPress={this.props.addItemToCart} {...item}/>
        </Card>
          
      )
    }
    keyExtractor = (item) => String(item.id);
    separator = () => { }
    render() {
      const { navigation } = this.props;
      const ModelName = navigation.getParam('Modelname', 'NO-ID');
      const ModelImage = navigation.getParam('ModelImage', 'Image-source');
      const SelectedModelObj = navigation.getParam('ModelObj', 'Model-obj');
      return (
        <Box f={1}>
          <Box center f={1}>
            <Text>Selected Model : {ModelName}</Text>
            <Image source={JSON.stringify(ModelImage)}
            />
          </Box>
          <View style={{margin:20}}></View>
           <Box f={2}>
           <FlatList
            data={SelectedModelObj}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            />
           </Box>
        </Box>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart : (DATA) => dispatch({ type: 'ADD_TO_CART',payload: DATA})
    }
  }
  export default connect(null, mapDispatchToProps)(ModelScreen);
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
    addbtn: { paddingVertical: 5, paddingHorizontal: 30, borderRadius: 6 },
  });
  