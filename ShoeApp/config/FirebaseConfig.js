import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHzVTbPvqMeg10GmVcnDxcN4QBNOst_oc",
    authDomain: "quan-ly-shg.firebaseapp.com",
    databaseURL: "https://quan-ly-shg-default-rtdb.firebaseio.com",
    projectId: "quan-ly-shg",
    storageBucket: "quan-ly-shg.appspot.com",
    messagingSenderId: "679388843623",
    appId: "1:679388843623:web:34c3c0579556173c470ec2",
    measurementId: "G-T0TTBRZH8J"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);