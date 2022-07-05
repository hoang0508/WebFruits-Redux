import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  query,
  where,
  limit,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "firebases/Firebase-config";

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
  console.log("🚀 ~ file: requests.js ~ line 62 ~ requestProductId ~ id", id);
  const colRef = doc(db, "product", id);
  const sigleDoc = await getDoc(colRef);
  return sigleDoc.data();
};

//
const requestProductDelete = async (id) => {
  const colRef = doc(db, "product", id);
  const sigleDelete = await deleteDoc(colRef);
  console.log(
    "🚀 ~ file: requests.js ~ line 73 ~ requestProductDelete ~ sigleDelete",
    sigleDelete
  );
  return sigleDelete;
  //  const data = sigleDelete.filter(() => )
};

export {
  requestProduct,
  requestProductId,
  requestProductLimit,
  requestProductDelete,
};
