import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebases/Firebase-config";

export default async function requestUser() {
  const reponse = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
  console.log(reponse);
  return reponse;
}
