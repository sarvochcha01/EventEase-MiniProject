import { getAuth, onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router-dom";

const ProfileLoader = async () => {
  const auth = getAuth();

  return await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubscribe();
        resolve(user);
      } else {
        reject(redirect("/login"));
      }
    });
  });
};

export default ProfileLoader;
