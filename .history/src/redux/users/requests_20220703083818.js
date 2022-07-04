import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";

const requestUser = () => {
  onAuthStateChanged(auth, (user) => {
    return user;
  });
};

export { requestUser };
