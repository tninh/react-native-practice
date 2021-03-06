/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, AppRegistry, StyleSheet, Text,TextInput, Alert, Button, ScrollView, Image, FlatList, ActivityIndicator} from 'react-native';

export default class FetchExample extends React.Component{
  constructor(props){
    super(props);
    this.state={isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });
    })
    .catch((error) => {
      console.error(error)
    });
  }
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data = {this.state.dataSource}
          renderItem = {({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor = {(item, index) => index}
        />
      </View>
    );
  }
}
// export default class IScrolledDownAndWhatHappenedNextShockMe extends Component{
//   render(){
//     return(
//       <ScrollView>
//         <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//       </ScrollView>
//     );

//   }
// }
// export default class Touchables extends Component{
//   _onPressButton(){
//     Alert.alert('You tapped the button')
//   }
//   _onLongPressButton(){
//     Alert.alert('You long-pressed the button')
//   }
//   render(){
//     return(
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//         <View style = {styles.button}>
//           <Text style={styles.buttonText}>TouchableHightlight</Text>
//         </View>
//         </TouchableHighlight>
//         <TouchableNativeFeedback 
//           onPress={this._onPressButton}
//           background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground(): ''}>
//           <View>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//           onPress={this._onPressButton}
//         >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     paddingTop: 60,
//     alignItems:'center'
//   },
//   button:{
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor:'#2196F3'
//   }
// });

// import { AppRegistry, Image } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton(){
//     Alert.alert('You tapped the button')
//   }
//   render(){
//     return(
//       <View style={styles.container}>
//         <View style = {styles.buttonContainer}>
//         <Button
//           onPress={this._onPressButton}
//           title="Press Me"
//         />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button 
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1, 
//     justifyContent: 'center',
//   },
//   buttonContainer:{
//     margin: 20
//   },
//   alternativeLayoutButtonContainer:{
//     margin: 20, 
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })
// export default class PizzaTranslator extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//   render(){
//     return(
//       <View style={{padding: 10}}>
//         <TextInput style={{height: 40}} 
//         placeholder = 'Type here to translate!'
//         onChangeText = {(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word).join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }
// export default class FlexDimensionBasics extends Component{
//   render(){
//     return(
//       // <View style={{flex: 1}}>
//       //   <View style={{width: 100, height: 100, backgroundColor: 'powerblue'}} />
//       //   <View style={{width:100, height: 100, backgroundColor: 'skyblue'}} />
//       //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       // </View>
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
      
//     );
//   }
// }
//AppRegistry.registerComponent('AwesomeProject', () => IScrolledDownAndWhatHappenedNextShockMe);
// export default class FixedDimensionBasics extends Component{
//   render(){
//     return (
//       <View>
        // <View style={{width: 50, height: 50, backgroundColor: 'powerblue'}} />
        // <View style={{width:100, height: 100, backgroundColor: 'skyblue'}} />
        // <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
// export default class LotsOfStyles extends Component {
//   render(){
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}> bigblue, then red </Text>
//         <Text style={[styles.red, styles.bigblue]}> red, then bigblue </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     bigblue:{
//       color: 'blue',
//       fontWeight: 'bold', 
//       fontSize: 30,
//     },
//     red: {
//       color: 'red',
//     }, 
// });
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
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
