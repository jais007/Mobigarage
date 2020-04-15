import * as React from 'react';
import {View ,StyleSheet,Image, Dimensions,TouchableOpacity,FlatList,StatusBar} from 'react-native';
import {Icon,Input ,Item,Header,Container,Content,Right,Left} from 'native-base'
import {Box,UtilityThemeProvider,Text} from 'react-native-design-utility'
import Swiper from 'react-native-swiper'
import BrandCard from '../component/Brandcard';

const brands =[
  {
    id:1,
    brand:'Apple',
    image:require('../img/iphone-logo.jpg'),
  },
  {
    id:2,
    brand:'Samsung',
    image:require('../img/samsung-logo.jpg'),
  },
  {
    id:3,
    brand:'MI',
    image:require('../img/mi-logo.jpg'),
  },
  {
    id:4,
    brand:'Vivo',
    image:require('../img/vivo-logo.jpg'),
  },
  {
    id:5,
    brand:'Oppo',
    image:require('../img/oppo-logo.jpg'),
  },
  {
    id:6,
    brand:'OnePlus',
    image:require('../img/oneplus-logo.jpg'),
  },
]

const NUM_COL=3;
export default class HomeScreen extends React.Component {
  static navigationOptions={
    drawerIcon: () => (
      <Icon name="md-home" size={25} style={{fontSize: 20,paddingTop:5}}/>
  ),
  };
  state={}
  renderItem =({item,index})=>{
    let style={}
    if(index % NUM_COL !== 0){
      style.borderLeftColor="#f5f5f5";
      style.borderLeftWidth = 2;  
    }
    return (
      <Box w={1/ NUM_COL} bg="white" h={120} style={style}>
        <BrandCard {...item}/>
      </Box>
    )
  }
  keyExtractor=(item)=> String(item.id);
  separator =()=><Box h={2} bg="#F5F5F5"/>
    render() {
      return (
       <Box f={1}>
         <Header style={{backgroundColor:'#3a455c',height:70,borderBottomColor:'#757575',marginTop:0}}>
           <Left>
              <Icon name="md-menu" style={{color:'white'}} onPress={()=>this.props.navigation.toggleDrawer()}/>
            </Left>
            <View style={{flex:1, marginLeft:5, 
               height:"100%", justifyContent:"center",marginLeft:5}}>
             <Item style={{backgroundColor:'white',width:200,
                paddingHorizontal:10,borderRadius:4}}>
                 <Icon name="md-search" size={25} style={{fontSize: 20,paddingTop:5}}/>
               <Input placeholder="search"/>
             </Item>
            </View>
            <Right>
            <Icon name="md-cart" style={{color:'white'}} onPress={()=>this.props.navigation.navigate("Cart")}/>
            </Right>
         </Header>
          <Content style={{backgroundColor:'#d5d5d6', marginTop:20}}>
            <Swiper 
              autoplay={true} showsButtons={true} style={{height:180}}>
              <View style={{flex:1}}>
                <Image
                 resizeMode="stretch"
                 style={styles.image}
                source={require('../img/Swipe_1.png')}
                />
              </View>
              <View style={{flex:1}}>
              <Image 
                 source={require('../img/Swipe_2.png')}  
                 resizeMode="stretch"
                 style={styles.image}
              
                />
              </View>
              <View style={{flex:1}}>
                <Image  
                 source={require('../img/Swipe_3.png')} 
                 resizeMode="stretch"
                 style={styles.image}
                
                />
              </View>
            </Swiper>
            <View style={{backgroundColor:'white',paddingHorizontal:5,alignItems:'center',height:40}}>
             <Text style={{fontSize:18,marginTop:5}}>Choose Your Mobile Brand</Text>
            </View >
            </Content>
         
          <Box f={1}>
            <FlatList 
             data={brands}
             renderItem={this.renderItem}
             keyExtractor={this.keyExtractor}
             numColumns={NUM_COL} 
             ItemSeparatorComponent={this.separator}
            />
          </Box>   
       </Box>
      );
    }
  }

  
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#ff6347',
      alignItems:'center'
    },
    button:{
      marginTop:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    image: {
      width:Dimensions.get('window').width,
      flex: 1
    },
  });