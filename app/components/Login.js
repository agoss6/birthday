import React from 'react';
import { View } from 'react-native';
import FBSDK,
{
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

class Login extends React.Component {
  onLoginSuccess = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const accessToken = data.accessToken;
      // alert(accessToken.toString());

      const responseInfoCallback = (error, result) => {
        if (error) {
          console.log(error);
          alert(`Error fetching data: ${error.toString()}`);
        } else {
          console.log(result);
          alert(`Success fetching data: ${result.toString()}`);
        }
      };

      const infoRequest = new GraphRequest(
        '/me',
        {
          accessToken,
          parameters: {
            fields: {
              string: 'email,name,first_name,middle_name,last_name',
            },
          },
        },
        responseInfoCallback,
      );

      // Start the graph request.
      new GraphRequestManager().addRequest(infoRequest).start();
    });
  }

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
                // alert(`Login was successful with permissions: ${result.grantedPermissions}`);
                this.onLoginSuccess();
              }
            }
          }
          // onLogoutFinished={() => alert('User logged out')}
        />
      </View>
    );
  }
}

export default Login;
