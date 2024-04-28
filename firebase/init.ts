import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7m_daHSu1lK-X9HqpIuq7k60eZdpfXrc",
    authDomain: "emp-portal-b03eb.firebaseapp.com",
    projectId: "emp-portal-b03eb",
    storageBucket: "emp-portal-b03eb.appspot.com",
    messagingSenderId: "425428980798",
    appId: "1:425428980798:web:9109ed0eb77ca4884aed6f",
    measurementId: "G-6YHGYE2D5G"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
