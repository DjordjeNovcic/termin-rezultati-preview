import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue }
  from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9C173giGVH0gt_x4W8f-hoJldHXyRfqo",
  authDomain: "termin-rezultati.firebaseapp.com",
  databaseURL: "https://termin-rezultati-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "termin-rezultati",
  storageBucket: "termin-rezultati.appspot.com",
  messagingSenderId: "263582756600",
  appId: "1:263582756600:web:d40d40c474340122d4950d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

/* EXPORT NA WINDOW (kao i DB) */
window.db = db;
window.auth = auth;

window.dbRef = (path) => ref(db, path);
window.pushTo = (path, data) => push(ref(db, path), data);
window.setTo = (path, data) => set(ref(db, path), data);
window.onValue = onValue;

/* AUTH HELPERS */
window.loginAdmin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

window.logoutAdmin = () => signOut(auth);

window.onAuth = (cb) =>
  onAuthStateChanged(auth, cb);
