import React, { useEffect,useState } from 'react';


import { StyleSheet, View,NativeModules,NativeEventEmitter, Button } from 'react-native';
import FloatballViewManager from 'react-native-floatball';

var nativeBridge = NativeModules.RNIOSExportJsToReact;//你的类名
const NativeModule = new NativeEventEmitter(nativeBridge);
export default function App() {
  const [isShow, setShow] = useState(true);
  useEffect(() => {
    NativeModule.addListener('SpotifyHelper',(data)=>{
      console.log('onclicked');
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      NativeModule.removeCurrentListener()
    };
  },[]);
  const url = 'data:image/png;base64,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';
  return (
    <View style={styles.container}>
      <FloatballViewManager url={url} style={styles.box} isShow={isShow}/>
      <Button onPress={() => {
          setShow(!isShow);
          console.log(isShow)
        }} title={'click'}/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
