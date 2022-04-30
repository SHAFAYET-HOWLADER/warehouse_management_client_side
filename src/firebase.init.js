// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_6LAIsV8Jbgtrr7irVB9b-Cm-LMs18wo",
  authDomain: "warehouseactivity-da4ea.firebaseapp.com",
  projectId: "warehouseactivity-da4ea",
  storageBucket: "warehouseactivity-da4ea.appspot.com",
  messagingSenderId: "469756155616",
  appId: "1:469756155616:web:f507e5e0acca460f13e285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;