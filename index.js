/**
 *  Copyright (c) 2016 BAM
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 * 
 *  @providesModule PhotoGuidelineGuide
 *  @Flow
 * */

import React, {Component} from 'react';
import {View} from 'react-native';

type AbsoluteFill = {
  position: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

type BlockStyle = {
  borderColor: string;
  borderBottomWidth?: number;
  borderRightWidth?: number;
}

export type Direction = 'row' | 'column';

const absoluteFill : AbsoluteFill = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export const Lines = (direction : Direction, color) => (
  const blockStyle: BlockStyle = (direction === 'row')
      ? {borderColor: color, borderRightWidth: 1}
      : {borderColor: color, borderBottomWidth: 1};

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
);

export const PhotoGrid = (color: string = 'white') => (
    return (
      <View style={absoluteFill} pointerEvents="none">
        <Lines direction="row" color={color} />
        <Lines direction="column" color={color} />
      </View>
    );
)

export default PhotoGrid;
