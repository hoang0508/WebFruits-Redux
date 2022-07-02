const { collection, onSnapshot } = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

export const requestProduct = () => {
  const colRef = collection(db, "product");
  onSnapshot(colRef, (snapshot) => {
    let results = [];
    snapshot.forEach((doc) => {
      results.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return results;
  });
};
