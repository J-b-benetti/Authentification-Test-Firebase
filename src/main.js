import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from "firebase/app"

import './assets/main.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMJ47meCrYzlGgYslRpMRxUtuJzMD2z8",
  authDomain: "vue-authentification-exemple.firebaseapp.com",
  projectId: "vue-authentification-exemple",
  storageBucket: "vue-authentification-exemple.appspot.com",
  messagingSenderId: "582994970980",
  appId: "1:582994970980:web:cf159c7ea1ba710c125271"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


MDP APPLI : Adminptut2023
*/
