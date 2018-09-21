import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  Sound,
  VrButton
} from 'react-vr';
import PenHolder from './PenHolder';

// import Primitives from './Primitives';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state =  {
            background: 'background.jpeg',
            sounds: 'birds.wav',
            penHoldervisible: true

        }
    }

  changeScene() {
      console.log('Change Scene is Clicked')
      this.setState({
          background:'outside.jpeg',
          sounds: 'birds.wav',
          penHoldervisible: false
          })
  }  
  renderItems() {
      if (this.state.penHoldervisible === true) {
          return <PenHolder />
      }
  }
  render() {
    return (
      <View>
         <AmbientLight intensity = {2.5} /> 
        <Pano source={asset(this.state.background)}/>
        <Sound 
            loop={false}
            volume = {0.7}
            source = {{
               wav: asset(this.state.sounds)
            }}
        />
        <VrButton onClick = {this.changeScene.bind(this)}>
            <Text
                style={{
                    backgroundColor: '#777879',
                    fontSize: 0.8,
                    fontWeight: '400',
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{translate: [-1, 2, -6]}],
                }}>
            Satya's Office
            </Text>   
        </VrButton>
        
       {this.renderItems()}
      </View>
    );
  }
};

