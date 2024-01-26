
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8SlrtVrhZmYpuJS7DSP_BOVn9JXvVcpk",
  authDomain: "miniblog-65b65.firebaseapp.com",
  projectId: "miniblog-65b65",
  storageBucket: "miniblog-65b65.appspot.com",
  messagingSenderId: "806389108926",
  appId: "1:806389108926:web:0c8c37e0cf5bb03392ceef"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}