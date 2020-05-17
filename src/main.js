import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from '@/utils/message.plugin';
import Loader from "@/components/app/Loader.vue";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";


import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);


const firebaseConfig = {
  apiKey: "AIzaSyCVScgZqv7woeNQLjtBs8oByOaMXqMPViY",
  authDomain: "vue-prac-crm.firebaseapp.com",
  databaseURL: "https://vue-prac-crm.firebaseio.com",
  projectId: "vue-prac-crm",
  storageBucket: "vue-prac-crm.appspot.com",
  messagingSenderId: "659012638887",
  appId: "1:659012638887:web:238f285c954f42a3c52382",
  measurementId: "G-S78X5WX0FH"
};

firebase.initializeApp(firebaseConfig);
let app; 

firebase.auth().onAuthStateChanged(() =>{
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

