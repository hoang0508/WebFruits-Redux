const { collection, onSnapshot, doc } = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

export const requestProduct = () => {
  const colRef = collection(db, "product");
  const reponse = new Promise((resolve, reject) => {
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach(() => {
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
