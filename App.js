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
//Esta rodando este codigo local para exemplo
{/* <html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-"/>
    </head>
    <style>
        *{margin:0;padding:0;box-sizing: border-box;}
        .header{
            background-color: slategray;
            text-align: center;
            width: 100%;
            color: silver;
            font-size: 30px;
            padding: 20px 0;
        }
        img{
            max-width: 100%;
            width: 90%;
            display: block;
            margin: 10px auto;
        }
        .btn-load{padding: 30px 0;}

        button{
            background-color: slategray;
            width: 200px;
            height: 40px;
            color: white;
            cursor: pointer;
        }
    </style>
    <body>
       <div class="header">
           Aplicativo Galeria
       </div>
       <!--Galeria-->
       <div id="galeria" class="galeria">
     

       </div>

       <div class="btn-load" id="carregar-mais"><button>Carregar Mais!</button></div>
       <script>
           var galeria = document.getElementById('galeria');
           var quantidades = 1;
           var controle = 0;
           var carregarMais = document.getElementById('carregar-mais');

           for(var i=0; i<quantidades; i++){
               galeria.innerHTML+=`<img src="https://picsum.photos/600/300?random=`+i+`" />`;
           }
           carregarMais.addEventListener('click',()=>{
            for(var i=0; i<quantidades; i++){
              let image = document.createElement('img');
              image.src = 'https://picsum.photos/600/300?random='+controle;
              carregarMais.innerHTML = "carregando...";
              image.addEventListener('load',function(){
               carregarMais.innerHTML = "Carregar Mais!";   
              })
              galeria.appendChild(image);
              controle++;
           }
           })
           </script>
    </body>

</html> */}