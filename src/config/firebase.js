
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAuNSaaYYHqNLxuI4-Vd370fekxQGu0vg4",
  authDomain: "tiktok---sutra.firebaseapp.com",
  projectId: "tiktok---sutra",
  storageBucket: "tiktok---sutra.appspot.com",
  messagingSenderId: "171215463817",
  appId: "1:171215463817:web:6da3b130e99624a5412d58"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db