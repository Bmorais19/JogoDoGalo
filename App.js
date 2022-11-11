import React, { Component } from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import JogoGalo from './src/JogoGalo'


type Props = {};
export default class App extends Component<Props> {
  
  constructor(pros){
    super(pros);

    JogoGalo.start();

    this.state = {
      board: JogoGalo.board,
      gameOver: JogoGalo.gameOver
    }
  }
  
  makePlay(index){

    JogoGalo.makePlay(index)

    this.setState({board: JogoGalo.board,
      gameOver: JogoGalo.gameOver})

  }

isGameOver(){
  if(this.state.gameOver)
    return <Text>
      Game Over 
    </Text>
}
  
  render(){
    return(
        <View style={styles.container}>
          
        {this.state.board.map((value, index )=>(
            <TouchableOpacity key= {index} style={styles.piece}
                onPress= {()=>{this.makePlay(index)}}>
                    <Text style ={ this.makePlay(index) }>
                      {value}
                    </Text>

                </TouchableOpacity>
        ))}

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection:"row",
   flexWrap:"wrap", 
   justifyContent: 'center',
   alignItems: 'center',
   alignContent : 'center', 
   backgroundColor: '#F5FCFF', 
  },
piece:{
  width: Dimensions.get('window').width / 3,
  height: Dimensions.get('window').height / 3,
  backgroundColor: "#ddd",
  alignItems: 'center',
  justifyContent:'center',

  borderWidth: 0.5,
  borderColor: "#111"
},
  pieceText: {
    fontSize: 60
  }


});