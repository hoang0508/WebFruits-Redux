const { collection } = require("firebase/firestore");
const { db } = require("firebases/Firebase-config");

const requestProduct = () => {
  const colRef = collection(db, 'product')
  
}