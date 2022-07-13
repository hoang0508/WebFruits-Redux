import { collection, onSnapshot } from "firebase/firestore";
import { db } from "firebases/Firebase-config";

export const requestLike = async () => {
  const colRef = collection(db, "like");
  const reponse = await new Promise((resolve, reject) => {
    onSnapshot(colRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      resolve(result);
    });
  });
  console.log(reponse);
  return reponse;
};
