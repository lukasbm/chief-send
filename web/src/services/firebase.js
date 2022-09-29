import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDca-JZ8kawgNGqlc780arUBp0SYNfD0iU",
  authDomain: "chief-send.firebaseapp.com",
  projectId: "chief-send",
  storageBucket: "chief-send.appspot.com",
  messagingSenderId: "122053107867",
  appId: "1:122053107867:web:c754e30030accd2cc7663e",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
