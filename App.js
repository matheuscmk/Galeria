import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden />
    <WebView 
      source={{ uri: 'https://localhost/app-galeria' }}
    />
    </View>
  );
}

 // source={{ html:}}
//´
      
// <html>
// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
// </head>
//   <body>
//     <style>
//       *{
//         margin:0;
//         padding:0;
//         box-sizing:border-box;
//       }
//       .btn{
//         width:100%;
//         height:20px;
//         background-color:#069;
//         text-align:center;
//         color:white;
//       }
     
    
//     </style>
//     <div class="btn">Clique aqui!</div>
//   </body>
// </html>

// ´