import * as firebase from 'firebase';

const config = {
    appId: '1:901047714593:android:6feb9a0c8821561d',
    apiKey: 'AIzaSyBpfG7eBoPhpnM2w097n1BhXE0KFSBu0J8',
    authDomain: 'gradepoint-60bb9.firebaseapp.com',
    databaseURL: 'https://ur-demo-3264a.firebaseio.com',
    projectId: 'ur-demo-3264a',
    storageBucket: 'gradepoint-60bb9.appspot.com',
   // messagingSenderId: '948374407030',
};

const initializeApp = () => {
    firebase.initializeApp(config);
};

export { initializeApp, firebase as default };
