import React,{useState} from 'react';
import { View, Image,Text,Button } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import PinchZoomView from 'react-native-pinch-zoom-view';
import Sketch from 'react-native-sketch';


  function App() {
  
  const [zoomOn,setZoomOn] = useState(false);
  const [touchEnabled,setTouchEnabled] = useState(true);

  return (
      <View style={{ flex: 1 }}>
        
        <View style={{flex:1,backgroundColor:'#3498db'}}>

        

           <PinchZoomView scalable={zoomOn}  maxScale={500} minScale={-1}>
          <SketchCanvas
          touchEnabled={touchEnabled}
            style={{ height:3800,width:1000,backgroundColor:'white' }}
            strokeColor={'black'}
            strokeWidth={5}
          />
           </PinchZoomView>
          </View>
            
          <Button title="of Button" onPress={() => {
              if(zoomOn == true){
                setZoomOn(false);
                setTouchEnabled(true);
              }
              else{
                setTouchEnabled(false)
                setZoomOn(true);
              }

        }} />
        
      </View>
    );
  
}

export default App
