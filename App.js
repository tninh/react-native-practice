/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, Image } from 'react-native';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}
// class Blink extends Component{
//   constructor(props){
//     super(props);
//     this.state = {isShowingText: true};
//     //Toggle at the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowText: !previousState.isShowingText };
//       });
//     }, 900);
//   }
//   render()
//     {
//       let display = this.state.isShowingText ? this.props.text : ' ';
//       return(<Text>{display}</Text>);
//     }
// }

// export default class BlinkApp extends Component{
//   render(){
//     return(
//     <View>
//       <Blink text='I love the blink'/>
//       <Blink text='Yes blinking is so great' />
//       <Blink text='Why did they ever take this out of HTML' />
//       <Blink text='Look at me look at me look at me' />
//     </View>
//       );
//   }
// }
// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
// class Greeting extends Component{
//   render(){
//     return(
//       <Text>
//         Hello {this.props.name}!
//         </Text>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component{
//   render(){
//     return(
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Tri' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
// export default class Bananas extends Component{
//   render(){
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//     // <View>
//     //   <Text>Hello World!</Text>
//     // </View>
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }

// }
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);
// class Greeting extends Component{
//   render(){
//     return(
//     <View style={{alignItems: 'center'}}>
//       <Greeting name='Rexa'/>
//       <Greeting name='Tri' />
//     </View>

//     );
//   }
// }
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
