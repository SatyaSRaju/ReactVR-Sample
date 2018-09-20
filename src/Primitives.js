import React from 'react';
import { View,Box, Cylinder, Sphere, StyleSheet } from 'react-vr';

export default class Primitives extends React.Component {
  render() {
    return (
      <View>
       <Box 
            dimWidth = {1}
            dimDepth = {1}
            dimHeight={0.5}
            style = {{
                color: 'red'
            }}
       />
      </View>
    );
  }
};

