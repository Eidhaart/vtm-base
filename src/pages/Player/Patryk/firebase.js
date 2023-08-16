import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPYDmRtz_XsV6Y3YQzHJo-IWiZtEZ3kaM",
  authDomain: "vtmapp-77b0b.firebaseapp.com",
  projectId: "vtmapp-77b0b",
  storageBucket: "vtmapp-77b0b.appspot.com",
  messagingSenderId: "345873452144",
  appId: "1:345873452144:web:52f2ad1c9e95fdb96fb8b5",
  measurementId: "G-DWRE89XTZD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
