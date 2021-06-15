import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAhXJq05MXrwJaonGe39sS5CE-htbrOiwI",
    authDomain: "scrumlogger.firebaseapp.com",
    projectId: "scrumlogger",
    storageBucket: "scrumlogger.appspot.com",
    messagingSenderId: "319619482208",
    appId: "1:319619482208:web:3b72623d1bf070c5b0f905"
  }


firebase.initializeApp(firebaseConfig)  

const app = createApp(App);
app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(store);
app.mount("#app");
