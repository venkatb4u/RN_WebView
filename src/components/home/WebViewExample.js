import React, { Component } from 'react'

import {
   View,
   WebView,
   StyleSheet
} 
from 'react-native'

const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
            // this is to check how webView in RN, supports ftp
            // source = {{ uri: require('../../webviews/view.html') }}

            
            source = {{ uri: 'https://www.myharmony.com/en-in/' }}

            // this is to check how Drag-&-Drop in webview works
            // source = {{ uri: 'https://react-dnd.github.io/react-dnd/examples-chessboard-tutorial-app.html' }} 
         />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})