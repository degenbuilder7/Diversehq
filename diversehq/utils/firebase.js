import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "diverse-test-6aa8f.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: "G-B3WVKH3QMN"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}