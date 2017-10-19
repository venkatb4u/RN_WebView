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
            // source = {{ uri: require('../../webviews/view.html') }}
            // source = {{ uri: '../../webviews/view.html' }}
            source = {{ uri: 'https://react-dnd.github.io/react-dnd/examples-chessboard-tutorial-app.html' }}
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