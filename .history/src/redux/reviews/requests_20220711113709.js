import { collection, onSnapshot } from "firebase/firestore";
import { db } from "firebases/Firebase-config";

const requestReview = async () => {
  const colRef = collection(db, "review");
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
  return reponse;
};

export { requestReview };
