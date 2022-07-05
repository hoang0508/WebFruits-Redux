const { collection, onSnapshot, doc, getDoc } = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

const requestProduct = async () => {
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

//
const requestProductId = async (id) => {
  const colRef = doc(db, "product", id);
  const sigleDoc = await getDoc(colRef);
  return sigleDoc.data();
};

export { requestProduct, requestProductId };
