const { collection, onSnapshot } = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

const requestsCart = () => {
  const colRef = collection(db, "cart");
  const reponse = new Promise((resolve, reject) => {
    onSnapshot(colRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      resolve(result);
    });
  });
  console.log(reponse);
  return reponse;
};

//

export { requestsCart };
