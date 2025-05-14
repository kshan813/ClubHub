// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // ✅ Use Web SDK in Expo

const firebaseConfig = {
  apiKey: "AIzaSyDjQVfHQwZKzceTRk77JBPh8Pmodo-YiS8",
  authDomain: "clubhub-c85fd.firebaseapp.com",
  projectId: "clubhub-c85fd",
  storageBucket: "clubhub-c85fd.appspot.com",
  messagingSenderId: "867672354308",
  appId: "1:867672354308:web:3ce756418cb00b6b028f51",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ No persistence, but stable in Expo

export { auth };

