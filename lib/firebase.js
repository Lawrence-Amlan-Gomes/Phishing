import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApwM17BrrfKaQ8fJXPd8DT-CyPju6w",
  authDomain: "phishingassignment-c7e83.firebaseapp.com",
  projectId: "phishingassignment-c7e83",
  storageBucket: "phishingassignment-c7e83.appspot.com",
  messagingSenderId: "718905381103",
  appId: "1:718905381103:web:407cb6b9d323a4bc581a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };