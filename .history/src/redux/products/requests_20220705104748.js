const {
  collection,
  onSnapshot,
  doc,
  getDoc,
  query,
  where,
  limit,
} = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

const requestProductFilter = async (filter) => {
  console.log(
    "🚀 ~ file: requests.js ~ line 12 ~ requestProduct ~ filter",
    filter
  );

  const colRef = collection(db, "product");
  const newRef = filter
    ? query(
        colRef,
        where("name", ">=", filter),
        where("name", "<=", filter + "utf8")
      )
    : query(colRef, limit(1));
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
  console.log(reponse);
  return reponse;
};

//
const requestProductId = async (id) => {
  const colRef = doc(db, "product", id);
  const sigleDoc = await getDoc(colRef);
  return sigleDoc.data();
};

export { requestProduct, requestProductId, requestProductFilter };