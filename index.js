import React, {Component} from 'react';
import {View} from 'react-native';

const absoluteFill = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export default class PhotoGrid extends Component {
  renderGrid = (direction) => {
    const blockStyle = direction === 'row'
      ? {borderColor: 'white', borderRightWidth: 1}
      : {borderColor: 'white', borderBottomWidth: 1};

    return (
      <View
        style={{
          ...absoluteFill,
          flexDirection: direction,
          opacity: 0.3,
        }}
      >
        <View style={[{flex: 1}, blockStyle]} />
        <View style={[{flex: 1}, blockStyle]} />
        <View style={{flex: 1}} />
      </View>
    );
  }

  render() {
    return (
      <View style={absoluteFill} pointerEvents="none">
        {this.renderGrid('row')}
        {this.renderGrid('column')}
      </View>
    );
  }
}
