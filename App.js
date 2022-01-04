import React,{useState} from 'react';
import { View, Image,Text,Button } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import PinchZoomView from 'react-native-pinch-zoom-view';
import Sketch from 'react-native-sketch';


  function App() {
  /**
   * Log out an example event after zooming
   *
   * @param event
   * @param gestureState
   * @param zoomableViewEventObject
   */
  // logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
  //   console.log('');
  //   console.log('');
  //   console.log('-------------');
  //   console.log('Event: ', event);
  //   console.log('GestureState: ', gestureState);
  //   console.log('ZoomableEventObject: ', zoomableViewEventObject);
  //   console.log('');
  //   console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  // }

  // const [onBtn,setBtnOn] = useState();
  // const [ofBtn,setBtnOf] = useState();

  const [zoomOn,setZoomOn] = useState(false);

  return (
      <View style={{ flex: 1 }}>
        
        <View style={{flex:1,backgroundColor:'#3498db'}}>

        

           <PinchZoomView scalable={zoomOn}  maxScale={500} minScale={-500}>
          <SketchCanvas
            style={{ height:3800,width:1000,backgroundColor:'white' }}
            strokeColor={'red'}
            strokeWidth={5}
          />
           </PinchZoomView>
          </View>
            
          <Button title="of Button" onPress={() => {
              if(zoomOn == true){
                setZoomOn(false);
              }
              else{
                setZoomOn(true);
              }

        }} />
        
      </View>
    );
  
}

export default App