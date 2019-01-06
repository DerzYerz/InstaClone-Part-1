import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from './config';

class InstaClone extends Component {

  constructor(){
    super();
      this.state ={
        liked: false,
        screenWidth: Dimensions.get("window").width,
      };
  }

  likeToggled(){
    this.setState({
      liked: !this.state.liked
    })
  }

  render(){
    const imageUri = "https://lh3.googleusercontent.com/klO1MMa7zfAcQX5JT6JsG8RIDCoFosvJRo2MZCc5Qq0IeCkiqceCQDwm50gNFuQCdTwbe3hXDA478hwlCEVUh67PZA";
    const heartIconColor = this.state.liked ? "rgb:(252,61,57)"": null;

    return (
      <View style= {{ flex: 1, width: 100+"%", height: 100+"%" }}>
        <View style={styles.tempNav}>
          <Text>Dersagram</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{flexDirection: "row", alignItems:"center"}}>
            <Image
              style= {styles.userPic}
              source={{uri: "https://lh3.googleusercontent.com/xF-3NU2yAa-Rdu4BKVtDuMoqf-NUxo_xH1kGthtuYINU3oP8K3qvWiydCK8C7wR1lo4upYnSmvXIbpqswQz-8oNMEQ"
            }}
          />
            <Text style={{marginLeft: 10}}>Anders Engnell</Text>
            <Text style={{marginLeft:185, fontSize: 20, marginBottom: 10}}>...</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.likeToggled()}>
        <Image
          style={{ width: this.state.screenWidth, height: 405 }}
          source={{ uri: imageUri }}
        />
        </TouchableOpacity>
      <View style={styles.iconBar}>
      <Image
      style={[styles.icon, {height: 40, width: 40, tintColor: heartIconColor}]}
      source={config.images.heartIcon}/>
      <Image style={[styles.icon, {height: 35, width: 35}]}
      source={config.images.shareIcon}/>
      <Image style={[styles.icon, {height: 40, width: 40}]}
      source={config.images.commentIcon}/>
      </View>
    </View>
    )
  };
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 +"%",
    height: 56,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(200,200,200)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    height: config.styleConstants.rowHeight,
    width: 100+"%",
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    marginHorizontal: 10
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100+"%",
    borderColor: "rgb(200,200,200)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 10
  }
});

export default InstaClone;
