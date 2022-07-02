import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";

export default function requestUser() {
  onAuthStateChanged(auth, (user) => {
    return user;
  });
}
