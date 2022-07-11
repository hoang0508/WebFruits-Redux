import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "firebases/Firebase-config";
import { toast } from "react-toastify";

const requestUser = async () => {
  const reponse = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
  return reponse;
};

//
const requestsUserSignOut = (authSignout) => {
  signOut(authSignout)
    .then(() => {
      toast.success("Sign out successfully!!");
    })
    .catch((error) => {
      // An error happened.
      toast.error("Sign out failed!!");
    });
};

export { requestUser, requestsUserSignOut };
