const {
  collection,
  onSnapshot,
  doc,
  getDoc,
  query,
  where,
} = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

const requestProduct = async (filter) => {
  const colRef = collection(db, "product");
  const newRef = filter
    ? query(
        colRef,
        where("name", ">=", filter),
        where("name", "<=", filter + "utf8")
      )
    : colRef;
  const reponse = await new Promise((resolve, reject) => {
    onSnapshot(newRef, (snapshot) => {
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
  console.log(reponse);
  return reponse;
};

//
const requestProductId = async (id) => {
  const colRef = doc(db, "product", id);
  const sigleDoc = await getDoc(colRef);
  return sigleDoc.data();
};

export { requestProduct, requestProductId };
