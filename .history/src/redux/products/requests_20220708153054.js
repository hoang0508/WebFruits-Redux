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
const requestProductQuery = async (status) => {
  // const colRef = collection(db, "product");
  // const q = query(colRef, where("status", "==", status));
  // const querySnapshop = await getDoc(q);
  // const reponse = new Promise((resolve, reject) => {
  //   let result = [];
  //   querySnapshop.foreach((doc) => {
  //     result.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     });
  //   });
  //   resolve(result);
  // });
  // console.log(reponse);
  return Number(status);
};

export {
  requestProduct,
  requestProductId,
  requestProductLimit,
  requestProductDelete,
  requestProductQuery,
};
