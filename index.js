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
type LineStyle =  {
  flex: number;
  borderColor: string;
  borderBottomWidth: number;
  borderRightWidth: number;
}
type Direction = 'row' | 'column';
type GetLineStyle = (direction : Direction, color: string) => LineStyle;
type LinesComponent = (direction : Direction, color: string) => React$Element<*>;
type PhotoGridComponent = (color?: string) => React$Element<*>;

const absoluteFill : AbsoluteFill = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const getLinesStyle: GetLineStyle = (direction, color) => (
  return {
    flex: 1,
    borderColor: color,
    borderRightWidth: direction === 'row' ? 0 : 1,
    borderBottomWidth: direction === 'row' ? 1 : 0,
  }
);

export const Lines: LinesComponent = (direction, color, subDivision) => (
  return (
    <View
        style={{
          ...absoluteFill,
          flexDirection: direction,
          opacity: 0.3,
        }}
      > 
        {
          Array(subDivision - 1).map(() => (
            <View style={getLinesStyle()} />
          ))
        }
        <View style={{flex: 1}} />
      </View>
  );
);

export const PhotoGrid: PhotoGridComponent = (color: string = 'white', subDivision: number = 3) => (
    return (
      <View style={absoluteFill} pointerEvents="none">
        <Lines direction="row" color={color} subDivision={subDivision} />
        <Lines direction="column" color={color} subDivision={subDivision} />
      </View>
    );
)

export default PhotoGrid;
