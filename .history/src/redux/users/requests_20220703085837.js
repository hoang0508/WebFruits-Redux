import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";

const requestUser = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(
      "🚀 ~ file: requests.js ~ line 6 ~ onAuthStateChanged ~ user",
      user
    );
    return user;
  });
};

export { requestUser };
