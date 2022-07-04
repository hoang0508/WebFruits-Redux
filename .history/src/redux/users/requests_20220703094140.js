import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";

const requestUser = async () => {
  const reponse = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
    return reponse;
  });
};

export { requestUser };
