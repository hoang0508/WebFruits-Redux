import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  query,
  where,
  limit,
  deleteDoc,
} from "firebase/firestore";
import { db } from "firebases/Firebase-config";

// product data
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

// Limit product
const requestProductLimit = async () => {
  const colRef = collection(db, "product");
  const newRef = query(colRef, limit(1));
  // const documentSnapshots = await getDocs(newRef);
  // const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
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

// Delete product
const requestProductDelete = async (id) => {
  const colRef = doc(db, "product", id);
  await deleteDoc(colRef);
  return id;
};

// query product
const requestProductQuery = (status) => {
  return Number(status);
};

const requestProductPrice = (price) => {
  console.log(
    "🚀 ~ file: requests.js ~ line 81 ~ requestProductPrice ~ price",
    price
  );
  return price;
};

export {
  requestProduct,
  requestProductId,
  requestProductLimit,
  requestProductDelete,
  requestProductQuery,
};
