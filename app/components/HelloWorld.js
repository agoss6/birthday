import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import actions from '../actions';
import Login from './Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class HelloWorld extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    actions.helloWorld().then((response) => {
      this.setState({ text: response.data.message });
    }).catch((error) => { console.log(error); });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello birthday frontend
        </Text>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
        <Login />
      </View>
    );
  }
}

export default HelloWorld;
