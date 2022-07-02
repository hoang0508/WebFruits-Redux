const { collection, onSnapshot, doc } = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

export const requestProduct = async () => {
  const colRef = collection(db, "product");
  const reponse = await new Promise((resolve, reject) => {
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      resolve(results);
    });
  });
  return reponse;
};
