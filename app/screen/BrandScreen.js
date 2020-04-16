//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import {Box} from 'react-native-design-utility'
import ModelCard from '../component/ModelCard';
import {BRANDS} from '../shared/Goods';
const NUM_COL=2;
class BrandScreen extends Component {
    static navigationOptions =({navigation})=>({
        title:navigation.getParam('name'),
    });
  renderItem =({item,index})=>{
    let style={}
    if(index % NUM_COL !== 0){
      style.borderLeftColor="#f5f5f5";
      style.borderLeftWidth = 2;  
    }
    return (
      <Box w={1/ NUM_COL} bg="white" h={200} style={style}>
        <ModelCard {...item}/>
      </Box>
    )
  }
  keyExtractor=(item)=> String(item.id);
  separator =()=><Box h={2} bg="#F5F5F5"/>
    render() {
      
        const { navigation } = this.props;
        const brandname = navigation.getParam('name', 'NO-ID');
        const model = BRANDS.find( ({ brand }) => brand == brandname );
        return(
              
        <Box f={1}>
            
            <FlatList 
             data={model.MODELS}
             renderItem={this.renderItem}
             keyExtractor={this.keyExtractor}
             numColumns={NUM_COL} 
             ItemSeparatorComponent={this.separator}
            />  
         </Box>
      );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BrandScreen;
