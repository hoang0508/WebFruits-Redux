import { data } from "autoprefixer";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "firebases/Firebase-config";

export const requestLike = async () => {
  const colRef = collection(db, "like");
  const reponse = await new Promise((resolve, reject) => {
    onSnapshot(colRef, (snapshot) => {
      snapshot.forEach((doc) => {
        let result = [];
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  });
};
