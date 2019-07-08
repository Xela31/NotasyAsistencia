import {AppRegistry}                from 'react-native';
import App                          from './src';
import {name as appName}            from './app.json';
import { GoogleSignin }             from "react-native-google-signin";
import GDrive                       from 'react-native-google-drive-api-wrapper';

GoogleSignin.configure({
    // https://developers.google.com/identity/protocols/googlescopes
    scopes: [
        'https://www.googleapis.com/auth/drive'
    ],
    shouldFetchBasicProfile: true,
});
GDrive.init();
AppRegistry.registerComponent(appName, () => App);
