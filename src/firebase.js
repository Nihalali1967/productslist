
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8vVM20ubUKR2WYSPduxj8Fb5zA8bpSbc",
  authDomain: "productlist-2d5cb.firebaseapp.com",
  projectId: "productlist-2d5cb",
  storageBucket: "productlist-2d5cb.appspot.com",
  messagingSenderId: "82976492162",
  appId: "1:82976492162:web:9cc22c36d3a8175323829b",
  measurementId: "G-LH78YDSJGG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
