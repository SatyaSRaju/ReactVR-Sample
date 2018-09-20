import React from 'react';
import {
  asset,
  View,
  Model,
  StyleSheet
} from 'react-vr';

export default class PenHolder extends React.Component {
  render() {
    return (
      <View>
         <Model 
            source = {{
                obj: asset('/PenHolder/Table_Set_obj.obj'),
                mtl:asset('/PenHolder/Table_Set_obj.mtl')
            }}
            style = {{
                transform : [
                    {translate: [-2.3,0.70, -4]},
                    {scale: 0.001},
                    {rotateX: -90 }
                ]
            }}
         />
         
         <Model 
            source = {{
                obj: asset('/PenHolder/Table_Set_obj.obj'),
                mtl:asset('/PenHolder/Table_Set_obj.mtl')
            }}
            style = {{
                transform : [
                    {translate: [5,0.70, -4]},
                    {scale: 0.00125},
                    {rotateX: -90 }
                ]
            }}
         />
         <Model 
            source = {{
                obj: asset('/PenHolder/Table_Set_obj.obj'),
                mtl:asset('/PenHolder/Table_Set_obj.mtl')
            }}
            style = {{
                transform : [
                    {translate: [10,0.60, -3.75]},
                    {scale: 0.00150},
                    {rotateX: -90 },
                    {rotateZ: -270}
                    
                ]
            }}
         />
      </View>
    );
  }
};

