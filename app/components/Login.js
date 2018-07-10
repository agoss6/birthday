import React, { Component } from 'react';
import { View } from 'react-native';
import FBSDK, { LoginButton } from 'react-native-fbsdk';

class Login extends React.Component {
  render() {
    return (
      <View>
        <LoginButton
          readPermission={['public_profile']}
          onLoginFinished={
          (error, result) => {
            if (error) {
              alert(`Login failed with error: ${result.error}`);
            } else if (result.isCancelled) {
              alert('Login was cancelled');
            } else {
              alert(`Login was successful with permissions: ${result.grantedPermissions}`);
            }
          }
        }
          onLogoutFinished={() => alert('User logged out')}
        />
      </View>
    );
  }
}

export default Login;
