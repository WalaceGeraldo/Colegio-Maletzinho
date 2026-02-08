import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Configuração do Firebase
// NOTA: Em aplicações web do lado do cliente (sem servidor), é normal que a API Key fique visível no código.
// A segurança é feita nas Regras de Segurança do Firebase Cloud Firestore, restringindo quem pode ler/escrever.
const firebaseConfig = {
    apiKey: "AIzaSyCWVRlYfq2E4lwlNKOM7ZQiLYpF1hCawB4",
    authDomain: "maletzinho-5e2e1.firebaseapp.com",
    projectId: "maletzinho-5e2e1",
    storageBucket: "maletzinho-5e2e1.firebasestorage.app",
    messagingSenderId: "393007470469",
    appId: "1:393007470469:web:d6650081f8f6d0d4af96ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

// Expose to window for script.js to access
// Isso permite que o script.js (que não é um módulo) acesse as funções do Firebase
window.firebaseAuth = {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    provider,
    GoogleAuthProvider
};

window.firebaseDb = {
    db,
    doc,
    getDoc,
    setDoc,
    collection
};

// Dispatch event to signal Firebase is ready
// Avisa ao restante da aplicação que o Firebase foi carregado
window.dispatchEvent(new Event('firebase-ready'));
