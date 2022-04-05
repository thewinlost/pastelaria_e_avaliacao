/*jshint esversion:6*/
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import MeuEstilo from './src/meuestilo';
import * as Speech from "expo-speech";



export default class App extends React.Component{
  state={
      valorcarne: 5.0,
      valorfrango: 6.5,
      valorstrogonoff: 8.0,
      qntpastelcarne: 0.0,
      qntpastelstrogonoff: 0.0,
      qntpastelfrango: 0.0,
      resultadopasteis:0.0,
      valorrefrilata:2.5,
      valorrefri600:4.0,
      valorrefri2l: 5.5,
      qntrefrilata: 0.0,
      qntrefri600: 0.0,
      qntrefri2l: 0.0,
      resultadorefri:0.0,
      resultadototal:0.0
  }


  atualizaQntCarne=(number)=>{
    this.setState({qntpastelcarne:number});
  }
    atualizaQntFrango=(number)=>{
    this.setState({qntpastelfrango:number});
  };
  atualizaQntStrogonoff=(number)=>{
    this.setState({qntpastelstrogonoff:number});
  };
  atualizaQntRefriLata=(number)=>{
    this.setState({qntrefrilata:number});
  };
  atualizaQntRefri600=(number)=>{
  this.setState({qntrefri600:number});
  };
  atualizaQntRefri2L=(number)=>{
  this.setState({qntrefri2l:number});
  };
  

  calcular=(valorcarne,valorfrango, valorstrogonoff, qntpastelcarne, qntpastelfrango, qntpastelstrogonoff,  valorrefrilata, valorrefri600, valorrefri2l, qntrefrilata, qntrefri600, qntrefri2l, resultadopasteis, resultadorefri, resultadototal)=>{
    resultadopasteis=parseFloat(valorcarne * qntpastelcarne) + parseFloat(valorfrango * qntpastelfrango) + parseFloat(valorstrogonoff * qntpastelstrogonoff);
    resultadorefri=parseFloat(valorrefrilata * qntrefrilata) + parseFloat(valorrefri600 * qntrefri600) + parseFloat(valorrefri2l * qntrefri2l);
    resultadototal= parseFloat(resultadopasteis) + parseFloat(resultadorefri);
     

    Speech.speak('\n Pastéis de carne: ' + qntpastelcarne + '\n Pastéis de frango: ' + qntpastelfrango + '\n Pastéis de Strogonoff: '  + qntpastelstrogonoff +
     '\n Valor total dos pastéis: '+ resultadopasteis+ '\n Refri lata: ' + qntrefrilata + '\n Refri 600 ml: ' + qntrefri600 + '\n Refri 2 litros:'  + qntrefri2l +
     '\n Valor total dos refrigerantes: '+ resultadorefri + '\n Valor total:' + resultadototal, {language:"pt-BR"});  

     alert('Pastéis de carne: ' + qntpastelcarne + '\n Pastéis de frango: ' + qntpastelfrango + '\n Pastéis de Strogonoff: '  + qntpastelstrogonoff +
     '\n Valor total dos pastéis: ' + resultadopasteis+ '\n Refri lata: ' + qntrefrilata + '\n Refri 600 ml: ' + qntrefri600 + '\n Refri 2L:'  + qntrefri2l +
     '\n Valor total dos refrigerantes: ' + resultadorefri + '\n Valor total:' + resultadototal, {language:"pt-BR"});

 };
  


  render(){
      return(
          <View>
              <h1> Pastelaria da Vitória</h1> 

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Quantidade de pastéis de carne:"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaQntCarne}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Quantidade de pastéis de frango:"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaQntFrango}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Quantidade de pastéis de strogonoff"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaQntStrogonoff}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Quantidade de pastéis de refris lata"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaQntRefriLata}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Quantidade de pastéis de refris 600ml"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaQntRefri600}
              keyboardType='numeric' />

              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="Quantidade de pastéis de refris 2L"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaQntRefri2L}
              keyboardType='numeric' />


              <TouchableOpacity style={MeuEstilo.submitButton}
                onPress={
                  ()=>this.calcular(this.state.valorcarne, this.state.valorfrango, this.state.valorstrogonoff, this.state.qntpastelcarne, this.state.qntpastelfrango, this.state.qntpastelstrogonoff, this.state.valorrefrilata, this.state.valorrefri600, this.state.valorrefri2l, this.state.qntrefrilata, this.state.qntrefri600, this.state.qntrefri2l, this.state.resultadopasteis, this.state.resultadorefri, this.state.resultadototal)
                }>
                <Text style={MeuEstilo.submitButtonText}>Somar Valores</Text>
              </TouchableOpacity>
          </View>
  )}
}

