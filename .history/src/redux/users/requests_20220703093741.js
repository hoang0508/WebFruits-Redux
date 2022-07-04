import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";

const requestUser = () => {
  const reponse = onAuthStateChanged(auth, (user) => {
    return user;
  });
  return reponse;
};

export { requestUser };
